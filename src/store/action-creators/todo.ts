import { TodoActionsTypes } from './../../types/todos';
import axios from 'axios';
import { Dispatch } from 'redux';
import { TodoAction } from '../../types/todos';



export const fetchTodos = (page = 1, limit = 10) => {
	return async (dispatch: Dispatch<TodoAction>) => {  // Типизация dispatch
		try {
			dispatch({ type: TodoActionsTypes.FETCH_TODOS })
			const responce = await axios.get('https://jsonplaceholder.typicode.com/todos', {
				params: { page: page, _limit: limit }
			})
			dispatch({ type: TodoActionsTypes.FETCH_TODOS_SUCCESS, payload: responce.data })
		} catch (e) {
			dispatch({ type: TodoActionsTypes.FETCH_TODOS_ERROR, payload: 'Произошла ошибка при загрузке списка дел' })
		}
	}
}

export function setTodoPage(page: number): TodoAction {
	return { type: TodoActionsTypes.SET_TODO_PAGE, payload: page }
}