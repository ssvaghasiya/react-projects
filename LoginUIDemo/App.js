/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
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
import UseMemoDemo from './screens/UseMemoDemo';
import UseCallBackDemo from './screens/UseCallBackDemo';
import Temp from './screens/Temp';
import OpenGallery from './screens/OpenGallery';
import SplashScreen from 'react-native-splash-screen'

const Stack = createNativeStackNavigator();

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  })

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: true }} />
        <Stack.Screen name="ItemDetail" component={ItemDetail} options={{ headerShown: true }} />
        <Stack.Screen name="SectionLists" component={SectionLists} options={{ headerShown: true }} />
        <Stack.Screen name="CustomNavDrawerStack" component={CustomNavDrawerStack} />
        <Stack.Screen name="UseMemoDemo" component={UseMemoDemo} options={{ headerShown: true }} />
        <Stack.Screen name="UseCallBackDemo" component={UseCallBackDemo} options={{ headerShown: true }} />
        <Stack.Screen name="Temp" component={Temp} options={{ headerShown: true }} />
        <Stack.Screen name="OpenGallery" component={OpenGallery} options={{ headerShown: true }} />
      </Stack.Navigator>

    </NavigationContainer>

  );
};

export default App;
