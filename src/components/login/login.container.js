'use strict';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { signIn } from './login.reducer';
import LoginView from './login.view';

function mapStateToProps({ loginReducer }) {
    return {
        isLoading: loginReducer.isLoading,
        isLoggedIn: loginReducer.isLoggedIn
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ signIn }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
