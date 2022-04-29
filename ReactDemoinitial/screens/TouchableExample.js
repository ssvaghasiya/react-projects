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
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  TextInput,
  ScrollView,
} from 'react-native';
import { useState, useEffect, useContext, useRef } from "react";

TouchableExample = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const onPress = () => {
    setCount(count + 1)
  }

  return (
    <ScrollView >
      <View style={styles.container}>

        <TextInput
          style={{ backgroundColor: 'azure', fontSize: 20 }}
          placeholder="Type here to translate!"
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />

        <Text style={{ padding: 100, fontSize: 50 }}>
          {inputValue.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>

        <View style={styles.countContainer}>
          <Text style={styles.countText}>
            Count: {count || null}
          </Text>
        </View>

        <TouchableHighlight onPress={onPress}>
          <View style={styles.button}>
            <Text>Touch Here</Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity
          style={[styles.button, { marginVertical: 10 }]}
          onPress={onPress}
        >
          <Text>Press Here</Text>
        </TouchableOpacity>

        <TouchableWithoutFeedback onPress={onPress}>
          <View style={[styles.button, { marginVertical: 10 }]}>
            <Text>Touch Here</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableNativeFeedback onPress={onPress}>
          <View style={[styles.button, { marginVertical: 10 }]}>
            <Text>Touch Here</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </ScrollView>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },

  countContainer: {
    alignItems: "center",
    padding: 10
  },
  countText: {
    color: "#FF00FF"
  }
});


export default TouchableExample;
