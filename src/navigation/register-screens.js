import { Navigation } from 'react-native-navigation';

import Login from '../screens/login/login.container';
import Clients from '../screens/clients/clients.container';
import InProgress from '../screens/in-progress/in-progress.container';
import Deferred from '../screens/deferred/deferred.container';
import Performance from '../screens/performance/performance.container';

export function registerScreens(store, Provider) {
    Navigation.registerComponent('login', () => Login, store, Provider);
    Navigation.registerComponent('clients', () => Clients, store, Provider);
    Navigation.registerComponent('inProgress', () => InProgress, store, Provider);
    Navigation.registerComponent('deferred', () => Deferred, store, Provider);
    Navigation.registerComponent('performance', () => Performance, store, Provider);
}
