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
import SignupScreen from './screens/SignupScreen';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import auth from '@react-native-firebase/auth'
import HomeScreen from './screens/HomeScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import ChatScreen from './screens/ChatScreen';


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
  },
};

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [user, setuser] = useState('')
  useEffect(() => {
    const unregister = auth().onAuthStateChanged(userExist => {
      if (userExist) {
        setuser(userExist)
      }
      else setuser("")
    })

    return () => {
      unregister()
    }

  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTintColor: 'green' }}>
        {user ?
          <>
            <Stack.Screen name="home" options={{
              headerRight: () => <MaterialIcons
                name="account-circle"
                size={34}
                color='green'
                style={{ marginRight: 10 }}
                onPress={() => auth().signOut()}
              />
            }} >
              {props => <HomeScreen {...props} user={user} />}
            </Stack.Screen>
            <Stack.Screen name="chat" options={({ route }) => ({ title: route.params.name })}>
              {props => <ChatScreen {...props} user={user} />}
            </Stack.Screen>
          </>
          :
          <>
            <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="signup" component={SignupScreen} options={{ headerShown: false }} />
          </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const App = () => {
  return (
    <>
      <PaperProvider theme={theme}>
        <StatusBar barStyle='dark-content' backgroundColor="green" />
        <View style={styles.container}>
          <Navigation />
        </View>
      </PaperProvider>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
