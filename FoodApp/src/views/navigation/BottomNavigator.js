// import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import COLORS from '../../consts/colors';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                style: {
                    height: 55,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                showLabel: false,
                activeTintColor: COLORS.primary,
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="home-filled" color={color} size={28} />
                    ),
                }}
            />
            <Tab.Screen
                name="LocalMall"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="local-mall" color={color} size={28} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="search" color={color} size={28} />
                    ),
                }}
            />
            <Tab.Screen
                name="Favourite"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="favorite" color={color} size={28} />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="shopping-cart" color={color} size={28} />
                    ),
                }}
            />
        
        </Tab.Navigator>
    )
}

export default BottomNavigator;
