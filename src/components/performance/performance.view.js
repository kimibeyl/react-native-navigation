import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

import LoadingSpinner from '../loading-spinner/loading-spinner.view';

export default class Performance extends Component {
    constructor(props) {
        super(props);

        this.someMethod = this.someMethod.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
        this.renderScreen = this.renderScreen.bind(this);
    }

    static navigatorStyle = {
        navBarHidden: true,
        tabBarHidden: false,
        statusBarColor: '#00164e'
    };

    someMethod() {
        this.props.loadData();
    }

    render() {
        return (
            <View>
                {this.renderHeader()}
                {this.renderScreen()}
            </View>
        );
    }

    renderHeader() {
        return (
            <Header
                backgroundColor="#00164e"
                innerContainerStyles={{ alignItems: 'center' }}
                centerComponent={{ text: 'Performance', style: { color: '#fff', fontSize: 23 } }}
            />
        );
    }

    renderScreen() {
        return (
            <View style={styles.screenContainer}>
                {this.props.isLoading ? (
                    <LoadingSpinner showLoadingSpinner={this.props.isLoading} />
                ) : (
                    <TouchableOpacity
                        onPress={this.someMethod}
                        title="Spinner Test"
                        color="#00164e"
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Spinner Test</Text>
                    </TouchableOpacity>
                )}
            </View>
        );
    }
}

Performance.propTypes = {
    isLoading: PropTypes.bool,
    loadData: PropTypes.func,
    data: PropTypes.object,
    setShowSearchBarAction: PropTypes.func
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'blue',
        flex: 1
    },
    button: {
        minWidth: 200,
        maxWidth: 250,
        marginVertical: 200,
        height: 50,
        backgroundColor: '#00164e',
        borderRadius: 3,
        borderColor: '#d0d0d0',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        shadowRadius: 3,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: '#000'
    },
    buttonText: {
        fontSize: 20,
        color: '#fff'
    }
});
