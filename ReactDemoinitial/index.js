/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import AppFun from './screens/AppFun';
import NavigationComponent from './screens/NavigationComponent';
import { name as appName } from './app.json';
import React from 'react';

const RNRedux = () => (
    // <App favcol="yellow" />
    <NavigationComponent msg="Namaste" />
)

AppRegistry.registerComponent(appName, () => RNRedux);
