
import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../consts/colors';
import { PrimaryButton } from '../components/Button';

const CartScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View>
                <Text>CartScreen</Text>
            </View>
        </SafeAreaView>
    )

};

const style = StyleSheet.create({

});

export default CartScreen;