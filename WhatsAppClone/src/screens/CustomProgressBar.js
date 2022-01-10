import React from 'react'
import { View, Text, Image, StyleSheet, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator, Modal } from 'react-native'


export const CustomProgressBar = ({ visible }) => (
    <Modal onRequestClose={() => null} visible={visible}>
        <View style={{ flex: 1, backgroundColor: '#dcdcdc', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ borderRadius: 10, backgroundColor: 'white', padding: 25 }}>
                <Text style={{ fontSize: 20, fontWeight: '200', color: 'black' }}>Loading</Text>
                <ActivityIndicator size="large" color="#00ff00" style={{ marginTop: 16 }} />
            </View>
        </View>
    </Modal>
);
