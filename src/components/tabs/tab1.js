import React, { Component } from 'react';
import { Header } from 'react-native-elements';

export default class Tab2 extends Component {
    static navigatorStyle = {
        navBarHidden: true,
        tabBarHidden: false,
        statusBarColor: '#00164e'
    };
    render() {
        return <Header
            backgroundColor="#00164e"
            innerContainerStyles={{ alignItems: 'center' }}
            centerComponent={{ text: 'In Progress', style: { color: '#fff', fontSize: 23 } }}
        />;
    }
}
