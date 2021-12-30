
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import AlbumCover from './AlbumCover';
import AlbumDetails from './AlbumDetails';
import Controls from './Controls';
import Video from 'react-native-video';

const TRACKS = [
    {
        title: 'Believer',
        artist: 'Imagine Dragons',
        albumArtUrl: 'https://i.ytimg.com/vi/7wtfhZwyrcc/maxresdefault.jpg',
        audioUrl:
            'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3',
    },
    {
        title: 'Senorita',
        artist: 'shawn mendes & camila cabello',
        albumArtUrl:
            'https://i1.sndcdn.com/artworks-000596770541-fw6dow-t500x500.jpg',
        audioUrl:
            'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3',
    },
    {
        title: 'Despacito',
        artist: 'Drake',
        albumArtUrl: 'https://i.ytimg.com/vi/kJQP7kiw5Fk/maxresdefault.jpg',
        audioUrl:
            'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3',
    },
];


const AudioPlayer = ({ navigation }) => {

    const [selectedTrack, setSelectedTrack] = useState(0);

    const [pause, setPause] = useState(false);

    const currentTrack = TRACKS[selectedTrack];

    console.log({ currentTrack })

    function togglePlayPauseBtn() {
        setPause(!pause)
    }

    function playNextSong() {
        if (selectedTrack === TRACKS.length - 1)
            setSelectedTrack(0)
        else
            setSelectedTrack(selectedTrack + 1)

    }

    function playPrevSong() {
        if (selectedTrack === 0)
            setSelectedTrack(TRACKS.length - 1)
        else
            setSelectedTrack(selectedTrack - 1)
    }

    return (
        <>
            {/* <StatusBar translucent /> */}

            <View style={styles.container}>
                <AlbumCover albumcover={currentTrack.albumArtUrl} />
                <AlbumDetails trackName={currentTrack.title} artistName={currentTrack.artist} />
                <Controls {...{ togglePlayPauseBtn }} {...{ pause }} {...{ playNextSong }} {...{ playPrevSong }} />

                <Video
                    source={{ uri: currentTrack.audioUrl }}
                    paused={pause}
                    audioOnly
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#111436',
        flex: 1,
    },
});

export default AudioPlayer;
