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

const { width } = Dimensions.get('window').width

const AlbumCover = ({ albumcover }) => {

    return (
        <View style={{ margin: 10 }}>
            <Image
                source={{ uri: albumcover }}
                style={{ width, height: 300, borderRadius: 5 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#111436',
        flex: 1,
    },
});

export default AlbumCover;