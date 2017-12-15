import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';

import LoadingSpinner from '../loading-spinner/loading-spinner.view';

export default class Performance extends Component {
    constructor(props) {
        super(props);

        this.someMethod = this.someMethod.bind(this);
    }

    static navigatorStyle = {
        navBarHidden: true,
        tabBarHidden: false,
        statusBarColor: '#00164e'
    };

    someMethod() {
        /*this.props.showLoadingScreenAction();
        setTimeout(() => this.props.hideLoadingScreenAction(), 2000);*/
    }

    render() {
        return (
            <View>
                <Header
                    backgroundColor="#00164e"
                    innerContainerStyles={{ alignItems: 'center' }}
                    centerComponent={{
                        text: 'Performance',
                        style: { color: '#fff', fontSize: 23 }
                    }}
                    rightComponent={{
                        icon: 'search',
                        color: '#fff',
                        onPress: () => this.props.setShowSearchBarAction
                    }}
                />
                <TouchableOpacity
                    onPress={this.someMethod}
                    title="Loading Spinner Test"
                    color="#00164e"
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Loading Spinner Test</Text>
                </TouchableOpacity>
                <LoadingSpinner showLoadingSpinner={this.props.isLoading} />
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
