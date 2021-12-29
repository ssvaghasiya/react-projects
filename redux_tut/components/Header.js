import React from 'react';
import {
    Text,
    View,
    Image,
    Button,
    TouchableOpacity,
} from 'react-native';

const Header = (props) => {
    console.warn("Header", props.data.length)
    return (
        <View style={{ alignSelf: 'flex-end' }}>
            <Text style={{ color: 'black', fontSize: 20, alignSelf: 'center', marginTop: 15 }}>{props.data.length}</Text>
            <Image
                source={require('../assets/images/ic_cart.png')}
                style={{
                    width: 40,
                    height: 40,
                    marginEnd: 15,
                    alignSelf: 'flex-end'
                }}
            />
        </View>
    );
};


export default Header;