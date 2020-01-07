import React from 'react';
import { render } from '@testing-library/react';
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