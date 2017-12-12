'use strict';
import buildActionName from '../redux/build-action-name';

const reducerName = 'navigation';

export const USER_LOGGED_IN = buildActionName(reducerName, 'USER_LOGGED_IN');

const initialSate = {
    user: {
        firstName: '',
        lastName: ''
    }
};

export default function(state = initialSate, action) {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {
                ...state
            };
        default:
            return state;
    }
}
