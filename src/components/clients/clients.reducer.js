'use strict';
import buildActionName from '../../redux/build-action-name';

const reducerName = 'clients';

const SET_IS_LOADING = buildActionName(reducerName, 'SET_IS_LOADING');
const SET_SHOW_SEARCHBAR = buildActionName(reducerName, 'SET_SHOW_SEARCHBAR');
const LOAD_DATA = buildActionName(reducerName, 'LOAD_DATA');

const initialSate = {
    isLoading: false,
    showSearchBar: false,
    data: {}
};

export function loadData() {
    return dispatch => {
        dispatch(setIsLoadingAction(true));
        return new Promise((resolve, reject) => {
            // Mock API call
            setTimeout(function() {
                dispatch(loadDataAction({ client: { firstName: 'Casper', lastName: 'Ghost' } }));
                dispatch(setIsLoadingAction(false));
                resolve();
            }, 2000);
        });
    };
}

export function setShowSearchBarAction(payload) {
    return {
        type: SET_SHOW_SEARCHBAR,
        payload
    };
}

export function setIsLoadingAction(payload) {
    return {
        type: SET_IS_LOADING,
        payload
    };
}

export function loadDataAction(payload) {
    return {
        type: LOAD_DATA,
        payload
    };
}

export default (state = initialSate, action) => {
    switch (action.type) {
        case SET_SHOW_SEARCHBAR:
            return { ...state, showSearchBar: action.payload };
        case SET_IS_LOADING:
            return { ...state, isLoading: action.payload };
        case LOAD_DATA:
            return { ...state, data: action.payload };
        default:
            return state;
    }
};
