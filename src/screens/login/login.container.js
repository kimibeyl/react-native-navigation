import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LoginView from './login.view';
import { signIn } from './login.reducer';

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
