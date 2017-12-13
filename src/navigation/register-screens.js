import { Navigation } from 'react-native-navigation';

import Login from '../components/login/login.container';
import Home from '../components/home/home.view';
import Tab from '../components/clients/clients.view';
import Tab1 from '../components/tabs/tab1';
import Tab2 from '../components/tabs/tab2';
import Tab3 from '../components/tabs/tab3';
import Tab4 from '../components/tabs/tab4';

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
    Navigation.registerComponent('login', () => Login, store, Provider);
    Navigation.registerComponent('home', () => Home, store, Provider);
    Navigation.registerComponent('tab', () => Tab, store, Provider);
    Navigation.registerComponent('tab1', () => Tab1, store, Provider);
    Navigation.registerComponent('tab2', () => Tab2, store, Provider);
    Navigation.registerComponent('tab3', () => Tab3, store, Provider);
    Navigation.registerComponent('tab4', () => Tab4, store, Provider);
}
