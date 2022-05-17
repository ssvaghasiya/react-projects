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
    Button,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useState, useEffect, useContext, createContext } from "react";
import { connect } from 'react-redux';
import { changeCount } from './reduxStore/actions/counts';
import { bindActionCreators } from 'redux';
import HeaderContainer from '../container/HeaderContainer';

const Home = (props) => {

    const [count, setCount] = useState(0);

    const decrementCount = () => {
        setCount(count - 1)
        props.changeCounter(count - 1)
    }

    const incrementCount = () => {
        setCount(count + 1)
        props.changeCounter(count + 1)
    }

    return (
        <SafeAreaView >
            <View styles={styles.container}>
                <Button
                    title="increment"
                    onPress={() => {
                        incrementCount()
                    }}
                />
                <Text>{count}</Text>
                <Button
                    title="decrement"
                    onPress={() => {
                        decrementCount()
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default Home