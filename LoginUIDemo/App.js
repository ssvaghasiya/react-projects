/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import ItemDetail from './screens/ItemDetail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: true }} />
        <Stack.Screen name="ItemDetail" component={ItemDetail} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;