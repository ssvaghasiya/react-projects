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
} from 'react-native';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.warn("render", props)
  //   return { favoritecolor: props.favcol };
  // }

  componentDidMount() {
    console.warn("rendercomponentDidMountOut", this.state.favoritecolor)
    setTimeout(() => {
      this.setState({ favoritecolor: "blue" });
      console.warn("rendercomponentDidMountIn", this.state.favoritecolor)
    }, 1000)

  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.warn("rendergetSnapshotBeforeUpdate", prevProps)
  }

  componentDidUpdate() {
    console.warn("rendercomponentDidUpdate", this.state.favoritecolor)
  }

  shouldComponentUpdate() {
    return true;
  }

  changeColor = () => {
    this.setState({ favoritecolor: "green" });
  }

  render() {
    return (
      <View>
        <Text style={{ fontSize: 50 }}>Life Cycle Method {this.state.favoritecolor}</Text>
        <Button title="submit" onPress={() => { this.changeColor() }} />
      </View>
    );
  }

};



export default App;
