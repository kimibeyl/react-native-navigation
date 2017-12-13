import { combineReducers } from 'redux';

import navigationReducer from '../navigation/navigation.reducer';
import loadingScreenReducer from '../components/loading-screen/loading-screen.reducer';
import loginReducer from '../components/login/login.reducer';
import clientsReducer from '../components/clients/clients.reducer';

export default combineReducers({
    navigationReducer,
    loadingScreenReducer,
    loginReducer,
    clientsReducer
});
