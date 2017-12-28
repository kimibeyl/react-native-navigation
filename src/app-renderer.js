import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';

export function renderLoginApp() {
    Navigation.startSingleScreenApp({
        screen: { screen: 'login' }
    });
}

export function renderApp() {
    const tabs = [
        {
            title: 'Clients',
            label: 'Clients',
            screen: 'clients',
            icon: require('./assets/icons/clients.png')
        },
        {
            title: 'In Progress',
            label: 'In Progress',
            screen: 'inProgress',
            icon: require('./assets/icons/in-progress.png')
        },
        {
            title: 'Deferred',
            label: 'Deferred',
            screen: 'deferred',
            icon: require('./assets/icons/deferred.png')
        },
        {
            title: 'Performance',
            label: 'Performance',
            screen: 'performance',
            icon: require('./assets/icons/performance.png')
        }
    ];

    Navigation.startTabBasedApp({
        tabs,
        animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
        // iOS Only
        tabStyle: {
            tabBarButtonColor: '#fff',
            tabBarSelectedButtonColor: '#fff',
            tabBarBackgroundColor: '#00164e',
            tabFontFamily: 'BioRhyme-Bold'
        },
        // Android Only
        appStyle: {
            tabBarButtonColor: '#fff',
            tabBarSelectedButtonColor: '#fff',
            tabBarBackgroundColor: '#00164e',
            tabFontFamily: 'BioRhyme-Bold',

            navBarButtonColor: '#ffffff',
            navBarTextColor: '#ffffff',
            navigationBarColor: '#00164e',
            navBarBackgroundColor: '#00164e'
        }
    });
}
