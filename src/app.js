import { Provider } from 'react-redux';

import store from './redux/store';
import { registerScreens } from './navigation/register-screens';
import { renderLoginApp } from './app-renderer';

registerScreens(store, Provider);

renderLoginApp();
