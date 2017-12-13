'use strict';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ClientsView from './clients.view';
import { toggleSearchBar, showSearchBarAction, hideSearchBarAction } from './clients.reducer';

function mapStateToProps({ clientsReducer }) {
    return {
        isShowingSearchBar: clientsReducer.isShowingSearchBar
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ toggleSearchBar, showSearchBarAction, hideSearchBarAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientsView);
