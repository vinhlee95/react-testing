import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import {TransitionMessage} from '../components/TransitionMessage'

// Mock CSSTransition so that we don't have to wait
// for the animation in our tests
jest.mock('react-transition-group', () => {
  return {
    CSSTransition: props => props.in ? props.children : null
  }
})

test('should render message when toggle button gets clicked', () => {
  const message = 'hello world'
  const {getByText, queryByText} = render(<TransitionMessage>{message}</TransitionMessage>)
  const button = getByText(/toggle/i)

  // Message is hidden by default
  expect(queryByText(message)).not.toBeInTheDocument()

  // Click toggle button, the message should appear
  fireEvent.click(button)
  expect(queryByText(message)).toBeInTheDocument()

  // Click it again, now the message should disappear
  fireEvent.click(button)
  expect(queryByText(message)).not.toBeInTheDocument()
})
