import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator, Modal } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { CustomProgressBar } from './CustomProgressBar';




export default function SignupScreen({ navigation }) {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [image, setImage] = useState(null)
    const [showNext, setShowNext] = useState(false)
    const [loading, setLoading] = useState(false)


    const userSignup = async () => {
        setLoading(true)
        if (!email || !password || !image || !name) {
            alert("please add all the field")
            return
        }
        try {
            const result = await auth().createUserWithEmailAndPassword(email, password)
            firestore().collection('users').doc(result.user.uid).set({
                name: name,
                email: result.user.email,
                uid: result.user.uid,
                pic: image,
                status: "online"
            })
            setLoading(false)
        } catch (err) {
            alert("something went wrong")
        }


    }

    const pickImageAndUpload = () => {
        launchImageLibrary({ quality: 0.5 }, (fileobj) => {
            // const { uri } = fileobj.uri;
            console.log(fileobj.assets)
            console.log(fileobj.assets[0].uri)
            const filename = fileobj.assets[0].uri.substring(fileobj.assets[0].uri.lastIndexOf('/') + 1);

            const uploadTask = storage().ref().child(`/userprofile/${Date.now()}${filename}`).putFile(fileobj.assets[0].uri)
            uploadTask.on('state_changed',
                (snapshot) => {

                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    if (progress == 100) {
                        alert('image uploaded')
                    }

                },
                (error) => {
                    alert("error uploading image")
                },
                () => {
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        setImage(downloadURL)
                    });
                }
            );
        })
    }

    return (
        <>
            {loading ?
                <CustomProgressBar /> :
                < KeyboardAvoidingView behavior='position' style={{ flex: 1, justifyContent: 'center' }
                }>
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
                                    onPress={() => pickImageAndUpload()}
                                >Select profile picture</Button>
                                <Button
                                    mode='contained'
                                    onPress={() => userSignup()}
                                    disabled={image ? false : true}
                                >Signup</Button>
                            </>
                            :
                            <Button
                                mode='contained'
                                onPress={() => setShowNext(true)}
                            >Next</Button>
                        }

                        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={{ textAlign: "center" }}>Already have an account ?</Text></TouchableOpacity>
                    </View>
                </KeyboardAvoidingView >
            }
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