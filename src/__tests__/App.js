import React from 'react';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event'
import App from '../App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
})

test('renders correct label input', () => {
	const {getByLabelText} = render(<App />)
	const input = getByLabelText(/app input/i)
	expect(input).toHaveAttribute('type', 'text')
})

test('input changes render correct paragraph', () => {
	const mockValue = 'Hello world'

	const {getByLabelText, getByText} = render(<App />)
	const input = getByLabelText(/app input/i)
	user.type(input, mockValue)

	const paragraph = getByText(mockValue)
	expect(paragraph).toBeInTheDocument()
})
