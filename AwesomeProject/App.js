/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useState } from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import Login from './component/Login';
import Home from './component/Home';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './component/Profile';


/* const App = () => {
  const Data = "some data"
  function login() {
    alert("Login")
  }
  return (
    <View>
      <Text style={[styles.colors, styles.fonts]}>Hello </Text>
      <Login />
      <Home data={Data} />
      <Button title="Login" onPress={login}></Button>
      <TextInput placeholder={"enter your name"}
        onChangeText={(e) => { console.warn(e) }}></TextInput>

    </View>
  );
}; */

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again navigate"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to Details... again push"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

function ContactScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contact!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function AboutUsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Notification Component</Text>
      <Button
        onPress={() => navigation.navigate('Profile', {
          name: "Anuj",
          email: 'anuj@gmail.com',
        })}
        title="Go to Profile"
      />
      <Button onPress={() => navigation.goBack()} title="Go back AboutUs" />
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


class App extends Component {

  constructor() {
    super()
    this.state = {
      name: "",
      data: {
        name: 'Anil',
        email: 'anil@gmail.com'
      }
    }
  }
  render() {
    return (
      /*  <View>
         <Text style={styles.fonts}>Hello  {this.state.name}</Text>
         <TextInput placeholder={"enter your name"}
           onChangeText={(e) => { this.setState({ name: e }) }}
           style={{ fontSize: 20 }}></TextInput>
       </View> */

      <NavigationContainer>
        {/* <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator> */}

        {/* <Tab.Navigator >
          <Tab.Screen name="Contact" component={ContactScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator> */}

        <Drawer.Navigator initialRouteName="AboutUs">
          <Drawer.Screen name="AboutUs" component={AboutUsScreen} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
          <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}


const styles = StyleSheet.create({
  colors: {
    color: 'red',
    backgroundColor: 'yellow'
  },
  fonts: {
    fontSize: 50,
    fontWeight: 'bold'
  }

})

export default App;
