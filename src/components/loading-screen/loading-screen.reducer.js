'use strict';
import buildActionName from '../../redux/build-action-name';

const reducerName = 'loading-screen';

const SHOW_LOADING_SCREEN = buildActionName(reducerName, 'SHOW_LOADING_SCREEN');
const HIDE_LOADING_SCREEN = buildActionName(reducerName, 'HIDE_LOADING_SCREEN');

const initialSate = {
    showLoadingScreen: false
};

export function showLoadingScreenAction() {
    return {
        type: SHOW_LOADING_SCREEN
    };
}

export function hideLoadingScreenAction() {
    return {
        type: HIDE_LOADING_SCREEN
    };
}

export default (state = initialSate, action) => {
    switch (action.type) {
        case SHOW_LOADING_SCREEN:
            console.log('SHOW SCREEN');
            return { ...state, showLoadingScreen: true };
        case HIDE_LOADING_SCREEN:
            console.log('HIDE SCREEN');
            return { ...state, showLoadingScreen: false };
        default:
            return state;
    }
};
