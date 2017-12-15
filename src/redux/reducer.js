import { combineReducers } from 'redux';

import navigationReducer from '../navigation/navigation.reducer';
import loginReducer from '../components/login/login.reducer';
import clientsReducer from '../components/clients/clients.reducer';
import performanceReducer from '../components/performance/performance.reducer';

export default combineReducers({
    navigationReducer,
    loginReducer,
    clientsReducer,
    performanceReducer
});
