
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


const ItemDetail = ({ route, navigation }) => {

    console.log(route.params.item.id)
    const [userItem, setUserItem] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getUser(route.params.item.id)
        if (userItem) {
            setLoading(false)
        }
    }, [])

    function getUser(id) {
        api.get('https://gorest.co.in/public/v1/users/' + Number(id))
            .then(function (response) {
                // console.log("response", JSON.stringify(response.data))
                setLoading(false)/*  */
                setUserItem(response.data.data)
                console.warn("res", response.data.data)
            })
            .catch(function (error) {
                console.log("error", error)
                setLoading(false)
            });
    }

    return (
        // Container start
        <View >
            <ScrollView>
                <View>
                    <View >
                        {isLoading && (
                            <ActivityIndicator size="large" color="#ff0000" />
                        )}


                        {userItem &&
                            <View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                                    <Image
                                        resizeMode="cover"
                                        style={{
                                            width: 150,
                                            height: 150,
                                        }}
                                        source={{ uri: 'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg' }}
                                    />
                                </View>
                                <View style={{ marginTop: 50, marginStart: 20 }}>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 20, color: 'black', ...FONTS.h2 }}>User name :</Text>
                                        <Text style={{ fontSize: 20, color: 'black', marginStart: 15, ...FONTS.h2 }}>{userItem.name}</Text>
                                    </View>

                                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                                        <Text style={styles.bodyText}>Email :</Text>
                                        <Text style={[{ marginStart: 15 }, styles.bodyText]}>{userItem.email}</Text>
                                    </View>

                                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                                        <Text style={styles.bodyText}>Gender :</Text>
                                        <Text style={[{ marginStart: 15 }, styles.bodyText]}>{userItem.gender}</Text>
                                    </View>

                                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                                        <Text style={styles.bodyText}>Status :</Text>
                                        <Text style={[{ marginStart: 15 }, styles.bodyText]}>{userItem.status}</Text>
                                    </View>
                                </View>
                            </View>
                        }

                    </View>
                    <View style={[{
                        height: 120,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }]}>
                        <TouchableHighlight
                            style={styles.loginBtn}
                            onPress={() => {
                                // navigation.navigate('Home')
                            }}
                        >
                            <Text style={{ textAlign: 'center', color: 'white' }}>Next</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ScrollView>
        </View>


    );
};

const styles = StyleSheet.create({

    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    bodyText: {
        fontSize: 15,
        color: 'black'
    },
    loginBtn: {
        alignSelf: 'center',
        backgroundColor: '#4632A1',
        width: Dimensions.get('window').width / 1.5,
        height: 50,
        justifyContent: 'center',
        borderRadius: 100
    },

});

export default ItemDetail;
