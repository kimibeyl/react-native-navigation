import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-native-loading-spinner-overlay';

export default class LoadingScreen extends Component {
    render() {
        return <Spinner visible={this.props.showLoadingScreen} overlayColor="rgba(0,22,78,0.7)" />;
    }
}

LoadingScreen.propTypes = {
    showLoadingScreen: PropTypes.bool.isRequired
};
