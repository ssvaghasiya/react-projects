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
import { useState, useEffect, useContext, createContext, useRef } from "react";
import Toast from 'react-native-simple-toast';
import Swiper from 'react-native-swiper'

const { width } = Dimensions.get('window')

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: 'grey' }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  )
}

const Home1 = ({ route, navigation }) => {

  const theme = "light"
  const [otpInput, setOtpInput] = useState('')

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E5FFDA" }}>

      <StatusBar
        backgroundColor={theme === "light" ? "#E5FFDA" : "#000"}
        barStyle={theme === "light" ? "dark-content" : "light-content"}
      />
      <View
        style={{ flex: 1, backgroundColor: "#E5FFDA" }}
      >
        <View
          style={styles.wrapper}
        >
          <Swiper
            renderPagination={renderPagination}
            loop={false}
          >
            <View
              style={styles.slide}
              title={
                <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
              }
            >
              <Image style={styles.image} source={require('../images/login_bg.jpg')} />
            </View>
            <View
              style={styles.slide}
              title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}
            >
              <Image style={styles.image} source={require('../images/login_bg.jpg')} />
            </View>
            <View
              style={styles.slide}
              title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}
            >
              <Image style={styles.image} source={require('../images/login_bg.jpg')} />
            </View>
            <View
              style={styles.slide}
              title={
                <Text numberOfLines={1}>Learn from Kim K to land that job</Text>
              }
            >
              <Image style={styles.image} source={require('../images/login_bg.jpg')} />
            </View>
          </Swiper>
        </View>


      </View>
    </SafeAreaView >
  );
};

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  header: {
    height: APPBAR_HEIGHT,
    paddingHorizontal: 28,
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapper: {
    height: "50%"
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  image: {
    width,
    flex: 1
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  paginationText: {
    color: 'white',
    fontSize: 20
  }
});

export default Home1;
