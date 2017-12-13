'use strict';
import buildActionName from '../../redux/build-action-name';

const reducerName = 'clients';

const SHOW_SEARCHBAR = buildActionName(reducerName, 'SHOW_SEARCHBAR');
const HIDE_SEARCHBAR = buildActionName(reducerName, 'HIDE_SEARCHBAR');

const initialSate = {
    showLoadingScreen: false,
    isShowingSearchBar: false
};

export function toggleSearchBar() {
    return (dispatch, getState) => {
        const { isShowingSearchBar } = getState().clientsReducer;
        if (isShowingSearchBar) {
            return dispatch(hideSearchBarAction());
        }
        return dispatch(showSearchBarAction());
    };
}

export function showSearchBarAction() {
    return {
        type: SHOW_SEARCHBAR
    };
}

export function hideSearchBarAction() {
    return {
        type: HIDE_SEARCHBAR
    };
}

export default (state = initialSate, action) => {
    switch (action.type) {
        case SHOW_SEARCHBAR:
            return { ...state, isShowingSearchBar: true };
        case HIDE_SEARCHBAR:
            return { ...state, isShowingSearchBar: false };
        default:
            return state;
    }
};
