import React, { useEffect, useMemo, useState } from 'react';
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

const UseMemoDemo = ({ route, navigation }) => {

    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);

    const multiCountMemo = useMemo(function multiCount() {
        console.warn('multiCount')
        return count * 5
    }, [count])
    return (
        // Container start
        <SafeAreaView style={styles.container}>
            <Text>Count: {count}</Text>
            <Text>Item: {item}</Text>
            <Text> {multiCountMemo}</Text>
            <Button title="Update count" onPress={() => {
                setCount(count + 1)
            }} />

            <Button title="Update item" onPress={() => {
                setItem(item + 1)
            }} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
});

export default UseMemoDemo;