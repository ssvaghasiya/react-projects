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
// import OtpInputs from 'react-native-otp-inputs';

const PhoneVerification = ({ route, navigation }) => {

  const theme = "light"
  const [otp, setOtp] = useState(['-', '-', '-', '-', '-', '-']);
  const [otpVal, setOtpVal] = useState('');
  const [otpInput, setOtpInput] = useState('')

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E5FFDA" }}>

      <StatusBar
        backgroundColor={theme === "light" ? "#E5FFDA" : "#000"}
        barStyle={theme === "light" ? "dark-content" : "light-content"}
      />

      <View
        style={{ flex: 1, backgroundColor: "#E5FFDA" }}
        showsVerticalScrollIndicator={false}
      >
        <OtpInputs />

        {/*  <TextInput
          onChangeText={value => {
            if (isNaN(value)) {
              return;
            }
            if (value.length > 6) {
              return;
            }
            let val =
              value + '------'.substr(0, 6 - value.length);
            let a = [...val];
            setOtpVal(a);
            setOtp(value);
          }}
          keyboardType="numeric"
          style={{ height: 0 }}
          autoFocus={true}
        />
        <View style={styles.otpBoxesContainer}>
          {[0, 1, 2, 3, 4, 5].map((item, index) => (
            <Text style={styles.otpBox} key={index}>
              {otp[item]}
            </Text>
          ))}
        </View> */}

        {/* <OtpInputs
          style={styles.textInputContainer}
          handleChange={(code) => console.log(code)}
          numberOfInputs={6}
          inputContainerStyles={styles.roundedTextInput}
          inputStyles={styles.inputStyles}
        /> */}
      </View>

    </SafeAreaView>
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
});

export default PhoneVerification;
