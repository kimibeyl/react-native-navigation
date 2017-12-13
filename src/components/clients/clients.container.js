'use strict';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ClientsView from './clients.view';
import { showSearchBarAction, hideSearchBarAction } from './clients.reducer';
import { hideLoadingScreenAction, showLoadingScreenAction } from '../loading-screen/loading-screen.reducer';

function mapStateToProps({ clientsReducer }) {
    return {
        showSearchBar: clientsReducer.showSearchBar
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            showSearchBarAction,
            hideSearchBarAction,
            hideLoadingScreenAction,
            showLoadingScreenAction
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientsView);
