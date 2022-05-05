/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
} from 'react-native';
import { useState, useEffect, useContext, createContext, useRef } from "react";
import CardView from 'react-native-cardview'

const OtpInputs = (props) => {

    const otpTextInput = [];
    const [otp, setOTP] = useState([])
    const [number, setNumber] = useState(["", "", "", ""])

    useEffect(() => {
        otpTextInput[0].focus();
    }, [])

    const renderInputs = () => {
        const inputs = Array(4).fill(0);
        const txt = inputs.map(
            (i, j) => <CardView
                key={j}
                style={styles.txtMargin}
                cardElevation={8}
                cardMaxElevation={8}
                cornerRadius={5}>
                <View >
                    <TextInput
                        style={[styles.inputRadius, { borderRadius: 10, width: 44, height: 44, backgroundColor: 'white' }]}
                        keyboardType="numeric"
                        onChangeText={v => {
                            number[j] = v
                            focusNext(j, v)
                        }}
                        maxLength={1}
                        onKeyPress={e => focusPrevious(e.nativeEvent.key, j)}
                        ref={ref => {
                            otpTextInput[j] = ref;
                        }}
                    />
                </View>
            </CardView>
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
        props.getOtp(otp.join(''));
        // console.log("OTP", JSON.stringify(number));
    }

    return (
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
            {renderInputs()}
        </View>
    );
};


const styles = StyleSheet.create({
    gridPad: { padding: 25 },
    txtMargin: { margin: 8 },
    inputRadius: { textAlign: 'center' }
});

export default OtpInputs;
