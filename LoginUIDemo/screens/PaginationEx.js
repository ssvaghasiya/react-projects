import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    Image,
} from 'react-native';

const PaginationEx = ({ route, navigation }) => {

    const [loading, setLoading] = useState(true);
    const [randomUserData, setRandomUserData] = useState([]);
    const [loadingExtraData, setLoadingExtraData] = useState(false);
    const [page, setPage] = useState(1);

    const keyExtractor = (item, index) => item.email;

    const loadRandomData = () => {
        fetch(`https://randomuser.me/api/?results=10&page=${page}`).
            then(response => response.json())
            .then(responseJson => {
                if (page === 1) {
                    setRandomUserData(responseJson.results)
                } else {
                    setRandomUserData([...randomUserData, ...responseJson.results])
                }
            }).catch(error => {
                console.log('Error selecting random data: ' + error)
            })
    }

    const renderCustomItem = ({ item, index }) => {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text>{item.gender}</Text>
                <Text>{item.name["first"]} {item.name["last"]}</Text>
                <Image source={{ uri: item.picture["medium"] }} style={{ width: 200, height: 200 }} />
            </View>
        )
    }

    const loadMoreRandomData = () => {
        setPage(page + 1)
        console.log(page)
        loadRandomData()
    }

    useEffect(() => {
        loadRandomData()
    }, [])


    return (
        <View>
            <FlatList
                data={randomUserData}
                renderItem={renderCustomItem}
                style={{ width: 350, height: 800 }}
                initialNumToRender={7}
                onEndReachedThreshold={0.3}
                onEndReached={loadMoreRandomData}
                keyExtractor={keyExtractor}
            />
        </View>
    );
};


export default PaginationEx;