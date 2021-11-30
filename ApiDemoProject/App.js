/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      jsonData: []
    }
  }

  componentDidMount() {
    this.callApi()
  }

  async callApi() {
    let resp = await fetch("https://facebook.github.io/react-native/movies.json")
    let respJson = await resp.json()
    this.setState({ jsonData: respJson.movies })
    // console.warn("respJson", respJson)
  }

  render() {
    console.warn("render", this.state.jsonData)
    return (
      <View>
        <Text style={{ fontSize: 50 }}>Life Cycle Method {this.state.data}</Text>
        <Text style={{ fontSize: 80 }}>Json Data</Text>
        <FlatList
          data={this.state.jsonData}
          renderItem={({ item }) => <Text style={{ fontSize: 50, margin: 10, color: 'red', backgroundColor: 'yellow' }}>{item.title}, {item.releaseYear}</Text>}
        />
      </View>
    )
  }
}


export default App;
