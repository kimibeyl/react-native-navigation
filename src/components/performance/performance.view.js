import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

import LoadingSpinner from '../loading-spinner/loading-spinner.view';

export default class Performance extends Component {
    constructor(props) {
        super(props);

        this.renderHeader = this.renderHeader.bind(this);
        this.renderScreen = this.renderScreen.bind(this);
    }

    static navigatorStyle = {
        navBarTitleTextCentered: true,
        tabBarHidden: false,
        statusBarColor: '#00164e'
    };

    render() {
        return (
            <View>
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
            <View>
                {this.props.isLoading ? (
                    <LoadingSpinner showLoadingSpinner={this.props.isLoading} />
                ) : (
                    <TouchableOpacity
                        onPress={this.props.loadData}
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
    data: PropTypes.object,
    loadData: PropTypes.func,
    setShowSearchBarAction: PropTypes.func
};

const styles = StyleSheet.create({
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
