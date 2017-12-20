import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Header, SearchBar} from 'react-native-elements';

import LoadingSpinner from '../loading-spinner/loading-spinner.view';
import Search from '../search-header/search-header.view';

export default class Clients extends Component {
    constructor(props) {
        super(props);

        this.renderHeader = this.renderHeader.bind(this);
        this.renderScreen = this.renderScreen.bind(this);
    }

    static navigatorStyle = {
        navBarHidden: true,
        tabBarHidden: false,
        statusBarColor: '#00164e'
    };

    // Important: You must return a Promise
    beforeFocus = () => {
        return new Promise((resolve, reject) => {
            console.log('beforeFocus');
            resolve();
        });
    }

    // Important: You must return a Promise
    onFocus = (text) => {
        return new Promise((resolve, reject) => {
            console.log('onFocus', text);
            resolve();
        });
    }

    // Important: You must return a Promise
    afterFocus = () => {
        return new Promise((resolve, reject) => {
            console.log('afterFocus');
            resolve();
        });
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
        // inside your render function
        return (
                <Search
                    ref="search_box"
                    /**
                    * There many props that can customizable
                    * Please scroll down to Props section
                    */
                />
        );
    }

    renderScreen() {
        return (
            <View>
                {this.props.isLoading ? (
                    <LoadingSpinner showLoadingSpinner={this.props.isLoading}/>
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

Clients.propTypes = {
    isLoading: PropTypes.bool,
    showSearchBar: PropTypes.bool,
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
