import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { reportError as mockReportError } from "../api";

jest.mock("../api.js");

beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  console.error.mockRestore();
});

const ErrorComp = ({ shouldThrow }) => {
  if (shouldThrow) throw new Error("Hello there");
  return null;
};

test("should report error with correct arguments", () => {
  mockReportError.mockResolvedValueOnce({ success: true });
  const { rerender, getByRole, queryByRole, queryByText } = render(
    <ErrorBoundary>
      <ErrorComp />
    </ErrorBoundary>
  );
  rerender(
    <ErrorBoundary>
      <ErrorComp shouldThrow />
    </ErrorBoundary>
  );

  expect(mockReportError).toHaveBeenCalledTimes(1);

  const error = expect.any(Error);
  const info = { componentStack: expect.stringContaining("ErrorComp") };
  expect(mockReportError).toHaveBeenCalledWith(error, info);

  // Test when the component re-renders
  rerender(
    <ErrorBoundary>
      <ErrorComp />
    </ErrorBoundary>
  );
  const button = queryByText(/try again/i)
  expect(getByRole("alert").textContent).toMatchInlineSnapshot(
    `"There was a problem."`
  );
  expect(button).toBeInTheDocument()

  // Click the button
  fireEvent.click(button)
	expect(button).not.toBeInTheDocument()
});
