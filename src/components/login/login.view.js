import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.onLogin = this.onLogin.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Liberty InTouch</Text>
                <Text style={styles.text}>
                    Sign in using your Liberty{'\n'}UACFID and password.
                </Text>
                <TextInput
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#afafaf"
                    placeholder="UACFID"
                    style={styles.textInput}
                />
                <TextInput
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#afafaf"
                    placeholder="Password"
                    style={styles.textInput}
                />
                <View style={styles.button}>
                    <Button
                        onPress={this.onLogin}
                        title="SIGN IN"
                        accessibilityLabel="Sign In Button"
                    />
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
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f5f5f5'
    },
    text: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 20
    },
    textInput: {
        textAlign: 'center',
        marginHorizontal: 40,
        marginVertical: 5,
        backgroundColor: '#e0e0e0',
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#d0d0d0'
    },
    button: {
        marginHorizontal: 40,
        marginVertical: 5,
        fontSize: 20
    }
});
