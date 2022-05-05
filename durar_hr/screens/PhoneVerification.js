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
import { Col, Row, Grid } from "react-native-easy-grid";
import OtpInputs from './OtpInputs';

const PhoneVerification = ({ route, navigation }) => {

  const theme = "light"
  const [otp, setOtp] = useState('')

  function getOtp(otp) {
    console.log(otp);
    setOtp(otp);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E5FFDA" }}>

      <StatusBar
        backgroundColor={theme === "light" ? "#E5FFDA" : "#000"}
        barStyle={theme === "light" ? "dark-content" : "light-content"}
      />

      <View
        style={{ flex: 1, backgroundColor: "#E5FFDA", justifyContent: 'center', }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={{ color: '#000', fontSize: 24, fontWeight: 'bold', alignSelf: 'center', marginTop: 20 }}>Phone Verification</Text>

        <OtpInputs />

        <View style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <TouchableHighlight
            style={styles.loginBtn}
            onPress={() => {
              navigation.navigate('PhoneVerification')
            }}
          >
            <Text style={{ textAlign: 'center', color: 'white' }}>Register</Text>
          </TouchableHighlight>

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
  otpBoxesContainer: {
    flexDirection: 'row'
  },
  otpBox: {
    padding: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#000",
    height: 45,
    width: 45,
    textAlign: 'center'
  },
  textInputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignSelf: 'center'
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 0,
    height: 45,
    width: 45,
    marginStart: 5,
    marginEnd: 5,
    backgroundColor: 'white',
  },
  inputStyles: {
    textAlign: 'center'
  },
  loginBtn: {
    alignSelf: 'center',
    backgroundColor: '#34701A',
    width: "80%",
    height: 50,
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 5,
    borderRadius: 200,
  },
});

export default PhoneVerification;
