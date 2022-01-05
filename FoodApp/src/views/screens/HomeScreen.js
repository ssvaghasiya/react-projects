
import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../consts/colors';
import { PrimaryButton } from '../components/Button';

const HomeScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
         <View>
             <Text>HomeScreen</Text>
         </View>
        </SafeAreaView>
    )

};

const style = StyleSheet.create({
    
});

export default HomeScreen;