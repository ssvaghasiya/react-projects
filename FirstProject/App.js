/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useEffect } from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

class App extends Component {

  constructor(props) {
    super()
    this.state = {
      bg: "yellow"
    }
  }

  clickHandler() {
    console.log(this.props.name)
    this.setState({ bg: "red" })
  }

  fx(arg) {
    console.log(arg)
  }

  render() {
    return (
      <View>
        <Text style={{ backgroundColor: this.state.bg }}>Hello Class Component {this.props.name}</Text>
        <Button
          title="Click me"
          onPress={this.clickHandler.bind(this)} />
        <ChildComponent handler={this.fx} />
        <ChildComponent1></ChildComponent1>
      </View>
    )
  }
}

App.defaultProps = {
  name: "Hello Friends!!!",
  course: "2"
};


App.propTypes = {
  name: PropTypes.string,
  course: PropTypes.string.isRequired
};

class ChildComponent extends Component {

  constructor(props) {
    super()

  }


  render() {
    return (
      <View>
        <Text >Hello Child Component</Text>
        <Button
          title="Click me Child Component"
          onPress={() => this.props.handler("Raju")} />

      </View>
    )
  }
}

const ChildComponent1 = () => {

  useEffect(() => {
    //didMount  or didUpdate   -> runs after every component render
    console.log("component updated")

    return () => { console.log('unmount') }  // runs when component unmount
  }, [])

  return (
    <View>
      <Text>Hello Child 1</Text>
    </View>
  )
}

export default App;
