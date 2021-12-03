
import React, { useEffect, useRef, useState } from 'react';
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
import { Checkbox } from 'react-native-paper';

const FirstPage = ({ route, navigation }) => {

    const [firstList, setFirstList] = useState([]);
    const [secondList, setSecondList] = useState([]);
    const [isUpdateList, setUpdateList] = useState(false);
    const textInput = useRef();
    const [textInputVal, setTextInputVal] = useState("")


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

    function checkThisBoxFirstList(itemID, index) {
        firstList[index].checked = !firstList[index].checked
        setFirstList(firstList)
        setUpdateList(!isUpdateList)
    }

    function checkThisBoxSecondList(itemID, index) {
        secondList[index].checked = !secondList[index].checked
        setSecondList(secondList)
        setUpdateList(!isUpdateList)

    }

    function createObj() {
        return {
            id: Number(Math.floor(Math.random() * 100)),
            name: textInputVal + Number(Math.floor(Math.random() * 100)),
            checked: true
        }
    }

    function renderFirstList(item, index) {
        return (
            <TouchableOpacity style={{ paddingHorizontal: 12, paddingVertical: 12, flex: 1, flexDirection: 'row' }}
                onPress={() => {

                }}
            >
                <Text style={{ color: 'black' }}>{item.name}</Text>
                <Checkbox
                    status={item.checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        checkThisBoxFirstList(item.id, index);
                    }}
                    color={'green'}
                    uncheckColor={'red'}
                />

            </TouchableOpacity>
        )
    }

    function renderSecondList(item, index) {

        return (
            <TouchableOpacity style={{ paddingHorizontal: 12, paddingVertical: 12, flex: 1, flexDirection: 'row' }}
                onPress={() => {

                }}
            >
                <Text style={{ color: 'black' }}>{item.name}</Text>
                <Checkbox
                    status={item.checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        checkThisBoxSecondList(item.id, index);
                    }}
                    color={'green'}
                    uncheckColor={'red'}
                />
            </TouchableOpacity>
        )
    }

    return (
        // Container start
        <View style={{ flex: 1 }} >
            <View style={{ flexDirection: 'row' }}>
                <TextInput placeholder="enter value" style={{ flex: 1, borderBottomWidth: 1 }} ref={textInput} onChangeText={(value) => setTextInputVal(value.trim())}></TextInput>
                <Button title="Add" onPress={() => {
                    if (textInputVal) {
                        textInput.current.clear()
                        secondList.push(createObj())
                        setSecondList(secondList)
                        setUpdateList(!isUpdateList)
                    }
                    console.log(secondList)
                }}></Button>
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
                        <Button title="Move Left" onPress={() => {
                            let list = secondList.filter((item) => {
                                item.checked
                            });
                            console.log(list)
                        }}></Button>
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
        </View >


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
