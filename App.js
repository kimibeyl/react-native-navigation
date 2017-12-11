import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from "react-redux";
import { registerScreens } from './src/navigation/register-screens';

import store from './src/redux/store';

registerScreens(store, Provider);

const tabs = [{
  label: 'Navigation',
  screen: 'tab',
  icon: require('./src/img/list.png'),  
  title: 'Tab',
}, {
  label: 'Actions',
  screen: 'tab1',
  icon: require('./src/img/list.png'),  
  title: 'Tab 1',
},
{
  label: 'Actions',
  screen: 'tab2',
  icon: require('./src/img/list.png'),  
  title: 'Tab 2',
},
{
  label: 'Actions',
  screen: 'tab3',
  icon: require('./src/img/list.png'),  
  title: 'Tab 3',
},
{
  label: 'Actions',
  screen: 'tab4',
  icon: require('./src/img/list.png'),  
  title: 'Tab 4',
}
];

Navigation.startTabBasedApp({
  tabs,
  animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
  tabsStyle: {
    tabBarBackgroundColor: '#003a66',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#ff505c',
    tabFontFamily: 'BioRhyme-Bold',
  },
  appStyle: {
    tabBarBackgroundColor: '#003a66',
    navBarButtonColor: '#ffffff',
    tabBarButtonColor: '#ffffff',
    navBarTextColor: '#ffffff',
    tabBarSelectedButtonColor: '#ff505c',
    navigationBarColor: '#003a66',
    navBarBackgroundColor: '#003a66',
    statusBarColor: '#002b4c',
    tabFontFamily: 'BioRhyme-Bold',
  }
});    