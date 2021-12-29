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


const Temp = ({ route, navigation }) => {

    const [screenList, setScreenList] = useState([
        {
            id: 1,
            title: 'useCallBack Demo',
            navId: 'UseCallBackDemo'
        },
        {
            id: 2,
            title: 'Open Gallery',
            navId: 'OpenGallery'
        },
        {
            id: 3,
            title: 'Map',
            navId: 'Map'
        },
        {
            id: 4,
            title: 'Navigation Drawer',
            navId: 'CustomNavDrawerStack'
        },
        {
            id: 5,
            title: 'useMemo Demo',
            navId: 'UseMemoDemo'
        },
        {
            id: 6,
            title: 'Audio Player',
            navId: 'UseMemoDemo'
        }

    ])

    function renderData(item, index) {

        return (
            <TouchableHighlight
                style={[{ flex: 1 }, styles.loginBtn]}
                onPress={() => {
                    navigation.navigate(item.navId)
                }}
            >
                <Text style={{ textAlign: 'center', color: 'white' }}>{item.title}</Text>

            </TouchableHighlight>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                flexDirection: 'row'
            }}>
                <FlatList
                    style={styles.list}
                    showsVerticalScrollIndicator={false}
                    data={screenList}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => renderData(item, index)}
                />

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    loginBtn: {
        alignSelf: 'center',
        backgroundColor: '#4632A1',
        width: Dimensions.get('window').width / 1.5,
        height: 50,
        justifyContent: 'center',
        borderRadius: 100,
        marginTop: 40
    },
    list: {
        flex: 1,
        padding: 8
    },
});

export default Temp;