import React from 'react';
import {
    Text,
    View,
} from 'react-native';



const Home = (props) => {
    return (
        <View>
            <Text>Home Screen {props.data}</Text>
        </View>
    );
};


export default Home;