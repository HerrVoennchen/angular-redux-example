import * as types from '../constants/user';

function createFetchUsersAction() {
	return {
		type: types.REQUEST_USER
	};
}

function createReceiveUsersAction(data) {
	return {
		type: types.RECEIVE_USER,
		users: data
	};
}

function createErrorUsersAction(error) {
	return {
		type: types.REQUEST_USER_ERROR,
		error
	};
}

export default function restService($http) {
	function fetchUsers() {
		return dispatch => {
			dispatch(createFetchUsersAction());
			return setTimeout(() => { 
				$http.get('https://jsonplaceholder.typicode.com/users')
					.then(response => response.data)
					.then(json => dispatch(createReceiveUsersAction(json)))
					.catch(error => dispatch(createErrorUsersAction(error)));
			}, 5000); 
		};
	}

	return {
		fetchUsers
	};
}