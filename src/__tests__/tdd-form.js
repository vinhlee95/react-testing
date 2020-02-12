import React from 'react'
import {render, fireEvent} from '@testing-library/react'

import {TddForm} from '../components/TddForm'
import {saveData as mockSaveData} from '../api'

jest.mock('../api.js')

test('should render a form with title, content and submit button', () => {
  mockSaveData.mockResolvedValueOnce()

  const {getByLabelText, getByText} = render(<TddForm />)
  const submitButton = getByText(/submit/i)
  const data = {
    title: 'Title',
    content: 'Content',
    // foo: 'bar' enable this will fail the test
  }

  getByLabelText(/title/i).value = data.title
  getByLabelText(/content/i).value = data.content

  fireEvent.click(submitButton)

  expect(submitButton).toBeDisabled()
  expect(mockSaveData).toHaveBeenCalledTimes(1)
  expect(mockSaveData).toHaveBeenCalledWith(data)
})
