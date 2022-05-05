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

const Login = ({ route, navigation }) => {

  const theme = "light"

  const ref_input2 = useRef();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showModal, setModal] = useState(false)

  function isValidate() {
    if (username && password) {
      return true
    }
    return false
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      SplashScreen.hide();
    }, 2000);

    return () => clearTimeout(timer)
  })

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>

      <StatusBar
        backgroundColor={theme === "light" ? "#fff" : "#000"}
        barStyle={theme === "light" ? "dark-content" : "light-content"}
      />

      <ScrollView
        style={{ flex: 1, backgroundColor: "#ffffff" }}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() => {

          }}>
            <Image source={require('../images/ic_back.png')} style={{ height: 20, width: 20 }} />
          </TouchableWithoutFeedback>
          <Text style={{ fontSize: 20, color: "#000" }}>Back</Text>
        </View>

        <View style={{ paddingHorizontal: 28, paddingVertical: 10 }}>

          <Image source={require('../images/login_bg.jpg')} style={{ height: 120, width: 120 }} />

          <Text style={{ color: '#000', fontSize: 24, marginTop: 20 }}>Proceed with your</Text>
          <Text style={{ color: '#000', fontSize: 24, fontWeight: 'bold' }}>Login</Text>

          <View style={{ marginTop: 50 }}>
            <View>
              <Text style={{ color: 'black' }}>Username</Text>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                  placeholder="DURAR0045"
                  style={{ fontSize: 16, flex: 1 }}
                  returnKeyType="next"
                  onChangeText={(value) => setUsername(value.trim())}
                  onSubmitEditing={() => ref_input2.current.focus()}
                ></TextInput>
                <Image source={require('../images/ic_user.png')} style={{ height: 20, width: 20 }} />
              </View>
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                }}
              />
            </View>

            <View style={{ marginTop: 40, }}>
              <Text style={{ color: 'black' }}>Password</Text>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                  style={{ fontSize: 16, flex: 1 }}
                  secureTextEntry={true}
                  placeholder="enter your password"
                  returnKeyType="done"
                  onChangeText={(value) => setPassword(value.trim())}
                  ref={ref_input2}
                ></TextInput>
                <Image source={require('../images/ic_key.png')} style={{ height: 20, width: 20 }} />
              </View>
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                }}
              />
            </View>
          </View>

          <View style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <TouchableHighlight
              style={styles.loginBtn}
              onPress={() => {
                // if (isValidate()) {
                //   setModal(true)
                //   // Toast.show("Login Done");
                // } else {
                //   Toast.show("please enter username and password");
                // }

                setModal(true)
              }}
            >
              <Text style={{ textAlign: 'center', color: 'white' }}>Login</Text>
            </TouchableHighlight>

          </View>

          <View style={{ marginTop: 15, alignSelf: 'center' }}>
            <TouchableOpacity
              onPress={() => {

              }}
            >
              <Text >Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 15, alignSelf: 'center', marginBottom: 20 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PhoneVerification')
              }}
            >
              <Text style={{ color: 'blue', textAlign: 'center', }} >Don't have an account? Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Modal visible={showModal} transparent={true} >
          <View style={{ backgroundColor: "#000000aa", flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <View style={{ margin: 50, backgroundColor: "#ffffff", borderRadius: 8, paddingVertical: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 30, alignSelf: 'center' }}>Login Done</Text>
              <View style={{ marginTop: 30 }}>
                <Button title="Home" onPress={() => {
                  setModal(false)
                  navigation.navigate('Home')
                }} />
              </View>

              <View style={{ marginTop: 30 }}>
                <Button title="Home 1" onPress={() => {
                  setModal(false)
                  navigation.navigate('Home1')
                }} />
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
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
  }
});

export default Login;
