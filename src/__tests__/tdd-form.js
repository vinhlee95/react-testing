import React from 'react'
import {TddForm} from '../components/TddForm'
import {render, fireEvent} from '@testing-library/react'

test('should render a form with title, content and submit button', () => {
  const {getByLabelText, getByText} = render(<TddForm />)
  getByLabelText(/title/i)
  getByLabelText(/content/i)
  const submitButton = getByText(/submit/i)

  fireEvent.click(submitButton)

  expect(submitButton).toBeDisabled()
})
