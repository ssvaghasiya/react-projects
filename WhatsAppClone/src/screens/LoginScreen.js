import React, { useState } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator, Image } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import auth from '@react-native-firebase/auth'
import { CustomProgressBar } from './CustomProgressBar'

export default function LoginScreen({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const userLogin = async () => {
        setLoading(true)
        if (!email || !password) {
            alert("please add all the field")
            return
        }
        try {
            const result = await auth().signInWithEmailAndPassword(email, password)
            setLoading(false)
        } catch (err) {
            alert("something went wrong")
        }


    }

    return (
        <>{loading ?
            <CustomProgressBar />
            :
            <KeyboardAvoidingView behavior="position" style={{ flex: 1, justifyContent: 'center' }}>
                <View style={styles.box1}>
                    <Text style={styles.text}>Welcome to Whatsapp</Text>
                    <Image style={styles.img} source={require('../assets/wa.png')} />
                </View>
                <View style={styles.box2}>

                    <TextInput
                        label="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        mode="outlined"
                    />
                    <TextInput
                        label="password"
                        mode="outlined"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                    />
                    <Button
                        mode="contained"
                        onPress={() => userLogin()}
                    >Login</Button>
                    <TouchableOpacity onPress={() => navigation.navigate('signup')}><Text style={{ textAlign: "center" }}>Dont have an account ?</Text></TouchableOpacity>

                </View>
            </KeyboardAvoidingView>}

        </>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 22,
        color: "green",
        margin: 10
    },
    img: {
        width: 200,
        height: 200
    },
    box1: {
        alignItems: "center"
    },
    box2: {
        paddingHorizontal: 40,
        justifyContent: "space-evenly",
        height: "50%"
    }
});