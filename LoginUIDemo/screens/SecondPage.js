import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Dimensions,
    ImageBackground,
    ScrollView,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    TouchableOpacity,
    FlatList,
    Image,
    ActivityIndicator,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import api from '../api/api';
import { COLORS, SIZES, FONTS } from '../constants';


const SecondPage = ({ route, navigation }) => {


    return (
        // Container start
        <View >
            <Text>Second Page</Text>
            <Button title="Move to Third Page" onPress={() => {
                navigation.navigate("ThirdPage")
            }}></Button>
        </View>


    );
};
export default SecondPage;