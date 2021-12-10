import React, { useEffect, useMemo, useState, useCallback } from 'react';
import {
    StyleSheet,
    View,
    PermissionsAndroid,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const Map = ({ route, navigation }) => {

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    useEffect(() => {
        if (Platform.OS === 'android') {
            requestLocationPermission()
        } else {
            getGeoLocaation()
        }
    }, [])

    async function requestLocationPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'Location Permission',
                    'message': 'MyMapApp needs access to your location'
                }
            )

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("Location permission granted")
                getGeoLocaation()
            } else {
                console.log("Location permission denied")
            }
        } catch (err) {
            console.warn(err)
        }
    }

    const getGeoLocaation = () => {
        const config = {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 3600000,
        };

        Geolocation.getCurrentPosition(
            info => {
                // console.log("INFO", info)
                console.log("INFO", info.coords.latitude + " " + info.coords.longitude)
                setLatitude(info.coords.latitude)
                setLongitude(info.coords.longitude)
            },
            error => console.log("ERROR", error),
            config,
        );
    };


    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                zoomEnabled={true}
                region={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onRegionChangeComplete={region => {
                    console.log("region", region)
                    /* setLatitude(region.latitude)
                    setLongitude(region.longitude) */
                }}
            >
                <Marker
                    coordinate={{ latitude: latitude, longitude: longitude }}
                    title={"title"}
                    description={"test"}
                />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        width: '100%',
        height: '100%',
    }
});


export default Map;