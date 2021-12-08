import React, { useEffect, useMemo, useState, useCallback } from 'react';
import {
    StyleSheet,
    Dimensions,
    ImageBackground,
    ScrollView,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    TouchableOpacity,
    FlatList,
    Image,
    ActivityIndicator,
    SafeAreaView,
} from 'react-native';

const funccount = new Set();

const UseCallBackDemo = ({ route, navigation }) => {

    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0)

    const incrementCounter = useCallback(() => {
        setCount(count + 1)
    }, [count])
    const decrementCounter = useCallback(() => {
        setCount(count - 1)
    }, [count])
    const incrementNumber = useCallback(() => {
        setNumber(number + 1)
    }, [number])

    funccount.add(incrementCounter);
    funccount.add(decrementCounter);
    funccount.add(incrementNumber);
    alert(funccount.size);

    return (
        // Container start
        <SafeAreaView style={styles.container}>
            <Text>Count: {count}</Text>
            <Button title="Increase counter" onPress={incrementCounter} />
            <Button title="Decrease Counter" onPress={decrementCounter} />
            <Button title="increase number" onPress={incrementNumber} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
});

export default UseCallBackDemo;