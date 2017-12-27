import buildActionName from '../../redux/build-action-name';

const reducerName = 'login';

const SET_IS_LOADING = buildActionName(reducerName, 'SET_IS_LOADING');
const USER_AUTHENTICATED = buildActionName(reducerName, 'USER_AUTHENTICATED');

const initialSate = {
    isLoading: false,
    isLoggedIn: false
};

export function signIn() {
    return dispatch => {
        dispatch(setIsLoadingAction(true));
        return new Promise((resolve, reject) => {
            // Mock API call
            setTimeout(function() {
                dispatch(userAuthenticatedAction());
                dispatch(setIsLoadingAction(false));
                resolve();
            }, 2000);
        });
    };
}

export function setIsLoadingAction(payload) {
    return {
        type: SET_IS_LOADING,
        payload
    };
}

export function userAuthenticatedAction() {
    return {
        type: USER_AUTHENTICATED
    };
}

export default (state = initialSate, action) => {
    switch (action.type) {
        case SET_IS_LOADING:
            return { ...state, isLoading: action.payload };
        case USER_AUTHENTICATED:
            return { ...state, isLoggedIn: true };
        default:
            return state;
    }
};
