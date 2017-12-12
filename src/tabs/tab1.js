import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class Tab1 extends Component {
    render() {
        return <View style={styles.background} />;
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'red',
        flex: 1
    }
});
