import axios from 'axios';
import { Dispatch } from 'redux';
import { UserAction, UserActionType } from './../../types/users';


export const fetchUsers = () => {
	return async (dispatch: Dispatch<UserAction>) => {  // Типизация dispatch
		try {
			dispatch({ type: UserActionType.FETCH_USERS })
			const responce = await axios.get('https://jsonplaceholder.typicode.com/users')
			dispatch({ type: UserActionType.FETCH_USERS_SUCCESS, payload: responce.data })
		} catch (e) {
			dispatch({ type: UserActionType.FETCH_USERS_ERROR, payload: 'Произошла ошибка при загрузке пользователей' })
		}
	}
}