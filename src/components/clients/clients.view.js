import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';

import LoadingSpinner from '../loading-spinner/loading-spinner.view';

export default class Clients extends Component {
    constructor(props) {
        super(props);

        this.someMethod = this.someMethod.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
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
                <TouchableOpacity
                    onPress={this.someMethod}
                    title="Loading Screen Test"
                    color="#00164e"
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Loading Screen Test</Text>
                </TouchableOpacity>
                <LoadingSpinner showLoadingSpinner={this.props.isLoading} />
            </View>
        );
    }

    renderHeader() {
        return this.props.showSearchBar ? (
            <SearchBar />
        ) : (
            <Header
                backgroundColor="#00164e"
                innerContainerStyles={{ alignItems: 'center' }}
                centerComponent={{ text: 'Clients', style: { color: '#fff', fontSize: 23 } }}
                rightComponent={{
                    icon: 'search',
                    color: '#fff',
                    onPress: () => this.props.setShowSearchBarAction(true)
                }}
            />
        );
    }
}

Clients.propTypes = {
    isLoading: PropTypes.bool,
    showSearchBar: PropTypes.bool,
    data: PropTypes.object,
    loadData: PropTypes.func,
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
