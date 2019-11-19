import {
    loadTodosData
} from './actionTypes';

import {
    getTodos
} from '../api';

const loadTodos = () => async dispatch => {
    const { data } = await getTodos();

    return dispatch(loadTodosData(data.todos));
}

export default {
    loadTodos
}