import { combineReducers } from 'redux';

import navigationReducer from '../navigation/navigation.reducer';
import loginReducer from '../components/login/login.reducer';

export default combineReducers({
    navigationReducer,
    loginReducer
});
