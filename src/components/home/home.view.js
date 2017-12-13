import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class Home extends Component {
    render() {
        const tabs = [
            {
                label: 'Clients',
                screen: 'tab',
                icon: require('../../assets/icons/list.png'),
                title: 'Client'
            },
            {
                label: 'Actions',
                screen: 'tab1',
                icon: require('../../assets/icons/list.png'),
                title: 'Tab 1'
            },
            {
                label: 'Actions',
                screen: 'tab2',
                icon: require('../../assets/icons/list.png'),
                title: 'Tab 2'
            },
            {
                label: 'Actions',
                screen: 'tab3',
                icon: require('../../assets/icons/list.png'),
                title: 'Tab 3'
            },
            {
                label: 'Actions',
                screen: 'tab4',
                icon: require('../../assets/icons/list.png'),
                title: 'Tab 4'
            }
        ];

        Navigation.startTabBasedApp({
            tabs,
            animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
            tabsStyle: {
                tabBarButtonColor: '#fff',
                tabBarSelectedButtonColor: '#fff',
                tabBarBackgroundColor: '#00164e',
                tabFontFamily: 'BioRhyme-Bold'
            },
            appStyle: {
                tabBarBackgroundColor: '#00164e',
                navBarButtonColor: '#ffffff',
                tabBarButtonColor: '#ffffff',
                navBarTextColor: '#ffffff',
                tabBarSelectedButtonColor: '#fff',
                navigationBarColor: '#00164e',
                navBarBackgroundColor: '#00164e',
                tabFontFamily: 'BioRhyme-Bold',
                statusBarColor: '#00164e'
            }
        });

        return null;
    }
}
