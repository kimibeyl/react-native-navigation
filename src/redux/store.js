'use strict';

import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducer';

export default createStore(
    reducers,
    {},
    applyMiddleware(ReduxThunk)
);
