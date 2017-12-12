'use strict';
import buildActionName from '../redux/build-action-name';

const reducerName = 'login';

const SUBMITTING_CREDENTIALS = buildActionName(reducerName, 'SUBMITTING_CREDENTIALS');

const initialSate = {
    user: {
        firstName: '',
        lastName: ''
    },
    showSpinner: false,
    errorMessage: ''
};

export default function(state = initialSate, action) {
    switch (action.type) {
        case SUBMITTING_CREDENTIALS:
            return { ...state, showSpinner: true, errorMessage: '' };
        default:
            return state;
    }
}

export function signIn(values, dispatch) {
    let { uacfId } = values;
    const { password } = values;
    uacfId = uacfId ? uacfId.trim() : '';
    dispatch(userLoggedIn(values));
}

export function userLoggedIn(user) {
    return {
        type: SUBMITTING_CREDENTIALS,
        user
    };
}
