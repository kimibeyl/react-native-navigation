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
            label: 'Clients',
            screen: 'clients',
            icon: require('./assets/icons/list.png'),
            title: 'Clients'
        },
        {
            label: 'In Progress',
            screen: 'tab1',
            icon: require('./assets/icons/list.png'),
            title: 'In Progress'
        },
        {
            label: 'Deferred',
            screen: 'tab2',
            icon: require('./assets/icons/list.png'),
            title: 'Deferred'
        },
        {
            label: 'Performance',
            screen: 'performance',
            icon: require('./assets/icons/list.png'),
            title: 'Performance'
        }
    ];

    Navigation.startTabBasedApp({
        tabs,
        animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
        // iOS
        tabStyle: {
            tabBarButtonColor: '#fff',
            tabBarSelectedButtonColor: '#fff',
            tabBarBackgroundColor: '#00164e',
            tabFontFamily: 'BioRhyme-Bold'
        },
        // Android
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
