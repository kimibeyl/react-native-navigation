import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class Tab2 extends Component {
    render() {
        return (
            <View style={styles.background}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'green',
        flex: 1        
    }
});