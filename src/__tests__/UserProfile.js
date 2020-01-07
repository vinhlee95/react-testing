import React from 'react'
import {render, fireEvent, wait} from '@testing-library/react'
import {fetchUser as mockFetchUser} from '../api'
import UserProfile from '../UserProfile'

jest.mock('../api.js')

test('should render user name on clicks', async () => {
	const mockUser = {name: 'Bar'}
	mockFetchUser.mockResolvedValueOnce(mockUser)

	const {getByText, getByTestId} = render(<UserProfile />)
	const button = getByText(/get user/i)
	fireEvent.click(button)

	expect(mockFetchUser).toBeCalledTimes(1)

	// Wait until we get element with test id of user-name
	// to have text content of mock user name
	// e.g wait until the assertion no longer throws an error
	await wait(() => {
		expect(getByTestId(/user-name/i)).toHaveTextContent(/bar/i)
		// expect(getByTestId('user-name')).toHaveTextContent(/bar/i) this should fail
	})
})
