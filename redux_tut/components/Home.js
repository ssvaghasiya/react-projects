import React from 'react';
import {
    Text,
    View,
    Image,
    Button,
    TouchableOpacity,
} from 'react-native';

const Home = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ color: 'black', fontSize: 20 }}>Home Component</Text>
            <Text style={{ color: 'black', fontSize: 20, alignSelf: 'center', marginTop: 15 }}>{props.data.length}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    source={{ uri: 'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg' }}
                    resizeMode="cover"
                    style={{
                        width: 100,
                        height: 100,
                        marginTop: 15,
                    }}
                />

                <View style={{ alignItems: 'center', marginStart: 25 }}>
                    <Text>I-Phone</Text>
                    <Text>Price : $1000.00</Text>
                </View>
                <View style={{ marginStart: 25 }}>

                    <TouchableOpacity
                        style={{ backgroundColor: 'blue', height: 40, padding: 10, }}
                        onPress={() => {
                            props.addToCartHandler({ price: 1000, name: 'i phone' })
                        }}>
                        <Text style={{ color: 'white', alignSelf: 'center' }}>Add to cart</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ backgroundColor: 'blue', height: 40, padding: 10, marginTop: 20 }}
                        onPress={() => {
                            props.removeToCartHandler()
                        }}>
                        <Text style={{ color: 'white', alignSelf: 'center' }}>Remove from cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};


export default Home;