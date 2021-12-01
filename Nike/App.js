/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import {
  Image,
  TouchableOpacity,
} from 'react-native';

//screens
import { Home } from './screens';

import { icons, COLORS, SIZES, FONTS } from './constants'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent"
  }
}


const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'SHOE SELECTOR',
            headerTintColor: COLORS.lightGray,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              ...FONTS.navTitle
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginLeft: SIZES.base }}
                onPress={() => console.log("Header right on press")}
              >
                <Image

                  source={icons.menu}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25
                  }}>

                </Image>
              </TouchableOpacity>
            ),
            headerRight: ({ onPress }) => (
              <TouchableOpacity
                style={{ marginRight: SIZES.base }}
                onPress={onPress}
              >
                <Image

                  source={icons.search}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30
                  }}>

                </Image>
              </TouchableOpacity>
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
