import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';

export default class Clients extends Component {
    static navigatorStyle = {
        navBarHidden: true,
        statusBarColor: '#00164e'
    };

    someMethod(text) {
        console.log(text);
    }

    render() {
        return this.props.isShowingSearchBar ? (
            <SearchBar />
        ) : (
            <Header
                backgroundColor="#00164e"
                innerContainerStyles={{ alignItems: 'center' }}
                centerComponent={{ text: 'Clients', style: { color: '#fff', fontSize: 23 } }}
                rightComponent={{
                    icon: 'search',
                    color: '#fff',
                    onPress: this.props.showSearchBarAction
                }}
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
