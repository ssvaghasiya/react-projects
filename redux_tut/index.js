/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
//
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './services/reducers/index'

const store = createStore(rootReducer)
console.warn("store data", store)
//

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
