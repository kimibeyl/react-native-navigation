'use strict';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ClientsView from './clients.view';
import { loadData, setShowSearchBarAction } from './clients.reducer';

function mapStateToProps({ clientsReducer }) {
    return {
        isLoading: clientsReducer.isLoading,
        showSearchBar: clientsReducer.showSearchBar,
        data: clientsReducer.data
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            loadData,
            setShowSearchBarAction
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientsView);
