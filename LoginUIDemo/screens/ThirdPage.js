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
    SafeAreaView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import api from '../api/api';

const ThirdPage = ({ route, navigation }) => {

    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        getPhotosList()
        if (data) {
            setLoading(false)
        }
        return () => {

        }
    }, [])

    function getPhotosList() {
        api.get('https://jsonplaceholder.typicode.com/photos')
            .then(function (response) {
                /* const newData = response.data.map(newItem => {
                    return {
                        ...newItem,
                        selected: false
                    }
                }) */
                setData(response.data)
            })
            .catch(function (error) {
                console.log("error", error)
                setLoading(false)
            })
            .finally(() => {
                setLoading(false)
            });
    }

    const onChangeValue = (item, index) => {
        const newData = data.map(newItem => {
            if (newItem.id == item.id) {
                return {
                    ...newItem,
                    selected: !newItem.selected
                }
            }

            return {
                ...newItem,
                selected: newItem.selected
            }
        })
        setData(newData)
    }

    function renderData(item, index) {

        return (
            <View style={styles.item}>
                <Image
                    style={styles.image}
                    source={{ uri: item.url }}
                    resizeMode='cover'
                ></Image>
                <View style={styles.wrapText}>
                    <Text>{item.title},{item.selected}</Text>
                    <CheckBox
                        style={styles.ckItem}
                        disabled={false}
                        value={item.selected}
                        onAnimationType='fill'
                        offAnimationType='fade'
                        onCheckColor='#000'
                        boxType='square'
                        onValueChange={() => onChangeValue(item, index)}
                    >

                    </CheckBox>
                </View>
            </View>
        )
    }

    const onShowItemSelected = () => {
        const listSelected = data.filter(item => item.selected == true);
        let contentAlert = '';
        listSelected.forEach(item => {
            contentAlert = contentAlert + " " + item.id + " " + item.title + " " + '\n';
        })
        alert(contentAlert)
    }

    return (
        // Container start
        <SafeAreaView style={styles.container}>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    style={styles.list}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => renderData(item, index)}
                />
            )}


            <View style={styles.wrapButton}>
                <TouchableOpacity style={styles.button}
                    onPress={() => onShowItemSelected()}
                >
                    <Text>Show item you selected</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>


    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    list: {
        flex: 1,
        padding: 8
    },

    wrapButton: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        padding: 16,
        backgroundColor: 'orange',
    },
    item: {
        flexDirection: 'row',
        marginTop: 8,
        padding: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0, height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5

    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3
    },
    wrapText: {
        flex: 1,
        marginTop: 16,
        marginLeft: 8,
    },
    ckItem: {
        width: 20,
        height: 20,
        marginTop: 5
    },
});

export default ThirdPage;