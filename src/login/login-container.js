'use strict';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from './login-view';

function mapStateToProps({ loginReducer }) {
    return {
        errorMessage: loginReducer.errorMessage,
        showSpinner: loginReducer.showSpinner
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        dispatch
    );
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);