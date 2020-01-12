import React from 'react'
import {render} from '@testing-library/react'
import { ErrorBoundary } from '../components/ErrorBoundary'
import {reportError as mockReportError} from '../api'

jest.mock('../api.js')

const ErrorComp = ({shouldThrow}) => {
  if(shouldThrow) throw new Error('Hello there')
  return null
}

test('should report error with correct arguments', () => {
  mockReportError.mockResolvedValueOnce({success: true})
  const {rerender} = render(<ErrorBoundary><ErrorComp /></ErrorBoundary>)
  rerender(<ErrorBoundary><ErrorComp shouldThrow /></ErrorBoundary>)

  expect(mockReportError).toHaveBeenCalledTimes(1)

  const error = expect.any(Error)
  const info = {componentStack: expect.stringContaining('ErrorComp')}
  expect(mockReportError).toHaveBeenCalledWith(error, info)
})
