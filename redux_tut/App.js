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
} from 'react-native';
import User from './components/User';
import HomeContainer from './containers/HomeContainer'
import HeaderContainer from './containers/HeaderContainer'


const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <User data={{ name: "anil", age: '20' }}></User> */}
      <HeaderContainer />
      <HomeContainer />

    </View>
  );
};


export default App;
