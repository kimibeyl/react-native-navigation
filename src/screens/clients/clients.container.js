'use strict';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ClientsView from './clients.view';
import { loadData, setSearchTermAction } from './clients.reducer';

function mapStateToProps({ clientsReducer }) {
    return {
        isLoading: clientsReducer.isLoading,
        searchTerm: clientsReducer.searchTerm,
        data: clientsReducer.data
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

export default connect(mapStateToProps, mapDispatchToProps)(ClientsView);
