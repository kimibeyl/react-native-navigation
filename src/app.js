import { Provider } from 'react-redux';

import { registerScreens } from './navigation/register-screens';
import { renderLoginApp } from './app-renderer';
import store from './redux/store';

registerScreens(store, Provider);

renderLoginApp();
