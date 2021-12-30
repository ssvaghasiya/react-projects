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

const AlbumDetails = ({ trackName, artistName }) => {

    return (
        <View style={{ justifyContent: 'center' }}>
            <Text style={styles.name}>{trackName}</Text>
            <Text style={styles.name}>{artistName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    name: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff'
    }
});

export default AlbumDetails;