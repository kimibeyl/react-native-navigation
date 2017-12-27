import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, RefreshControl } from 'react-native';

export default class RefreshScrollContainer extends Component {
    render() {
        return (
            <ScrollView refreshControl={
                <RefreshControl
                    refreshing={this.props.isRefreshing}
                    onRefresh={this.props.onRefresh}
                    colors={["#00164e"]}
                />}
            >
                {this.props.children}
            </ScrollView>
        );
    }
}

RefreshScrollContainer.propTypes = {
    isRefreshing: PropTypes.bool,
    onRefresh: PropTypes.func
};
