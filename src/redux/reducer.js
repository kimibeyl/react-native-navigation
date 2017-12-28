import { combineReducers } from 'redux';

import loginReducer from '../screens/login/login.reducer';
import clientsReducer from '../screens/clients/clients.reducer';
import inProgressReducer from '../screens/in-progress/in-progress.reducer';
import deferredReducer from '../screens/deferred/deferred.reducer';
import performanceReducer from '../screens/performance/performance.reducer';

export default combineReducers({
    loginReducer,
    clientsReducer,
    inProgressReducer,
    deferredReducer,
    performanceReducer
});
