import React from 'react'
import {render, fireEvent, wait} from '@testing-library/react'
import {Redirect as MockRedirect} from 'react-router-dom'

import {TddForm} from '../components/TddForm'
import {saveData as mockSaveData} from '../api'

// Mock API module
jest.mock('../api.js')

// Mock React router dom
jest.mock('react-router-dom', () => {
  return {
    Redirect: jest.fn(() => null)
  }
})

afterEach(() => {
  jest.clearAllMocks()
})

test('should render a form with title, content and submit button and redirect after submission', async () => {
  mockSaveData.mockResolvedValueOnce()
  const fakeUser = {id: 'user-1'}
  const {getByLabelText, getByText} = render(<TddForm user={fakeUser} />)
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
  expect(mockSaveData).toHaveBeenCalledWith({...data, id: fakeUser.id})

  await wait(() => {
    expect(MockRedirect).toHaveBeenCalledWith({to: '/'}, {})
  })
})
