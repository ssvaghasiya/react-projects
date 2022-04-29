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
  Alert,
} from 'react-native';
import { useState, useEffect, useContext, useRef } from "react";

AppFun3 = () => {

  const onPressButton = () => {
    Alert.alert('You clicked the button!')
  }

  return (
    <View style={styles.container}>

      <View style={styles.buttonContainer}>
        <Button
          onPress={() => onPressButton()}
          title="Press Me"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          onPress={() => onPressButton()}
          title="Press Me"
          color="#009933"
        />
      </View>

      <View style={styles.multiButtonContainer}>
        <Button
          onPress={() => onPressButton()}
          title="A disabled button"
          disabled={true}
        />
        <Button
          onPress={() => onPressButton()}
          title="OK!"
          color="#009933"
        />
      </View>

      <View style={{ width: "100%", flexDirection: 'row', justifyContent: "space-between", alignItems: "center", padding: 20, width: "100%", }}>
        <TextInput
          style={styles.inputTextConainer}
        />
        <View style={styles.buttonOKConainer}>
          <Button
            onPress={() => onPressButton()}
            title="OK!"
            color="#009933"
          />
        </View>
      </View>
    </View >
  );

};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'skyblue'
  },
  buttonContainer: {
    margin: 20
  },
  multiButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputTextConainer: {
    width: "65%",
    backgroundColor: '#a7a6a9',
    color: 'white',
    fontSize: 20,
  },
  buttonOKConainer: {
    width: "30%",
  }
})

export default AppFun3;
