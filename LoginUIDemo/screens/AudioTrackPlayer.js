
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import AntDesign from 'react-native-vector-icons/AntDesign'
//import the hook provided by react-native-track-player to manage the progress
import { useProgress } from 'react-native-track-player/lib/hooks';
//import statement for slider
import Slider from '@react-native-community/slider';



const tracks = [
    {
        id: '1',
        url:
            'https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3',
        type: 'default',
        title: 'My Title 1',
        album: 'My Album 1',
        artist: 'Rohan Bhatia 1',
        artwork: 'https://picsum.photos/100',
    },
    {
        id: '2',
        url:
            'https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3',
        type: 'default',
        title: 'My Title 2',
        album: 'My Album 2',
        artist: 'Rohan Bhatia 2',
        artwork: 'https://picsum.photos/100',
    },
    {
        id: '3',
        url:
            'https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3',
        type: 'default',
        title: 'My Title 3',
        album: 'My Album 3',
        artist: 'Rohan Bhatia 3',
        artwork: 'https://picsum.photos/100',
    }
];

const trackPlayerInit = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add(tracks);
    return true;
};


TrackPlayer.updateOptions({
    stopWithApp: false,
    capabilities: [TrackPlayer.play, TrackPlayer.pause, TrackPlayer.skipToNext, TrackPlayer.skipToPrevious],
    compactCapabilities: [
        TrackPlayer.play,
        TrackPlayer.pause,
        TrackPlayer.skipToNext,
        TrackPlayer.skipToPrevious
    ],
});

const AudioTrackPlayer = ({ navigation }) => {

    const [isPlaying, setIsPlaying] = useState(false);

    const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);

    //the value of the slider should be between 0 and 1
    const [sliderValue, setSliderValue] = useState(0);

    //flag to check whether the use is sliding the seekbar or not
    const [isSeeking, setIsSeeking] = useState(false);


    //useTrackPlayerProgress is a hook which provides the current position and duration of the track player.
    //These values will update every 250ms 
    const { position, duration } = useProgress(250);



    useEffect(() => {

        const startPlayer = async () => {
            let isInit = await trackPlayerInit();
            setIsTrackPlayerInit(isInit);
        }
        startPlayer();

        return () => TrackPlayer.destroy();

    }, []);

    //this hook updates the value of the slider whenever the current position of the song changes
    useEffect(() => {
        if (!isSeeking && position && duration) {
            setSliderValue(position / duration);
        }
    }, [position, duration]);

    function togglePlayPauseBtn() {
        if (!isPlaying) {
            TrackPlayer.play();
            setIsPlaying(true);
        } else {
            TrackPlayer.pause();
            setIsPlaying(false);
        }
    }

    //this function is called when the user starts to slide the seekbar
    const slidingStarted = () => {
        setIsSeeking(true);
    };

    //this function is called when the user stops sliding the seekbar
    const slidingCompleted = async value => {
        await TrackPlayer.seekTo(value * duration);
        setSliderValue(value);
        setIsSeeking(false);
    };

    return (
        <>
            {/* <StatusBar barStyle='light-content' /> */}

            <View style={styles.container}>
                <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
                    <AntDesign name='banckward' size={30} color="white"></AntDesign>
                </TouchableOpacity>

                {!isPlaying ?
                    <TouchableOpacity style={styles.playpause}
                        onPress={() => togglePlayPauseBtn()}
                    >
                        <AntDesign name='playcircleo' size={30} color="#111436"></AntDesign>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.playpause}
                        onPress={() => togglePlayPauseBtn()}
                    >
                        <AntDesign name='pausecircleo' size={30} color="#111436"></AntDesign>
                    </TouchableOpacity>
                }

                <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
                    <AntDesign name='forward' size={30} color="white"></AntDesign>
                </TouchableOpacity>


            </View>
            <Slider
                style={{ width: 400, height: 40 }}
                minimumValue={0}
                maximumValue={1}
                value={sliderValue}
                minimumTrackTintColor="#111000"
                maximumTrackTintColor="#000000"
                onSlidingStart={slidingStarted}
                onSlidingComplete={slidingCompleted}
            />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#111436'
    },
    playpause: {
        width: 120,
        height: 120,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        borderWidth: 20,
        borderColor: '#1B1246',
        margin: 20
    },
});

export default AudioTrackPlayer;
