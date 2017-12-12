import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class Tab3 extends Component {
    render() {
        return <View style={styles.background} />;
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'purple',
        flex: 1
    }
});
