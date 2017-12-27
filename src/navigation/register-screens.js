import { Navigation } from 'react-native-navigation';

import Login from '../screens/login/login.container';
import Clients from '../screens/clients/clients.container';
import Tab1 from '../screens/tabs/tab1';
import Tab2 from '../screens/tabs/tab2';
import Performance from '../screens/performance/performance.container';

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
    Navigation.registerComponent('login', () => Login, store, Provider);
    Navigation.registerComponent('clients', () => Clients, store, Provider);
    Navigation.registerComponent('tab1', () => Tab1, store, Provider);
    Navigation.registerComponent('tab2', () => Tab2, store, Provider);
    Navigation.registerComponent('performance', () => Performance, store, Provider);
}
