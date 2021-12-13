import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TextInput, Button } from 'react-native';
// services
import Auth from '../services/auth'
import Toast from 'react-native-simple-toast';

const { width, height } = Dimensions.get('window');

export default ForgetPassword = ({ navigation }) => {

    const [email, setEmail] = useState()

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={e => setEmail(e.trim())}
            />

            <Button
                title="Forget Password"
                onPress={() => {
                    if (email)
                        Auth.forgetPassword(email)
                    else
                        Toast.show("please enter email");
                }}
            />

            <Button
                title="Back to Login"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})