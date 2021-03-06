import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import RefreshScrollContainer from '../../components/refresh-scroll-container/refresh-scroll-container.view';

export default class Performance extends Component {
    static navigatorStyle = {
        navBarTitleTextCentered: true,
        tabBarHidden: false,
        statusBarColor: '#00164e'
    };

    constructor(props) {
        super(props);

        this.props.loadData();
    }

    render() {
        return (
            <RefreshScrollContainer
                isRefreshing={this.props.isLoading}
                onRefresh={this.props.loadData}
                showContent={!_.isEmpty(this.props.data)}
            >
                <View>
                    <TouchableOpacity
                        onPress={this.props.loadData}
                        title="Spinner Test"
                        color="#00164e"
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Spinner Test</Text>
                    </TouchableOpacity>
                </View>
            </RefreshScrollContainer>
        );
    }
}

Performance.propTypes = {
    isLoading: PropTypes.bool,
    data: PropTypes.object,

    loadData: PropTypes.func
};

const styles = StyleSheet.create({
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
