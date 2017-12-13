'use strict';
import buildActionName from '../../redux/build-action-name';

const reducerName = 'clients';

const SHOW_SEARCHBAR = buildActionName(reducerName, 'SHOW_SEARCHBAR');
const HIDE_SEARCHBAR = buildActionName(reducerName, 'HIDE_SEARCHBAR');

const initialSate = {
    showSearchBar: false
};

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
            return { ...state, showSearchBar: true };
        case HIDE_SEARCHBAR:
            return { ...state, showSearchBar: false };
        default:
            return state;
    }
};
