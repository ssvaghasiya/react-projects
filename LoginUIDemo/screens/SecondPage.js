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
    useWindowDimensions,
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import MasonryList from '@react-native-seoul/masonry-list';

const FirstRoute = ({ route, navigation }) => {
    const [GridListItems, SetGridListItems] = useState([
        { key: "React" },
        { key: "React Native" },
        { key: "Java" },
        { key: "Javascript" },
        { key: "PHP" },
        { key: "AJAX" },
        { key: "Android" },
        { key: "Selenium" },
        { key: "HTML" },
        { key: "Database" },
        { key: "MYSQL" },
        { key: "SQLLite" },
        { key: "Web Technology" },
        { key: "CSS" },
        { key: "Python" },
        { key: "Linux" },
        { key: "Kotlin" },
    ]);

    function GetGridViewItem(item) {
        alert(item);
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#ff4081' }} >

            <FlatList
                data={GridListItems}
                renderItem={({ item }) =>
                    <View style={styles.GridViewContainer}>
                        <Text style={styles.GridViewTextLayout} onPress={() => GetGridViewItem(item.key)} > {item.key} </Text>
                    </View>}
                numColumns={2}
            />

        </View>
    )
};



const SecondRoute = ({ route, navigation }) => {

    const randomBool = useMemo(() => Math.random() < 0.5, [])

    const data = [
        {
            id: 'id123',
            imgURL:
                'https://ii1.pepperfry.com/media/catalog/product/m/o/568x625/modern-chaise-lounger-in-grey-colour-by-dreamzz-furniture-modern-chaise-lounger-in-grey-colour-by-dr-tmnirx.jpg',
            text: 'Pioneer LHS Chaise Lounger in Grey Colour',
        },
        {
            id: 'id124',
            imgURL:
                'https://www.precedent-furniture.com/sites/precedent-furniture.com/files/styles/header_slideshow/public/3360_SL%20CR.jpg?itok=3Ltk6red',
            text: 'Precedant Furniture',
        },
        {
            id: 'id125',
            imgURL:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/leverette-fabric-queen-upholstered-platform-bed-1594829293.jpg',
            text: 'Leverette Upholstered Platform Bed',
        },
        {
            id: 'id126',
            imgURL:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/briget-side-table-1582143245.jpg?crop=1.00xw:0.770xh;0,0.129xh&resize=768:*',
            text: 'Briget Accent Table',
        },
        {
            id: 'id127',
            imgURL:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rivet-emerly-media-console-1610578756.jpg?crop=1xw:1xh;center,top&resize=768:*',
            text: 'Rivet Emerly Media Console',
        },
        {
            id: 'id128',
            imgURL:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/drew-barrymore-flower-home-petal-chair-1594829759.jpeg?crop=1xw:1xh;center,top&resize=768:*',
            text: 'Drew Barrymore Flower Home Accent Chair',
        },
        {
            id: 'id129',
            imgURL:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/goodee-ecobirdy-charlie-chairs-1594834221.jpg?crop=1xw:1xh;center,top&resize=768:*',
            text: 'Ecobirdy Charlie Chair',
        },
        {
            id: 'id130',
            imgURL:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hailey-sofa-1571430947.jpg?crop=0.481xw:0.722xh;0.252xw,0.173xh&resize=768:*',
            text: 'Hailey Sofa',
        },
        {
            id: 'id131',
            imgURL:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/archer-home-designs-dining-table-1594830125.jpg?crop=0.657xw:1.00xh;0.0986xw,0&resize=768:*',
            text: 'Farmhouse Dining Table',
        },
        {
            id: 'id132',
            imgURL:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/evelyn-coffee-table-1610578857.jpeg?crop=1xw:1xh;center,top&resize=768:*',
            text: 'Evelyn Coffee Table',
        },
        {
            id: 'id133',
            imgURL:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/burrow-nomad-sofa-1594837995.jpg?crop=1xw:1xh;center,top&resize=768:*',
            text: 'Slope Nomad Leather Sofa',
        },
        {
            id: 'id134',
            imgURL:
                'https://apicms.thestar.com.my/uploads/images/2020/02/21/570850.jpg',
            text: 'Chair and Table',
        },
        {
            id: 'id223',
            imgURL:
                'https://ii1.pepperfry.com/media/catalog/product/m/o/568x625/modern-chaise-lounger-in-grey-colour-by-dreamzz-furniture-modern-chaise-lounger-in-grey-colour-by-dr-tmnirx.jpg',
            text: 'Pioneer LHS Chaise Lounger in Grey Colour',
        },
        {
            id: 'id224',
            imgURL:
                'https://www.precedent-furniture.com/sites/precedent-furniture.com/files/styles/header_slideshow/public/3360_SL%20CR.jpg?itok=3Ltk6red',
            text: 'Precedant Furniture',
        },
        {
            id: 'id225',
            imgURL:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/leverette-fabric-queen-upholstered-platform-bed-1594829293.jpg',
            text: 'Leverette Upholstered Platform Bed',
        },
        {
            id: 'id226',
            imgURL:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/briget-side-table-1582143245.jpg?crop=1.00xw:0.770xh;0,0.129xh&resize=768:*',
            text: 'Briget Accent Table',
        },
        {
            id: 'id227',
            imgURL:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rivet-emerly-media-console-1610578756.jpg?crop=1xw:1xh;center,top&resize=768:*',
            text: 'Rivet Emerly Media Console',
        },
        {
            id: 'id228',
            imgURL:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/drew-barrymore-flower-home-petal-chair-1594829759.jpeg?crop=1xw:1xh;center,top&resize=768:*',
            text: 'Drew Barrymore Flower Home Accent Chair',
        },
        {
            id: 'id229',
            imgURL:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/goodee-ecobirdy-charlie-chairs-1594834221.jpg?crop=1xw:1xh;center,top&resize=768:*',
            text: 'Ecobirdy Charlie Chair',
        },
        {
            id: 'id230',
            imgURL:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hailey-sofa-1571430947.jpg?crop=0.481xw:0.722xh;0.252xw,0.173xh&resize=768:*',
            text: 'Hailey Sofa',
        },
        {
            id: 'id231',
            imgURL:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/archer-home-designs-dining-table-1594830125.jpg?crop=0.657xw:1.00xh;0.0986xw,0&resize=768:*',
            text: 'Farmhouse Dining Table',
        },
        {
            id: 'id232',
            imgURL:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/evelyn-coffee-table-1610578857.jpeg?crop=1xw:1xh;center,top&resize=768:*',
            text: 'Evelyn Coffee Table',
        },
        {
            id: 'id233',
            imgURL:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/burrow-nomad-sofa-1594837995.jpg?crop=1xw:1xh;center,top&resize=768:*',
            text: 'Slope Nomad Leather Sofa',
        },
        {
            id: 'id234',
            imgURL:
                'https://apicms.thestar.com.my/uploads/images/2020/02/21/570850.jpg',
            text: 'Chair and Table',
        },
    ];


    function renderItem(item) {
        return (
            <View style={{ marginTop: 12, flex: 1, margin: 10 }}>
                <Image
                    source={{ uri: item.item.imgURL }}
                    style={{
                        height: randomBool ? 150 : 280,
                        alignSelf: 'stretch',
                        borderRadius: 10,
                    }}
                    resizeMode="cover"
                />
                <Text
                    style={{
                        marginTop: 8,
                    }}>
                    {item.item.text}
                </Text>
            </View>
        )
    };




    return (

        <View style={{ flex: 1, backgroundColor: '#673ab7' }} >
            <MasonryList
                numColumns={2}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(item) => renderItem(item)}
            />
        </View>
    )
};

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});

const SecondPage = ({ route, navigation }) => {

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
    ]);

    return (
        <View style={styles.container}>
            <Text style={{ alignSelf: 'center' }}>Second Page</Text>

            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    GridViewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        margin: 5,
        backgroundColor: '#7B1FA2'
    },
    GridViewTextLayout: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        color: '#fff',
        padding: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        alignSelf: 'stretch',
    },
});

export default SecondPage;