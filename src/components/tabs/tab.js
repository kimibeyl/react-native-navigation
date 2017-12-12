import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';

export default class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchbar: false
        };
    }

    static navigatorStyle = {
        navBarHidden: true,
        statusBarColor: '#00164e'
    };

    someMethod(text) {
        console.log(text);
    }

    renderSearchBar() {
        this.state = {
            searchbar: true
        };
    }
    render() {
        return this.state.searchbar ? (
            <SearchBar />
        ) : (
            <Header
                backgroundColor="#00164e"
                innerContainerStyles={{ alignItems: 'center' }}
                centerComponent={{ text: 'Clients', style: { color: '#fff', fontSize: 23 } }}
                rightComponent={{ icon: 'search', color: '#fff', onPress: this.renderSearchBar }}
            />
        );
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'blue',
        flex: 1
    }
});
