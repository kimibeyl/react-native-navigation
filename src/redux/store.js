'use strict';

import { applyMiddleware, createStore, compose } from 'redux';
//import logger from 'redux-logger'
import reducers from './reducer';
import ReduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    reducers,
    {},
    composeEnhancers(applyMiddleware(ReduxThunk /*, logger()*/))
);
