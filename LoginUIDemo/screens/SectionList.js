
import React, { useEffect, useState } from 'react';
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
    SectionList
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import api from '../api/api';
import { COLORS, SIZES, FONTS } from '../constants';


const SectionLists = ({ route, navigation }) => {

    let A = [
        { id: '1', value: 'ALTERED' },
        { id: '2', value: 'ABBY' },
        { id: '3', value: 'AMUCK' },
    ];

    let title = { id: '1', value: 'Title' }

    return (
        // Container start
        <View style={styles.container}>
            <SectionList
                sections={[
                    { title: title, data: A },
                    { title: title, data: A },
                    { title: title, data: A },
                ]}
                renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
                renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title.value}</Text>}
                keyExtractor={(item, index) => index}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 22,
        fontWeight: 'bold',
        color: "#fff",
        backgroundColor: '#8fb1aa',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }

});

export default SectionLists;
