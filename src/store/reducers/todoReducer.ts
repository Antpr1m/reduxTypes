import { TodoActionsTypes } from '../../types/todos';
import { TodoAction, TodoState } from "../../types/todos"

const initialState: TodoState = {
	todos: [],
	loading: false,
	error: null,
	limit: 10,
	page: 1
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
	switch (action.type) {
		case TodoActionsTypes.FETCH_TODOS:
			return { ...state, loading: true }
		case TodoActionsTypes.FETCH_TODOS_SUCCESS:
			return { ...state, loading: false, todos: action.payload }
		case TodoActionsTypes.FETCH_TODOS_ERROR:
			return { ...state, loading: false, error: action.payload }
		case TodoActionsTypes.SET_TODO_PAGE:
			return { ...state, page: action.payload }
		default:
			return state
	}
}