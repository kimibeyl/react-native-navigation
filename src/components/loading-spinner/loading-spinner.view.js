import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

export default class LoadingSpinner extends Component {
    render() {
        return (
            <ActivityIndicator
                color="#00164e"
                size="large"
                animating={this.props.showLoadingSpinner}
            />
        );
    }
}

LoadingSpinner.propTypes = {
    showLoadingSpinner: PropTypes.bool.isRequired
};
