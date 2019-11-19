import {
    applyMiddleware,
    createStore
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from './reducer';

const getMiddlewares = () => {
    if (process.env.NODE_ENV !== 'production') return [thunk, logger]
    else return [thunk]
}

const store = createStore(
    reducer,
    applyMiddleware(...getMiddlewares())
);

export default store;