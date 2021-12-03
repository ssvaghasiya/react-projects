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
import SectionLists from './screens/SectionList';
import CustomNavDrawerStack from './screens/CustomNavDrawerStack';
import 'react-native-gesture-handler';
import FirstPage from './screens/FirstPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: true }} />
        <Stack.Screen name="ItemDetail" component={ItemDetail} options={{ headerShown: true }} />
        <Stack.Screen name="SectionLists" component={SectionLists} options={{ headerShown: true }} />
        <Stack.Screen name="CustomNavDrawerStack" component={CustomNavDrawerStack} />
        <Stack.Screen name="FirstPage" component={FirstPage} />
      </Stack.Navigator>

    </NavigationContainer>

  );
};

export default App;
