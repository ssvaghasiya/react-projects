
import React, { useState } from 'react';
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
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
// services
import Auth from '../services/auth';
import Toast from 'react-native-simple-toast';

const Register = ({ route, navigation }) => {
    console.log(route.params)
    const { itemId, otherParam } = route.params;
    const [userName, setUserName] = useState()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function isValidate() {
        if (userName && email && password) {
            return true
        }
        return false
    }

    return (
        // Container start
        <ScrollView
            style={{ flex: 1, backgroundColor: "#ffffff" }}
            showsVerticalScrollIndicator={false}
        >
            <ImageBackground source={require('../images/login_bg.jpg')}
                style={{
                    height: Dimensions.get('window').height / 2.5,
                    flex: 1, justifyContent: "center", alignItems: "center"
                }}>
                <Text style={{ textAlign: 'center', fontSize: 30, color: 'white', fontWeight: 'bold', marginBottom: 50 }}>Register Screen</Text>
            </ImageBackground>

            {/* Bottom View */}
            <View style={styles.bottomView}>

                {/* Welcome View */}

                <View style={{ padding: 40 }}>
                    <Text style={{ color: '#4632A1', fontSize: 34 }}>Welcome</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text >Already have an account?

                        </Text>
                        <TouchableOpacity
                            style={{ marginStart: 5 }}
                            onPress={() => {
                                navigation.goBack()
                            }}>
                            <Text style={{ color: 'red', fontStyle: 'italic', }}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Form input view */}

                    <View style={{ marginTop: 50 }}>

                        <View>
                            <Text style={{ fontWeight: 'bold', color: 'black' }}>User Name</Text>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput placeholder="enter your name"
                                    style={{ flex: 1, borderBottomWidth: 1.0 }} returnKeyType="next"
                                    onChangeText={(value) => setUserName(value.trim())}
                                ></TextInput>
                                <Icon name='rocket' size={20} color="#4632A1" />
                            </View>
                        </View>


                        <View>
                            <Text style={{ fontWeight: 'bold', color: 'black', marginTop: 10 }}>Email</Text>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput placeholder="enter your email"
                                    keyboardType="email-address" style={{ flex: 1, borderBottomWidth: 1.0 }} returnKeyType="next"
                                    onChangeText={(value) => setEmail(value.trim())}></TextInput>
                                <Icon name='rocket' size={20} color="#4632A1" />
                            </View>
                        </View>

                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontWeight: 'bold', color: 'black' }}>Password</Text>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput secureTextEntry={true} placeholder="enter your password" style={{ flex: 1, borderBottomWidth: 1.0 }} returnKeyType="done"
                                    onChangeText={(value) => setPassword(value.trim())}></TextInput>
                                <Icon name="eye" size={20} color="#4632A1" />
                            </View>
                        </View>

                    </View>

                    <View style={{
                        height: 120,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <TouchableHighlight
                            style={styles.loginBtn}
                            onPress={() => {
                                if (isValidate()) {
                                    Auth.signUp(userName, email, password)
                                } else {
                                    Toast.show("please enter username, email and password");
                                }
                            }}
                        >
                            <Text style={{ textAlign: 'center', color: 'white' }}>Register</Text>
                        </TouchableHighlight>
                    </View>




                </View>

            </View>

        </ScrollView>

    );
};

const styles = StyleSheet.create({
    bottomView: {
        flex: 1.5,
        backgroundColor: '#ffffff',
        bottom: 50,
        borderTopStartRadius: 40,
        borderTopEndRadius: 40
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

export default Register;
