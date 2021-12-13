import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UseMemoDemo from '../screens/UseMemoDemo';
import UseCallBackDemo from '../screens/UseCallBackDemo';
import Temp from '../screens/Temp';
import OpenGallery from '../screens/OpenGallery';
import Map from '../screens/Map';
import Home from '../screens/Home';
import ItemDetail from '../screens/ItemDetail';
import SectionLists from '../screens/SectionList';
import CustomNavDrawerStack from '../screens/CustomNavDrawerStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    View,
    TouchableOpacity,
} from 'react-native';
// services
import Auth from '../services/auth';

const Stack = createNativeStackNavigator();

export default AppNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: true
        }}
    >
        <Stack.Screen name="Home" component={Home} options={{
            title: 'Home Page',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: "#006aff"
            },
            headerRight: () =>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            Auth.signOut()
                        }}
                    >
                        <Icon name="sign-out-alt" size={25} />
                    </TouchableOpacity>
                </View>
            ,

        }} />
        <Stack.Screen name="ItemDetail" component={ItemDetail} />
        <Stack.Screen name="SectionLists" component={SectionLists} />
        <Stack.Screen name="CustomNavDrawerStack" component={CustomNavDrawerStack} options={{ headerShown: false }} />
        <Stack.Screen name="UseMemoDemo" component={UseMemoDemo} />
        <Stack.Screen name="UseCallBackDemo" component={UseCallBackDemo} />
        <Stack.Screen name="Temp" component={Temp} />
        <Stack.Screen name="OpenGallery" component={OpenGallery} />
        <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
)