import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

export default function SignupScreen() {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [image, setImage] = useState(null)
    const [showNext, setShowNext] = useState(false)

    return (
        <KeyboardAvoidingView behavior='position' style={{ flex: 1, justifyContent: 'center' }}>
            <View style={styles.box1}>
                <Text style={styles.text}>Welcome to Whatsapp</Text>
                <Image style={styles.img} source={require('../assets/wa.png')} />
            </View>
            <View style={styles.box2}>
                {!showNext &&
                    <>
                        <TextInput
                            label="Email"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            mode="outlined"
                        />
                        <TextInput
                            label="Password"
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            mode="outlined"
                            secureTextEntry
                        />
                    </>
                }

                {showNext ?
                    <>
                        <TextInput
                            label="Name"
                            value={name}
                            onChangeText={(text) => setName(text)}
                            mode="outlined"
                        />
                        <Button
                            mode='contained'
                            onPress={() => { }}
                        >Select profile picture</Button>
                        <Button
                            mode='contained'
                            onPress={() => {}}
                        >Signup</Button>
                    </>
                    :
                    <Button
                        mode='contained'
                        onPress={() => setShowNext(true)}
                    >Next</Button>
                }



            </View>
        </KeyboardAvoidingView>
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