import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from "react-redux";
import { registerScreens } from './src/navigation/register-screens';

import store from './src/redux/store';

registerScreens(store, Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'login',
    navigatorStyle
  }
})

const navigatorStyle = {
  statusBarColor:'#00164e',
};