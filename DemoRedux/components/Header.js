import React from 'react';
import {
    Text,
    View,
    Image,
    Button,
    TouchableOpacity,
} from 'react-native';

const Header = (props) => {
    console.log(props.data)
    return (
        <View style={{ alignSelf: 'flex-end' }}>
            <Text style={{ color: 'black', fontSize: 20, alignSelf: 'center', marginTop: 15 }}>{props.data.count}</Text>

        </View>
    );
};


export default Header;