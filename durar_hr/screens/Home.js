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

const Home = ({ route, navigation }) => {

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
            showsButtons={false}
            horizontal={true}
            loop={false}
            showsPagination={true}
            dot={<View style={{ backgroundColor: 'red', width: 8, height: 8, borderRadius: 0, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />}
            activeDot={<View style={{ backgroundColor: 'blue', width: 8, height: 8, borderRadius: 0, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />}
          >
            <View style={styles.slide1}>
              <Text style={styles.text}>Hello Swiper</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>And simple</Text>
            </View>
          </Swiper>
        </View>

        <View
          style={styles.wrapper}
        >
          <Swiper
            onMomentumScrollEnd={(e, state, context) =>
              console.log('index:', state.index)
            }
            dot={
              <View
                style={{
                  backgroundColor: 'red',
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3
                }}
              />
            }
            activeDot={
              <View
                style={{
                  backgroundColor: 'yellow',
                  width: 14,
                  height: 14,
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3
                }}
              />
            }
            paginationStyle={{
              bottom: 10,
              left: null,
              right: 10
            }}
            loop={false}
          >
            <View
              style={styles.slide}
              title={
                <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
              }
            >
              <Image
                resizeMode="stretch"
                style={styles.image}
                source={require('../images/login_bg.jpg')}
              />
            </View>
            <View
              style={styles.slide}
              title={
                <Text numberOfLines={1}>Big lie behind Nine’s new show</Text>
              }
            >
              <Image
                resizeMode="stretch"
                style={styles.image}
                source={require('../images/login_bg.jpg')}
              />
            </View>
            <View
              style={styles.slide}
              title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}
            >
              <Image
                resizeMode="stretch"
                style={styles.image}
                source={require('../images/login_bg.jpg')}
              />
            </View>
            <View
              style={styles.slide}
              title={
                <Text numberOfLines={1}>Learn from Kim K to land that job</Text>
              }
            >
              <Image
                resizeMode="stretch"
                style={styles.image}
                source={require('../images/login_bg.jpg')}
              />
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
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  image: {
    width,
    flex: 1
  }
});

export default Home;
