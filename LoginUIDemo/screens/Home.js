
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
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import api from '../api/api';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';

const Home = ({ route, navigation }) => {

    const [userData, setUserData] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getUser()
        if (userData.length > 0) {
            setLoading(false)
        }
    }, [])


    function getUser() {
        api.get('https://gorest.co.in/public/v1/users')
            .then(function (response) {
                // console.log("response", JSON.stringify(response.data))
                setLoading(false)
                setUserData(response.data.data)
                // console.warn("res", response.data.data)
            })
            .catch(function (error) {
                console.log("error", error)
                setLoading(false)
            });
    }

    function postUser() {

        api.post('https://gorest.co.in/public/v1/users', {
            email: 'abcdefg@gmail.com',
            name: 'Cody Info',
            gender: 'Male',
            status: 'Active'
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

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
        alert(item.key);
    }

    function renderUserData(item, index) {
        return (
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', margin: 15 }}
                onPress={() => {
                    console.log("renderUserData")
                    navigation.navigate('ItemDetail', { item })
                }}
            >


                <View style={[{
                    flex: 1,
                    borderRadius: 0,
                    paddingLeft: 12,
                    paddingRight: 12,
                    paddingBottom: 12,
                }, styles.shadow]}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={{ uri: 'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg' }}
                            resizeMode="cover"
                            style={{
                                width: 130,
                                height: 100,
                            }}
                        />
                    </View>

                    <View style={{ flex: 1.5, marginLeft: 10, justifyContent: 'center', marginTop: 12 }}>
                        <Text style={{ color: 'black', fontSize: 20 }}>name: {item.name}</Text>
                        <Text style={{ fontSize: 15 }}>email: {item.email}</Text>
                        <Text style={{ fontSize: 15 }}>gender: {item.gender}</Text>
                        <Text style={{ fontSize: 15 }}>status: {item.status}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }



    return (
        // Container start
        /*    <View >
               <ScrollView>
                   <View>
                       <Image
                           resizeMode="contain"
                           style={{
                               width: 200,
                               height: 200,
                           }}
                           source={{ uri: 'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg' }}
                       />
                       <FlatList
                           nestedScrollEnabled={false}
                           data={[
                               { key: 'Android' }, { key: 'iOS' }, { key: 'Java' }, { key: 'Swift' },
                               { key: 'Php' }, { key: 'Hadoop' }, { key: 'Sap' },
                               { key: 'Python' }, { key: 'Ajax' }, { key: 'C++' },
                               { key: 'Ruby' }, { key: 'Rails' }, { key: '.Net' },
                               { key: 'Perl' }, { key: 'Sap' }, { key: 'Python' },
                               { key: 'Ajax' }, { key: 'C++' }, { key: 'Ruby' },
                               { key: 'Rails' }, { key: '.Net' }, { key: 'Perl' }
                           ]}
                           renderItem={({ item }) =>
                               <Text style={styles.item}
                                   onPress={() => getListViewItem(item)}>{item.key}</Text>}
                           ItemSeparatorComponent={() => renderSeparator()}
                       />
   
                        {userData.length > 0 ?
                           <View>
                               {
                                   userData.map((item) =>
                                       <Text>{item.email}</Text>
                                   )
                               }
                           </View> : <Text>data is loading...</Text>}
   
   
                      
                   </View>
               </ScrollView>
           </View> */

        <View style={{ flex: 1 }} >
            {isLoading && (
                <ActivityIndicator size="large" color="#ff0000" />
            )}
            <Video
                source={{ uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4' }}        // the video file
                paused={false}                  // make it start    
                style={styles.backgroundVideo}  // any style you want
                repeat={true}                   // make it a loop
                resizeMode="cover"

            />
            <View style={{ flex: 1, paddingBottom: 14 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={userData}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => renderUserData(item, index)}
                />

            </View>

            <TouchableHighlight
                style={[{}, styles.loginBtn]}
                onPress={() => {
                    navigation.navigate('Temp')
                }}
            >
                <Text style={{ textAlign: 'center', color: 'white' }}>Explore</Text>
            </TouchableHighlight>

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

    loginBtn: {
        alignSelf: 'center',
        backgroundColor: '#4632A1',
        width: Dimensions.get('window').width / 1.5,
        height: 50,
        justifyContent: 'center',
        borderRadius: 100,
        marginBottom: 10
    },

    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});

export default Home;
