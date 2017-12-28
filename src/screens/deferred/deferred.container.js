import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DeferredView from './deferred.view';
import { loadData } from './deferred.reducer';
import { setSearchTermAction } from "../deferred/deferred.reducer";

function mapStateToProps({ deferredReducer }) {
    return {
        isLoading: deferredReducer.isLoading,
        searchTerm: deferredReducer.searchTerm,
        data: deferredReducer.data
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            loadData,
            setSearchTermAction
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(DeferredView);
