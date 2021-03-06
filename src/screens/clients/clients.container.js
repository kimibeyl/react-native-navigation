import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ClientsView from './clients.view';
import { toggleShowSearch, loadData, setSearchTermAction } from './clients.reducer';

function mapStateToProps({ clientsReducer }) {
    return {
        isLoading: clientsReducer.isLoading,
        showSearch: clientsReducer.showSearch,
        searchTerm: clientsReducer.searchTerm,
        data: clientsReducer.data
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

export default connect(mapStateToProps, mapDispatchToProps)(ClientsView);
