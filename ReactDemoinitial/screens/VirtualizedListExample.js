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
  View,
  VirtualizedList,
  Text,
} from 'react-native';
import { useState, useEffect, useContext, useRef } from "react";

const DATA = [];

const getItem = (data, index) => {
  return {
    id: index,
    title: 'test ' + index
  }
}

const getItemCount = (data) => {
  return 100;
}

const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

VirtualizedListExample = () => {

  return (
    <SafeAreaView>
      <VirtualizedList
        data={DATA}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ccc',
    height: 100,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
});


export default VirtualizedListExample;
