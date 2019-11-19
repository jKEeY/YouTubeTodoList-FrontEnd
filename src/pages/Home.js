import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import actions from '../store/actions'

const Home = ({ todos, dispatch }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!todos.length && !loaded) {
            (async () => {
                await dispatch(actions.loadTodos());
                setLoaded(true);
            })()
        }
    }, [todos])

    return (
        <>
            {todos.map(todo => {
                return (<div>
            {todo.title}</div>)
            })}
        </>
    )
}

export default connect((state) => {
    return {
        todos: state.todos.data
    }
})(Home);