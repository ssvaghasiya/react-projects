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
import AppFun2 from './AppFun2';

export const GlobalInfo = createContext();

AppFun = ({ route, navigation }) => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  const [color, setColor] = useState('red');

  useEffect(() => {
    // let timer = setTimeout(() => {
    //   setCount((count) => count + 1);
    // }, 1000);

    setCalculation(() => count * 2);

    // return () => clearTimeout(timer)

  }, [count]);

  return (
    <GlobalInfo.Provider value={{ appColor: color }}>
      <ScrollView >
        <Text style={{ fontSize: 30 }}>Welcome {calculation}</Text>
        <Text style={{ fontSize: 20 }}>Hello {route.params.msg}</Text>
        <Button title="submit" onPress={() => setCount((c) => c + 1)}></Button>
        <Button title="AppFun3" onPress={() => navigation.navigate('AppFun3')}></Button>
        <Button title="List Example" onPress={() => navigation.navigate('ListExample')}></Button>
        <Button title="Section List Example" onPress={() => navigation.navigate('SectionListExample')}></Button>
        <Button title="Touchable Example" onPress={() => navigation.navigate('TouchableExample')}></Button>
        <Button title="Virtualized List Example" onPress={() => navigation.navigate('VirtualizedListExample')}></Button>
        <Button title="GeoLocationExample" onPress={() => navigation.navigate('GeoLocationExample')}></Button>
        <AppFun2></AppFun2>
      </ScrollView>
    </GlobalInfo.Provider>
  );

};



export default AppFun;
