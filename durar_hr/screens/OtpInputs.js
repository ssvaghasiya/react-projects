/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions,
    ImageBackground,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TextInput,
    Image,
    Modal,
    Button,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { useState, useEffect, useContext, createContext, useRef } from "react";
import Toast from 'react-native-simple-toast';

const OtpInputs = ({ route, navigation }) => {

    const otpTextInput = [];
    const [otp, setOTP] = useState([])
    const [number, setNumber] = useState(["", "", "", "", "", ""])
    const [numberOutput, setNumberOutput] = useState([])
    const [currentIndex, setCurrentIndex] = useState("")

    useEffect(() => {
        otpTextInput[0].focus();
    }, [])

    const renderInputs = () => {
        const inputs = Array(6).fill(0);
        const txt = inputs.map(
            (i, j) => <View key={j} style={styles.txtMargin}><View >
                <TextInput
                    value={numberOutput[j]}
                    style={[styles.inputRadius, { borderRadius: 10, width: 50, height: 50, backgroundColor: 'white' }]}
                    keyboardType="numeric"
                    onChangeText={v => {
                        // if (currentIndex != j || j == 0) {
                        //     console.log("OTP", currentIndex + " - " + j);
                        //     setCurrentIndex(j)
                        //     number[j] = v[v.length - 1]
                        //     focusNext(j, v)
                        // } else {
                        //     number[j] = v[v.length - 2]
                        //     focusNext(j, v)
                        // }

                        console.log("length", v.length);
                        if (v.length > 1) {
                            focusNext(j, v)
                        } else {
                            const otpData = number;
                            otpData[j] = v;
                            setNumber(otpData);
                            // number[j] = v
                            numberOutput[j] = v
                            focusNext(j, v)
                        }
                    }}
                    onKeyPress={e => focusPrevious(e.nativeEvent.key, j)}
                    ref={ref => {
                        otpTextInput[j] = ref;
                    }}
                />
            </View></View>
        );
        return txt;
    }

    function focusPrevious(key, index) {
        if (key === 'Backspace' && index !== 0 && number[index].length == 0) {
            otpTextInput[index - 1].focus();
        }
    }

    function focusNext(index, value) {
        if (index < otpTextInput.length - 1 && value) {
            otpTextInput[index + 1].focus();
        }
        if (index === otpTextInput.length - 1 && number[index].length != 0) {
            otpTextInput[index].blur();
        }
        const otpData = otp;
        otpData[index] = value;
        setOTP(otpData);
        // console.log("OTP", JSON.stringify(number));
    }

    return (
        <View style={{ flexDirection: 'row' }}>
            {renderInputs()}
        </View>
    );
};


const styles = StyleSheet.create({
    gridPad: { padding: 30 },
    txtMargin: { margin: 3 },
    inputRadius: { textAlign: 'center' }
});

export default OtpInputs;
