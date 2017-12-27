import buildActionName from '../../redux/build-action-name';

const reducerName = 'performance';

const SET_IS_LOADING = buildActionName(reducerName, 'SET_IS_LOADING');
const LOAD_DATA = buildActionName(reducerName, 'LOAD_DATA');

const initialSate = {
    isLoading: false,
    data: {}
};

export function loadData() {
    return dispatch => {
        dispatch(setIsLoadingAction(true));
        return new Promise((resolve, reject) => {
            // Mock API call
            setTimeout(function() {
                dispatch(loadDataAction({ conversionRate: 54 }));
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
        case LOAD_DATA:
            return { ...state, data: action.payload };
        default:
            return state;
    }
};
