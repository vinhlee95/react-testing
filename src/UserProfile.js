import React from 'react'
import {fetchUser} from './api'

const UserProfile = () => {
	const [user, setUser] = React.useState(null)

	const getUser = async () => {
		const user = await fetchUser()
		setUser(user)
	}

	return(
		<div>
			<button onClick={getUser}>Get user</button>
			{
				user ?
				<p data-testid='user-name'>{user.name}</p> :
				null
			}
		</div>
	)
}

export default UserProfile