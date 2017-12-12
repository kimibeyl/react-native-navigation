import { Navigation } from 'react-native-navigation';
import { Provider } from "react-redux";

import { registerScreens } from './navigation/register-screens';
import store from './redux/store';

registerScreens(store, Provider);

const navigatorStyle = {
    statusBarColor:'#00164e',
};

Navigation.startSingleScreenApp({
  screen: {
    screen: 'login',
    navigatorStyle
  }
});