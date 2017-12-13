'use strict';
import buildActionName from '../../redux/build-action-name';
import { showLoadingScreenAction, hideLoadingScreenAction } from '../loading-screen/loading-screen.reducer';

const reducerName = 'login';

const SUBMITTING_CREDENTIALS = buildActionName(reducerName, 'SUBMITTING_CREDENTIALS');
const USER_AUTHENTICATED = buildActionName(reducerName, 'USER_AUTHENTICATED');

const initialSate = {
    isLoggedIn: false
};

export function signIn() {
    return dispatch => {
        dispatch(showLoadingScreenAction());
        return new Promise((resolve, reject) => {
            // Mock API call
            setTimeout(function() {
                dispatch(userAuthenticatedAction());
                dispatch(hideLoadingScreenAction());
                resolve();
            }, 2000);
        });
    };
}

function userAuthenticatedAction() {
    return {
        type: USER_AUTHENTICATED
    };
}

export default (state = initialSate, action) => {
    switch (action.type) {
        case USER_AUTHENTICATED:
            return { ...state, isLoggedIn: true };
        default:
            return state;
    }
};
