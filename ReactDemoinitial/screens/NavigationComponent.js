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
  Button,
} from 'react-native';
import { useState, useEffect, useContext, createContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppFun2 from './AppFun2';
import AppFun from './AppFun';
import AppFun3 from './AppFun3';
import ListExample from './ListExample';
import SectionListExample from './SectionListExample';
import TouchableExample from './TouchableExample';
import VirtualizedListExample from './VirtualizedListExample';
import GeoLocationExample from './GeoLocationExample';

const Stack = createNativeStackNavigator();

NavigationComponent = (props) => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AppFun" screenOptions={{ headerShown: false }}>

        <Stack.Screen name="AppFun" component={AppFun} initialParams={{ msg: props.msg }} />
        <Stack.Screen name="AppFun2" component={AppFun2} />
        <Stack.Screen name="AppFun3" component={AppFun3} />
        <Stack.Screen name="ListExample" component={ListExample} />
        <Stack.Screen name="SectionListExample" component={SectionListExample} />
        <Stack.Screen name="TouchableExample" component={TouchableExample} />
        <Stack.Screen name="VirtualizedListExample" component={VirtualizedListExample} />
        <Stack.Screen name="GeoLocationExample" component={GeoLocationExample} />
      </Stack.Navigator>
    </NavigationContainer>
  );

};



export default NavigationComponent;
