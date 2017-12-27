import React, { Component } from 'react';

import RefreshScrollContainer from '../../components/refresh-scroll-container/refresh-scroll-container.view.js';

export default class Tab2 extends Component {
    static navigatorStyle = {
        navBarTitleTextCentered: true,
        tabBarHidden: false,
        statusBarColor: '#00164e'
    };
    render() {
        return <RefreshScrollContainer isRefreshing={true} onRefresh={() => {}}>

        </RefreshScrollContainer>;
    }
}
