import React, { useEffect, useMemo, useState, useCallback } from 'react';
import {
    StyleSheet,
    Dimensions,
    ImageBackground,
    ScrollView,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    TouchableOpacity,
    FlatList,
    Image,
    ActivityIndicator,
    SafeAreaView,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Toast from 'react-native-simple-toast';

const OpenGallery = ({ route, navigation }) => {

    const [uri, setUri] = useState('')

    const openCamera = () => {
        let options = {
            mediaType: 'photo',
            quality: 1,
            includeBase64: true,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        launchCamera(options, response => {
            if (response.didCancel) {
                Toast.show('Cancelled image selection.');
            } else if (response.errorCode == 'permission') {
                Toast.show('Permission not satisfied');
            } else if (response.errorCode == 'others') {
                Toast.show(response.errorMessage);
            } else if (response.assets[0].fileSize > 2097152) {
                alert(
                    'Maximum image size exceeded',
                    'Please choose image under 2 MB',
                    [{ text: 'OK' }]
                )
            } else {
                // console.log('response', JSON.stringify(response));
                // console.log('response', typeof response)
                console.log('data', typeof response.assets[0].base64)
                setUri(response.assets[0].base64)
            }
        })
    }

    const launchLibrary = () => {
        let options = {
            mediaType: 'photo',
            quality: 1,
            includeBase64: true,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        launchImageLibrary(options, response => {
            if (response.didCancel) {
                Toast.show('Cancelled image selection.');
            } else if (response.errorCode == 'permission') {
                Toast.show('Permission not satisfied');
            } else if (response.errorCode == 'others') {
                Toast.show(response.errorMessage);
            } else if (response.assets[0].fileSize > 2097152) {
                alert(
                    'Maximum image size exceeded',
                    'Please choose image under 2 MB',
                    [{ text: 'OK' }]
                )
            } else {
                // console.log('response', JSON.stringify(response));
                // console.log('response', typeof response)
                console.log('data', typeof response.assets[0].base64)
                setUri(response.assets[0].base64)
            }
        })
    }


    return (
        <SafeAreaView>
            <Button title="open gallery" onPress={launchLibrary}></Button>
            <Button title="open camera" onPress={openCamera}></Button>
            <Image
                style={styles.image}
                source={{ uri: 'data:image/png;base64,' + uri }}
                resizeMode='cover'
            ></Image>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 120,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        alignSelf: 'center',
        marginTop: 30,
    },
});


export default OpenGallery;