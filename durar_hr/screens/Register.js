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
import CardView from 'react-native-cardview'
import { useTogglePasswordVisibility } from './useTogglePasswordVisibility';

const Register = () => {

  const theme = "light"

  const ref_input2 = useRef();
  const [username, setUsername] = useState("")
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true);

  useEffect(() => {

  })

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E5FFDA" }}>

      <StatusBar
        backgroundColor={theme === "light" ? "#E5FFDA" : "#000"}
        barStyle={theme === "light" ? "dark-content" : "light-content"}
      />

      <ScrollView
        style={{ flex: 1, backgroundColor: "#E5FFDA" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() => {

          }}>
            <Image source={require('../images/ic_arw_back.png')} style={{ height: 54, width: 54 }} />
          </TouchableWithoutFeedback>
        </View>

        <View style={{ paddingHorizontal: 18, paddingVertical: 10 }}>
          <Text style={{ color: '#000', fontSize: 24, fontWeight: 'bold' }}>Sign Up</Text>
          <Text style={{ color: '#4D567D', fontSize: 12, textAlign: 'justify', lineHeight: 18, marginTop: 5 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, e</Text>

          <CardView
            style={{ paddingHorizontal: 10, marginTop: 20 }}
            cardElevation={8}
            cardMaxElevation={8}
            cornerRadius={5}
          >
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Name"
              placeholderTextColor={"#4D567D"}
            />
          </CardView>

          <CardView
            style={{ paddingHorizontal: 10, marginTop: 20 }}
            cardElevation={8}
            cardMaxElevation={8}
            cornerRadius={5}
          >
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Phone Number"
              placeholderTextColor={"#4D567D"}
            />
          </CardView>

          <CardView
            style={{ paddingHorizontal: 10, marginTop: 20 }}
            cardElevation={8}
            cardMaxElevation={8}
            cornerRadius={5}
          >
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Email Address"
              placeholderTextColor={"#4D567D"}
            />
          </CardView>

          <CardView
            style={{ paddingHorizontal: 10, marginTop: 20 }}
            cardElevation={8}
            cardMaxElevation={8}
            cornerRadius={5}
          >
            <View style={styles.passwordSection}>

              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Password"
                style={{ flex: 1 }}
                secureTextEntry={passwordVisible}
                placeholderTextColor={"#4D567D"}
              />

              <TouchableWithoutFeedback onPress={() => {
                setPasswordVisible(!passwordVisible)
              }}>
                {passwordVisible ?
                  <Image source={require('../images/ic_password_hide.png')} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                  :
                  <Image source={require('../images/ic_password_show.png')} style={{ height: 20, width: 20, resizeMode: 'contain' }} />}

              </TouchableWithoutFeedback>
            </View>
          </CardView>

          <CardView
            style={{ paddingHorizontal: 10, marginTop: 20 }}
            cardElevation={8}
            cardMaxElevation={8}
            cornerRadius={5}
          >
            <View style={styles.passwordSection}>

              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Confirm Password"
                style={{ flex: 1 }}
                secureTextEntry={confirmPasswordVisible}
                placeholderTextColor={"#4D567D"}
              />

              <TouchableWithoutFeedback onPress={() => {
                setConfirmPasswordVisible(!confirmPasswordVisible)
              }}>
                {confirmPasswordVisible ?
                  <Image source={require('../images/ic_password_hide.png')} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                  :
                  <Image source={require('../images/ic_password_show.png')} style={{ height: 20, width: 20, resizeMode: 'contain' }} />}

              </TouchableWithoutFeedback>
            </View>
          </CardView>


          <View style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <TouchableHighlight
              style={styles.loginBtn}
              onPress={() => {

              }}
            >
              <Text style={{ textAlign: 'center', color: 'white' }}>Register</Text>
            </TouchableHighlight>

          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  header: {
    height: APPBAR_HEIGHT,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomView: {
    flex: 1,
    backgroundColor: '#ffffff',
    bottom: 50,
  },
  loginBtn: {
    alignSelf: 'center',
    backgroundColor: '#E3002C',
    width: "100%",
    height: 50,
    justifyContent: 'center',
    marginTop: 40
  },
  button: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  loginBtn: {
    alignSelf: 'center',
    backgroundColor: '#34701A',
    width: "100%",
    height: 50,
    justifyContent: 'center',
    marginTop: 40,
    borderRadius: 200
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    position: 'absolute',
    top: 150,
    right: 10,
    elevation: 10,
    backgroundColor: 'yellow',
  },
  passwordSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default Register;
