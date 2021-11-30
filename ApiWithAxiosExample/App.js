/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';

const App: () => Node = () => {
  Geolocation.getCurrentPosition(info => console.log(info));
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    getApiData()
  }, [])

  async function getApiData() {
    let resp = await axios.get("https://reactnative.dev/movies.json")
    // console.warn(resp.data)
    setJsonData(resp.data.movies)
    console.warn("jsonData", jsonData)
  }


  return (
    <View>
      {jsonData.length > 0 ?
        <View>
          {
            jsonData.map((item) =>
              <Text>{item.title}</Text>
            )
          }
        </View> : <Text>data is loading...</Text>}
    </View>
  );
};



export default App;
