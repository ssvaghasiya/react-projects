
import React, { useState, useRef } from 'react';
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
import Toast from 'react-native-simple-toast';
// services
import Auth from '../services/auth';

const Login = ({ navigation }) => {

    const ref_input2 = useRef();
    let data = { email: "anuj@gmail.com", password: '123456789', }
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function isValidate() {
        if (email && password) {
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

                <Text style={{ textAlign: 'center', fontSize: 30, color: 'white', fontWeight: 'bold', marginBottom: 50 }}>Login Screen</Text>
            </ImageBackground>

            {/* Bottom View */}
            <View style={styles.bottomView}>

                {/* Welcome View */}

                <View style={{ padding: 40 }}>
                    <Text style={{ color: '#4632A1', fontSize: 34 }}>Welcome</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text >Don't have an account?

                        </Text>
                        <TouchableOpacity
                            style={{ marginStart: 5 }}
                            onPress={() => {
                                navigation.navigate('Register', { email: email, password: password, })
                            }}>
                            <Text style={{ color: 'red', fontStyle: 'italic', }}>Register now</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Form input view */}

                    <View style={{ marginTop: 50 }}>
                        <View>
                            <Text style={{ fontWeight: 'bold', color: 'black' }}>Email</Text>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput
                                    placeholder="enter your email"
                                    keyboardType="email-address"
                                    style={{ flex: 1, borderBottomWidth: 1.0 }}
                                    returnKeyType="next"
                                    onChangeText={(value) => setEmail(value.trim())}
                                    onSubmitEditing={() => ref_input2.current.focus()}
                                ></TextInput>
                                <Icon name='rocket' size={20} color="#4632A1" />
                            </View>
                        </View>

                        <View style={{ marginTop: 10, }}>
                            <Text style={{ fontWeight: 'bold', color: 'black' }}>Password</Text>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput
                                    secureTextEntry={true}
                                    placeholder="enter your password"
                                    style={{ flex: 1, borderBottomWidth: 1.0 }}
                                    returnKeyType="done"
                                    onChangeText={(value) => setPassword(value.trim())}
                                    ref={ref_input2}
                                ></TextInput>
                                <Icon name="eye" size={20} color="#4632A1" />
                            </View>
                        </View>

                        <View style={{ marginTop: 15, alignSelf: 'flex-end' }}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('ForgetPassword')
                                }}
                            >
                                <Text style={{ color: 'black' }}>Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <TouchableHighlight
                            style={styles.loginBtn}
                            onPress={() => {
                                if (isValidate()) {
                                    Auth.signIn(email, password)
                                } else {
                                    Toast.show("please enter email and password");
                                }
                                // navigation.navigate('Home')
                                /* navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'Home', params: { email: email, password: password, } }],
                                }); */
                            }}
                        >
                            <Text style={{ textAlign: 'center', color: 'white' }}>Login</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={styles.loginBtn}
                            onPress={() => {
                                Auth.googleLogin()
                            }}
                        >
                            <Text style={{ textAlign: 'center', color: 'white' }}>Google Sign In</Text>
                        </TouchableHighlight>


                        <TouchableHighlight
                            style={styles.loginBtn}
                            onPress={() => {
                                Auth.facebookSignIn()
                            }}
                        >
                            <Text style={{ textAlign: 'center', color: 'white' }}>Facebook Sign In</Text>
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
        borderRadius: 100,
        marginTop: 40
    },
    button: {
        width: 300,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        borderRadius: 10
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default Login;
