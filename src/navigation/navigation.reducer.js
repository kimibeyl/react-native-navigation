'use strict';
import buildActionName from '../redux/build-action-name';

const reducerName = 'navigation';

const SOME_ACTION = buildActionName(reducerName, 'SOME_ACTION');

const initialSate = {};

function someAction() {
    return {
        type: SOME_ACTION
    };
}

export default (state = initialSate, action) => {
    switch (action.type) {
        case SOME_ACTION:
            return { ...state };
        default:
            return state;
    }
};
