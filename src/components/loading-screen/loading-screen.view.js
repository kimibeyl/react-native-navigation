import React, { Component } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

export default class LoadingScreen extends Component {
    render() {
        return <Spinner visible={this.props.showLoadingScreen} overlayColor="rgba(0,22,78,0.7)" />;
    }
}
