import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    TouchableOpacity,
    StatusBar,
    Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const { width } = Dimensions.get('window').width

const Controls = ({ albumcover }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <AntDesign name='banckward' size={30} color="white"></AntDesign>
            </TouchableOpacity>

            <TouchableOpacity style={styles.playpause}>
                <AntDesign name='playcircleo' size={30} color="#111436"></AntDesign>
            </TouchableOpacity>

            <TouchableOpacity>
                <AntDesign name='forward' size={30} color="white"></AntDesign>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    playpause: {
        width: 120,
        height: 120,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        borderWidth: 20,
        borderColor: '#1B1246',
        margin: 20
    },
});

export default Controls;