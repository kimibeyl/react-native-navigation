import React, { Component } from 'react';

import LoadingSpinner from '../loading-spinner/loading-spinner.view';

export default class Tab1 extends Component {
    static navigatorStyle = {
        navBarTitleTextCentered: true,
        tabBarHidden: false,
        statusBarColor: '#00164e'
    };
    render() {
        return <LoadingSpinner showLoadingSpinner={true} />;
    }
}
