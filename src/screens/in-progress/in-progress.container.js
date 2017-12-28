import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import InProgressView from './in-progress.view';
import { loadData } from './in-progress.reducer';
import { setSearchTermAction } from "../clients/clients.reducer";

function mapStateToProps({ inProgressReducer }) {
    return {
        isLoading: inProgressReducer.isLoading,
        searchTerm: inProgressReducer.searchTerm,
        data: inProgressReducer.data
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

export default connect(mapStateToProps, mapDispatchToProps)(InProgressView);
