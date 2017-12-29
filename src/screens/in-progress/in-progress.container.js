import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import InProgressView from './in-progress.view';
import { toggleShowSearch, loadData, setSearchTermAction } from './in-progress.reducer';

function mapStateToProps({ inProgressReducer }) {
    return {
        isLoading: inProgressReducer.isLoading,
        showSearch: inProgressReducer.showSearch,
        searchTerm: inProgressReducer.searchTerm,
        data: inProgressReducer.data
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

export default connect(mapStateToProps, mapDispatchToProps)(InProgressView);
