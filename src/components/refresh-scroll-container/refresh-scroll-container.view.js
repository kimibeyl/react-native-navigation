import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, RefreshControl } from 'react-native';

export default class RefreshScrollContainer extends Component {
    render() {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.props.isRefreshing}
                        onRefresh={this.props.onRefresh}
                        colors={['#00164e']}
                    />
                }
            >
                /* TODO: Rendering null hides the spinner as well which should be fixed. */
                {this.props.showContent ? this.props.children : null}
            </ScrollView>
        );
    }
}

RefreshScrollContainer.propTypes = {
    isRefreshing: PropTypes.bool,
    showContent: PropTypes.bool,

    onRefresh: PropTypes.func
};
