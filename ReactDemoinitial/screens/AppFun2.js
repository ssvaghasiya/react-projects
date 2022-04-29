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
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useState, useEffect, useContext, useRef } from "react";
import { GlobalInfo } from './AppFun';

AppFun2 = () => {

  const { appColor } = useContext(GlobalInfo);
  const count = useRef(0);
  const [inputValue, setInputValue] = useState("");
  const inputElement = useRef(null);
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [toggleText, setToggleText] = useState("Show");
  let imagePath = { uri: 'https://facebook.github.io/react-native/img/header_logo.png' };

  useEffect(() => {
    count.current = count.current + 1;
  });

  const focusInput = () => {
    inputElement.current.focus();
  };

  handleToggle = () => {
    if (isPasswordVisible) {
      setIsPasswordVisible(false);
      setToggleText('Hide');
    } else {
      setIsPasswordVisible(true);
      setToggleText('Show');
    }
  };

  return (
    <ScrollView >
      <Text style={{ fontSize: 50, color: appColor }}>Fun2</Text>
      <Text style={{ fontSize: 50, color: 'blue' }}>{count.current}</Text>
      <TextInput
        style={{ backgroundColor: 'azure', fontSize: 20 }}
        placeholder="Type here to translate!"
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
      />

      <TextInput
        style={{ backgroundColor: 'azure', fontSize: 20, marginTop: 10 }}
        placeholder="Type here "
        ref={inputElement}
      />

      <Button title="focus" onPress={() => focusInput()} ></Button>

      <View style={styles.container}>
        <View style={{ backgroundColor: 'blue', flex: 0.3 }} />
        <View style={{ backgroundColor: 'red', flex: 0.5 }} />
        <Text style={{ fontSize: 18 }}>View Example</Text>
      </View>

      <TextInput
        secureTextEntry={isPasswordVisible}
        style={{ backgroundColor: '#a7a6a9', color: 'white', fontSize: 20, marginTop: 20 }}
      />

      <TouchableOpacity onPress={this.handleToggle}>
        <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 10, marginBottom: 20 }}>{toggleText}</Text>
      </TouchableOpacity>

      <Image source={imagePath} style={{ width: 150, height: 150, alignSelf: 'center', margin: 10, backgroundColor: 'black' }} />
    </ScrollView >
  );

};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    width: "80%",
    backgroundColor: "#5ead97",
    marginTop: 20
  },

})

export default AppFun2;
