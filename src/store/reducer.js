import { handleActions } from 'redux-actions';

import {
    loadTodosData
} from './actionTypes'

export const initialState = {
    todos: {
        data: [],
        errors: "",
        failed: false
    }
}

export default handleActions({
    [loadTodosData](state, { payload }) {
        return {
            ...state,
            todos: {
                data: payload,
                errors: "",
                failed: false
            }
        }
    }
}, initialState)