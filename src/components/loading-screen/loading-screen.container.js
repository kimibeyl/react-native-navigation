'use strict';
import { connect } from 'react-redux';

import LoadingScreenView from './loading-screen.view';

function mapStateToProps({ loadingScreenReducer }) {
    return {
        showLoadingScreen: loadingScreenReducer.showLoadingScreen
    };
}

export default connect(mapStateToProps)(LoadingScreenView);
