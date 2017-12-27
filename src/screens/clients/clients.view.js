import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';

import RefreshScrollContainer from '../../components/refresh-scroll-container/refresh-scroll-container.view';
import Search from '../../components/search-header/search-header.view';

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
            <RefreshScrollContainer isRefreshing={this.props.isLoading}
                                    onRefresh={this.props.loadData}
            >
                <View>
                    <TouchableOpacity
                        onPress={this.props.loadData}
                        title="Spinner Test"
                        color="#00164e"
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Spinner Test</Text>
                    </TouchableOpacity>
                </View>
            </RefreshScrollContainer>
        );
    }
}

Clients.propTypes = {
    isLoading: PropTypes.bool,
    searchTerm: PropTypes.string,
    data: PropTypes.object,
    loadData: PropTypes.func,
    setSearchTermAction: PropTypes.func
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
