import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DeferredView from './deferred.view';
import { toggleShowSearch, loadData, setSearchTermAction } from './deferred.reducer';

function mapStateToProps({ deferredReducer }) {
    return {
        isLoading: deferredReducer.isLoading,
        showSearch: deferredReducer.showSearch,
        searchTerm: deferredReducer.searchTerm,
        data: deferredReducer.data
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            toggleShowSearch,
            loadData,
            setSearchTermAction
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(DeferredView);
