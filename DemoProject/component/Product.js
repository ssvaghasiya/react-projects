import React, { useEffect } from 'react';
import {
    Text,
    View,
} from 'react-native';



const Product = (props) => {

    useEffect(() => {
        console.warn("use effect Product", props)
    })

    return (
        <View>
            <Text style={{ fontSize: 50 }}>Product Screen {props.data}</Text>
        </View>
    );
};


export default Product;