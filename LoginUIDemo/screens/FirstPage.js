
import React, { useEffect, useState } from 'react';
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
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import api from '../api/api';
import { COLORS, SIZES, FONTS } from '../constants';


const FirstPage = ({ route, navigation }) => {

    const [firstList, setFirstList] = useState([
        {
            id: 0,
            name: "Nike Air Zoom Pegasus 36",
        },
        {
            id: 1,
            name: "Nike Metcon 5",
        },
        {
            id: 2,
            name: "Nike Air Zoom Kobe 1 Proto",
        },
    ]);
    const [secondList, setSecondList] = useState([]);

    function renderSeparator() {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    };
    //handling onPress action  
    function getListViewItem(item) {
        Alert.alert(item.key);
    }

    function renderFirstList(item, index) {

        return (
            <TouchableOpacity style={{ paddingHorizontal: 12, paddingVertical: 12 }}
                onPress={() => {

                }}
            >
                <Text style={{ color: 'black' }}>{item.name}</Text>

            </TouchableOpacity>
        )
    }

    function renderSecondList(item, index) {

        return (
            <TouchableOpacity style={{ paddingHorizontal: 12, paddingVertical: 12 }}
                onPress={() => {

                }}
            >
                <Text style={{ color: 'black' }}>{item.name}</Text>

            </TouchableOpacity>
        )
    }

    return (
        // Container start
        <View style={{ flex: 1 }} >
            <View style={{ flexDirection: 'row' }}>
                <TextInput placeholder="enter value" style={{ flex: 1, borderBottomWidth: 1 }}></TextInput>
                <Button title="Add"></Button>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <FlatList
                    style={{ flex: 1, borderColor: 'black', borderWidth: 1 }}
                    showsVerticalScrollIndicator={false}
                    data={firstList}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => renderFirstList(item, index)}
                    ItemSeparatorComponent={() => renderSeparator()}
                />

                <View style={{ justifyContent: 'center' }}>
                    <View style={{ marginTop: 15 }} >
                        <Button title="Move Right" onPress={() => {

                        }}></Button>
                    </View>
                    <View style={{ marginTop: 15 }} onPress={() => {

                    }}>
                        <Button title="Move Left"></Button>
                    </View>
                </View>

                <FlatList
                    style={{ flex: 1, borderColor: 'black', borderWidth: 1 }}
                    showsVerticalScrollIndicator={false}
                    data={secondList}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => renderSecondList(item, index)}
                    ItemSeparatorComponent={() => renderSeparator()}
                />
            </View>
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

export default FirstPage;
