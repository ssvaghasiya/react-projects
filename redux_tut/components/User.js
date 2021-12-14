import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

const User = (props) => {
    const { data } = props
    return (
        <View>
            <Text>User Component {data.name}</Text>
        </View>
    );
};


export default User;