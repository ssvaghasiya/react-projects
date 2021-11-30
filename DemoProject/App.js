/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  Text,
  View,
  TextInput,
  Modal,
} from 'react-native';
import Product from './component/Product';
import Icon from 'react-native-vector-icons/FontAwesome5';

// useState
const App: () => Node = () => {
  const [count, setCount] = useState(0)
  const [showModal, setModal] = useState(false)

  useEffect(() => {
    console.warn("use effect", count)
  })

  return (
    <View style={{ flex: 1 }}>
      <Icon name="comments" size={30} color="#900" />
      <Icon.Button name="facebook" solid>
        Login with Facebook
      </Icon.Button>
      <Text style={{ fontSize: 50 }}>{count}</Text>
      <ScrollView horizontal={true}>
        <View style={{ height: 200, width: 200, backgroundColor: 'green' }}></View>
        <View style={{ height: 200, width: 200, backgroundColor: 'blue' }}></View>
        <View style={{ height: 200, width: 200, backgroundColor: 'red' }}></View>
        <View style={{ height: 200, width: 200, backgroundColor: 'yellow' }}></View>
      </ScrollView>
      <Product data={count} />
      <Button title="- state" onPress={() => setCount(count - 1)} />
      <Button title="+ state" onPress={() => setCount(count + 1)} />
      <Button title="show Popup" onPress={() => setModal(true)} />
      <Modal visible={showModal} transparent={true}>
        <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
          <View style={{ margin: 50, backgroundColor: "#ffffff", flex: 1, borderRadius: 8, padding: 15 }}>
            <Text style={{ fontSize: 70 }}>Popup</Text>
            <Button title="hide Popup" onPress={() => setModal(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};


// Life Cycle Method
/* class App extends React.Component {
  constructor() {
    super()
    console.warn("constructor")
    this.state = {
      data: "",
      jsonData: [
        { name: 'anil', email: 'anil@gmail.com' },
        { name: 'sunil', email: 'sunil@gmail.com' },
        { name: 'raj', email: 'raj@gmail.com' },
        { name: 'rajesh', email: 'rajesh@gmail.com' },
        { name: 'abhishek', email: 'abhishek@gmail.com' },
        { name: 'harsh', email: 'harsh@gmail.com' },
        { name: 'anil', email: 'anil@gmail.com' },
        { name: 'sunil', email: 'sunil@gmail.com' },
        { name: 'raj', email: 'raj@gmail.com' },
        { name: 'rajesh', email: 'rajesh@gmail.com' },
        { name: 'abhishek', email: 'abhishek@gmail.com' },
        { name: 'harsh', email: 'harsh@gmail.com' },
      ]
    }
  }

  componentDidMount() {
    console.warn("componentDidMount")
    this.setState({ data: "Testing" })
  }

  submit() {
    console.log("test debug")
  }

  render() {
    console.warn("render")
    return (
      // <View>
      <ScrollView>
        <Text style={{ fontSize: 50 }}>Life Cycle Method {this.state.data}</Text>
        <Text style={{ fontSize: 80 }}>Json Data</Text>
        <FlatList
          data={this.state.jsonData}
          renderItem={({ item }) => <Text style={{ fontSize: 50 }}>{item.name}</Text>}
        />

        <TextInput
          placeholder={"enter your name"}
          onChangeText={(e) => { }}
          style={{ borderColor: 'blue', margin: 15, borderWidth: 2 }}
          maxLength={5}></TextInput>

        <TextInput
          placeholder={"enter your name"}
          onChangeText={(e) => { }}
          style={{ borderColor: 'blue', margin: 15, borderWidth: 2 }}
          keyboardType={'numeric'}></TextInput>

        <TextInput
          placeholder={"enter your name"}
          onChangeText={(e) => { }}
          style={{ borderColor: 'blue', margin: 15, borderWidth: 2 }}
          maxLength={5}></TextInput>

        <Button title="submit" onPress={() => { this.submit() }} />
      </ScrollView>
      // </View>
    )
  }
} */

export default App;
