import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.onLogin = this.onLogin.bind(this);
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
                    <TouchableOpacity onPress={this.onLogin} accessibilityLabel="Sign In Button">
                        <Text>SIGN IN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    onLogin() {
        this.props.navigator.push({
            screen: 'home',
            title: 'Home'
        });
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c1c1c1',
        justifyContent: 'center',
        flex: 1
    }
});
