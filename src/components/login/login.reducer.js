'use strict';
import buildActionName from '../../redux/build-action-name';

const reducerName = 'login';

const SUBMITTING_CREDENTIALS = buildActionName(reducerName, 'SUBMITTING_CREDENTIALS');
const USER_AUTHENTICATED = buildActionName(reducerName, 'USER_AUTHENTICATED');

const initialSate = {
    isLoggedIn: false,
    showLoadingScreen: false
};

export function signIn() {
    console.log('MEMES');
    return dispatch => {
        dispatch(submittingCredentialsAction());
        return new Promise((resolve, reject) => {
            // Mock API call
            setTimeout(function() {
                dispatch(userAuthenticatedAction());
                resolve();
            }, 2000);
        });
    };
}

function submittingCredentialsAction() {
    return {
        type: SUBMITTING_CREDENTIALS
    };
}

function userAuthenticatedAction() {
    return {
        type: USER_AUTHENTICATED
    };
}

export default (state = initialSate, action) => {
    switch (action.type) {
        case SUBMITTING_CREDENTIALS:
            return { ...state, showLoadingScreen: true };
        case USER_AUTHENTICATED:
            return { ...state, showLoadingScreen: false, isLoggedIn: true };
        default:
            return state;
    }
};
