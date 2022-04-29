/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import RNLocation from 'react-native-location';
import { useState, useEffect, useContext, useRef } from "react";
import Geolocation from 'react-native-location';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

GeoLocationExample = () => {

  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);

  const getGPSLocation = async () => {
    Geolocation.configure({
      distanceFilter: 5.0,
      desiredAccuracy: {
        ios: 'best',
        android: 'balancedPowerAccuracy',
      },
    });
    //trycatch block to catch any async errors
    try {
      //check for permissions
      const checkPerm = await Geolocation.checkPermission({
        ios: 'whenInUse',
        android: {
          detail: 'fine',
        },
      });
      //If not permission, ask for one
      if (!checkPerm) {
        const permGranted = await Geolocation.requestPermission({
          ios: 'whenInUse',
          android: {
            detail: 'fine',
            rationale: {
              title: 'We need to access your location',
              message: 'We use your location to show your current location',
              buttonPositive: 'OK',
              buttonNegative: 'Cancel',
            },
          },
        });
        if (!permGranted) {
          console.log('Permission not granted');
          throw Error('Permission not granted﻿');
        }
      } else {

      }
      //Get the location information only with required permissions
      const position = await Geolocation.getLatestLocation({ timeout: 70000 });
      // alert(JSON.stringify(position));
      setLat(position.latitude)
      setLong(position.longitude)
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  useEffect(() => {
    RNLocation.configure({
      distanceFilter: 5.0
    })

    // RNLocation.requestPermission({
    //   ios: "whenInUse",
    //   android: {
    //     detail: "coarse"
    //   }
    // }).then(granted => {
    //   console.log("permissionGranted", granted)
    //   if (granted) {
    //     var locationSubscription = RNLocation.subscribeToLocationUpdates(locations => {
    //       console.log('locations: ', locations);
    //       let lat = locations[0].latitude;
    //       let lon = locations[0].longitude;
    //       console.log('locations: ', lat, lon);
    //       setLat(lat)
    //       setLong(lon)
    //     })
    //   }
    // })
    getGPSLocation()
  })

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <Text style={styles.instructions}>To get started, edit App.js</Text>
      <Text>`lat: ${lat} lon: ${long}`</Text>
      <Text style={styles.instructions}>{instructions}</Text>
      {/* <Button
        onPress={() => getGPSLocation()}
        title="OK!"
        color="#009933"
      /> */}
    </View>
  );

};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default GeoLocationExample;
