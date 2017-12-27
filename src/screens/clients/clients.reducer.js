import buildActionName from '../../redux/build-action-name';

const reducerName = 'clients';

const SET_IS_LOADING = buildActionName(reducerName, 'SET_IS_LOADING');
const SET_SEARCH_TERM = buildActionName(reducerName, 'SET_SEARCH_TERM');
const LOAD_DATA = buildActionName(reducerName, 'LOAD_DATA');

const initialSate = {
    isLoading: false,
    searchTerm: '',
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

export function setSearchTermAction(payload) {
    return {
        type: SET_SEARCH_TERM,
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
        case SET_IS_LOADING:
            return { ...state, isLoading: action.payload };
        case SET_SEARCH_TERM:
            return { ...state, searchTerm: action.payload };
        case LOAD_DATA:
            return { ...state, data: action.payload };
        default:
            return state;
    }
};
