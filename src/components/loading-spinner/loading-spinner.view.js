import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, StyleSheet } from 'react-native';

export default class LoadingSpinner extends Component {
    render() {
        return (
            <ActivityIndicator
                color="#00164e"
                size="large"
                animating={this.props.showLoadingSpinner}
                style={styles.spinnerPadding}
            />
        );
    }
}

LoadingSpinner.propTypes = {
    showLoadingSpinner: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
    spinnerPadding: {
        padding: 30
    }
});
