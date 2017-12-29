import buildActionName from '../../redux/build-action-name';

const reducerName = 'in-progress';

const SET_IS_LOADING = buildActionName(reducerName, 'SET_IS_LOADING');
const SET_SHOW_SEARCH = buildActionName(reducerName, 'SET_SHOW_SEARCH');
const SET_SEARCH_TERM = buildActionName(reducerName, 'SET_SEARCH_TERM');
const LOAD_DATA = buildActionName(reducerName, 'LOAD_DATA');

const initialSate = {
    isLoading: false,
    showSearch: false,
    searchTerm: '',
    data: {}
};

export function toggleShowSearch() {
    return (dispatch, getState) => {
        const showSearch = getState().deferredReducer.showSearch;
        dispatch(setSearchTermAction(''));
        dispatch(setShowSearchAction(!showSearch));
    };
}

export function loadData() {
    return dispatch => {
        dispatch(setIsLoadingAction(true));
        return new Promise((resolve, reject) => {
            // Mock API call
            setTimeout(function() {
                dispatch(loadDataAction({ client: { firstName: 'Peter', lastName: 'Piper' } }));
                dispatch(setIsLoadingAction(false));
                resolve();
            }, 4000);
        });
    };
}

export function setIsLoadingAction(payload) {
    return {
        type: SET_IS_LOADING,
        payload
    };
}

export function setShowSearchAction(payload) {
    return {
        type: SET_SHOW_SEARCH,
        payload
    };
}

export function setSearchTermAction(payload) {
    return {
        type: SET_SEARCH_TERM,
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
        case SET_IS_LOADING:
            return { ...state, isLoading: action.payload };
        case SET_SHOW_SEARCH:
            return { ...state, showSearch: action.payload };
        case SET_SEARCH_TERM:
            return { ...state, searchTerm: action.payload };
        case LOAD_DATA:
            return { ...state, data: action.payload };
        default:
            return state;
    }
};
