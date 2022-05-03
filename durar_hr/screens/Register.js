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
import CheckBox from '@react-native-community/checkbox';
import CountryPicker from 'react-native-country-picker-modal'


const Register = () => {

  const theme = "light"

  const ref_input2 = useRef();
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true);
  const [isSelectedTerems, setSelectionTerms] = useState(false);
  const [country, setCountry] = useState(null);
  const [cca2, setCca2] = useState(null);
  const [pickerShow, setPickerShow] = useState(false);
  const [countryCode, setCountryCode] = useState('91');

  const [username, setUsername] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [showModal, setModal] = useState(false)

  function isValidate() {
    if (!username) {
      Toast.show("Please enter name");
      return false
    } else if (!phone) {
      Toast.show("Please enter phone");
      return false
    } else if (!email) {
      Toast.show("Please enter email");
      return false
    } else if (!password) {
      Toast.show("Please enter password");
      return false
    } else if (!confirmPassword) {
      Toast.show("Please enter confirm password");
      return false
    } else if (password !== confirmPassword) {
      Toast.show("password and confirm password not matched");
      return false
    } else if (!isSelectedTerems) {
      Toast.show("Please select terms and policy");
      return false
    }

    return true
  }

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

          {pickerShow && <CountryPicker
            withAlphaFilter
            withFilter
            withFlag
            withCallingCode
            onSelect={(value) => {
              setCountry(value)
              setCca2(value.cca2)
              setCountryCode(value.callingCode[0])
            }}
            cca2={cca2}
            translation='eng'
            onClose={() => setPickerShow(false)}
            visible={pickerShow}
            withCountryNameButton
          />}

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
              onChangeText={(value) => setUsername(value.trim())}
            />
          </CardView>

          <CardView
            style={{ paddingHorizontal: 10, marginTop: 20 }}
            cardElevation={8}
            cardMaxElevation={8}
            cornerRadius={5}
          >
            <View style={styles.passwordSection}>
              <TouchableOpacity onPress={() => setPickerShow(true)}>
                {countryCode !== null && (
                  <Text style={{
                    color: "#4D567D"
                  }}>+{countryCode}</Text>
                )}
              </TouchableOpacity>
              <Text style={{
                color: "#4D567D"
              }}> - </Text>
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Phone Number"
                placeholderTextColor={"#4D567D"}
                onChangeText={(value) => setPhone(value.trim())}
              />
            </View>
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
              onChangeText={(value) => setEmail(value.trim())}
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
                onChangeText={(value) => setPassword(value.trim())}
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
                onChangeText={(value) => setConfirmPassword(value.trim())}
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

          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelectedTerems}
              onValueChange={(newValue) => setSelectionTerms(newValue)}
              style={styles.checkbox}
              tintColors={{ true: '#34701A', false: '#34701A' }}
            />
            <Text style={styles.label}>I Agree with Terms & Conditions and Privacy Policy </Text>
          </View>


          <View style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <TouchableHighlight
              style={styles.loginBtn}
              onPress={() => {
                if (isValidate()) {
                  setModal(true)
                }
              }}
            >
              <Text style={{ textAlign: 'center', color: 'white' }}>Register</Text>
            </TouchableHighlight>

          </View>

        </View>

        <Modal visible={showModal} transparent={true} >
          <View style={{ backgroundColor: "#000000aa", flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <View style={{ margin: 50, backgroundColor: "#ffffff", borderRadius: 8, paddingVertical: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 30, alignSelf: 'center' }}>Register Done</Text>
              <View style={{ marginTop: 30 }}>
                <Button title="close" onPress={() => setModal(false)} />
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
    marginTop: 30,
    marginBottom: 5,
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
  checkboxContainer: {
    flexDirection: "row",
    marginTop: 15,
    alignItems: 'center'
  },
  checkbox: {
    alignSelf: "flex-start",
    marginTop: 4,
  },
  label: {
    margin: 8,
    lineHeight: 16,
    fontSize: 12,
    color: "#333E47"
  },
  phoneContainer: {
    width: '75%',
    height: 50,
  },
  textInput: {
    paddingVertical: 0,
  },
});

export default Register;
