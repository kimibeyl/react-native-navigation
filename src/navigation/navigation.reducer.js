'use strict';

import buildActionName from '../redux/build-action-name';

const reducerName = 'navigation';

export const SET_BACKGROUND_COLOR = buildActionName(reducerName, 'SET_BACKGROUND_COLOR');

// TODO: Add fleshed out navigation reducer here
const initialSate = {
    backgroundColor: '#f0f'
};

export default function(state = initialSate, action) {
    switch (action.type) {
        case SET_BACKGROUND_COLOR:
            return {
                ...state
            };
        default:
            return state;
    }
}
