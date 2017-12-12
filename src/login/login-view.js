import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class Login extends Component {
    static navigatorStyle = {
        navBarHidden: true,
        statusBarColor: '#00164e'
    };

    navigation() {
        const tabs = [
            {
                label: 'Clients',
                screen: 'tab',
                icon: require('../img/list.png'),
                title: 'Client'
            },
            {
                label: 'Actions',
                screen: 'tab1',
                icon: require('../img/list.png'),
                title: 'Tab 1'
            },
            {
                label: 'Actions',
                screen: 'tab2',
                icon: require('../img/list.png'),
                title: 'Tab 2'
            },
            {
                label: 'Actions',
                screen: 'tab3',
                icon: require('../img/list.png'),
                title: 'Tab 3'
            },
            {
                label: 'Actions',
                screen: 'tab4',
                icon: require('../img/list.png'),
                title: 'Tab 4'
            }
        ];

        Navigation.startTabBasedApp({
            tabs,
            animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
            tabsStyle: {
                tabBarBackgroundColor: '#00164e',
                tabBarButtonColor: '#ffffff',
                tabBarSelectedButtonColor: '#fff',
                tabFontFamily: 'BioRhyme-Bold',
                statusBarColor: '#00164e'
            },
            appStyle: {
                tabBarBackgroundColor: '#00164e',
                navBarButtonColor: '#ffffff',
                tabBarButtonColor: '#ffffff',
                navBarTextColor: '#ffffff',
                tabBarSelectedButtonColor: '#fff',
                navigationBarColor: '#00164e',
                navBarBackgroundColor: '#00164e',
                tabFontFamily: 'BioRhyme-Bold'
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Liberty InTouch</Text>
                <Text>Sign in using your Liberty{'\n'}UACFID and password.</Text>
                <TextInput
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#c1c1c1"
                    placeholder="UACFID"
                />
                <TextInput
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#c1c1c1"
                    placeholder="Password"
                />
                <View>
                    <TouchableOpacity onPress={this.navigation} accessibilityLabel="Sign In Button">
                        <Text>SIGN IN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c1c1c1',
        flex: 1
    }
});
