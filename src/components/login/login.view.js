import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.login = this.login.bind(this);
        this.navigateHome = this.navigateHome.bind(this);
    }

    render() {
        if (this.props.isLoggedIn) {
            return this.navigateHome();
        }
        return (
            <View style={styles.container}>
                <Text style={styles.textHeader}>Liberty InTouch</Text>
                <Text style={styles.textSubHeader}>
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
                <TouchableOpacity
                    onPress={this.login}
                    title="SIGN IN"
                    color="#00164e"
                    accessibilityLabel="Sign In Button"
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>SIGN IN</Text>
                </TouchableOpacity>
                <Spinner visible={this.props.showLoadingScreen} overlayColor="rgba(0,22,78,0.7)" />
            </View>
        );
    }

    login() {
        this.props.signIn().then(this.navigateHome);
    }

    navigateHome() {
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
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    },
    textHeader: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 28,
        fontWeight: 'bold'
    },
    textSubHeader: {
        textAlign: 'center',
        marginVertical: 60,
        fontSize: 22
    },
    textInput: {
        minWidth: 300,
        maxWidth: 400,
        height: 50,
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 5,
        backgroundColor: '#e0e0e0',
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#d0d0d0'
    },
    button: {
        minWidth: 150,
        maxWidth: 250,
        marginVertical: 50,
        height: 50,
        backgroundColor: '#00164e',
        borderRadius: 3,
        borderColor: '#d0d0d0',
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 3,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: '#000'
    },
    buttonText: {
        fontSize: 20,
        color: '#fff'
    }
});
