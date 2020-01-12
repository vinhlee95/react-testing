const fetchUser = () => {
	const user = {
		name: 'Foo',
		age: 20
	}

	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(user), 500)
	})
}

const reportError = (error, info) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve({message: 'Done'}), 500)
	})
}

export {
	fetchUser,
	reportError
}