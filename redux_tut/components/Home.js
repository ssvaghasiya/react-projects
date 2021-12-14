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
            <Image
                source={require('../assets/images/ic_cart.png')}
                style={{
                    width: 40,
                    height: 40,
                    marginTop: 15,
                    marginEnd: 15,
                    alignSelf: 'flex-end'
                }}
            />
            <Text style={{ color: 'black', fontSize: 20 }}>Home Component</Text>
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

                <TouchableOpacity
                    style={{ backgroundColor: 'blue', height: 40, padding: 10, marginStart: 25 }}
                    onPress={() => {

                    }}>
                    <Text style={{ color: 'white' }}>Add to cart</Text>
                </TouchableOpacity>


            </View>
        </View>
    );
};


export default Home;