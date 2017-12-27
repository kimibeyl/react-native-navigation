import { combineReducers } from 'redux';

import loginReducer from '../screens/login/login.reducer';
import clientsReducer from '../screens/clients/clients.reducer';
import performanceReducer from '../screens/performance/performance.reducer';

export default combineReducers({
    loginReducer,
    clientsReducer,
    performanceReducer
});
