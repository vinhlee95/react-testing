const fetchUser = () => {
	const user = {
		name: 'Foo',
		age: 20
	}

	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(user), 500)
	})
}

export {
	fetchUser
}