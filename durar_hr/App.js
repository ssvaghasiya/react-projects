/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Image,
  Modal,
  Button,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { useState, useEffect, useContext, createContext, useRef } from "react";
import Toast from 'react-native-simple-toast';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Register from './screens/Register';

const Stack = createNativeStackNavigator();

const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
