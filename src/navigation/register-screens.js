import { Navigation } from 'react-native-navigation';

import Tab from '../tabs/tab';
import Tab1 from '../tabs/tab1';
import Tab2 from '../tabs/tab2';
import Tab3 from '../tabs/tab3';
import Tab4 from '../tabs/tab4';
import Login from '../login/login-view';

//import BottomTabsSideMenu from './BottomTabsSideMenu';

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
    Navigation.registerComponent('login', () => Login, store, Provider);
    Navigation.registerComponent('tab', () => Tab, store, Provider);
    Navigation.registerComponent('tab1', () => Tab1, store, Provider);
    Navigation.registerComponent('tab2', () => Tab2, store, Provider);
    Navigation.registerComponent('tab3', () => Tab3, store, Provider);
    Navigation.registerComponent('tab4', () => Tab4, store, Provider);
    //Navigation.registerComponent('BottomTabsSideMenu', () => BottomTabsSideMenu, store, Provider);
}
