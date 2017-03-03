import { REQUEST_USER, RECEIVE_USER, REQUEST_USER_ERROR } from '../../constants/user';

export default function usersReducer(state = {
	isFetching: false,
	users: []
}, action) {
	switch(action.type) {
		case REQUEST_USER: {
			return {...state, users: [], isFetching: true};
		}
		case RECEIVE_USER: {
			return {...state, users: action.users, isFetching: false};
		}
		case REQUEST_USER_ERROR: {
			return {...state, errorMessage: action.error};
		}
		default: {
			return state;
		}
	}
}