
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

    const currentTrack = TRACKS[selectedTrack];

    console.log({ currentTrack })

    return (
        <>
            {/* <StatusBar translucent /> */}

            <View style={styles.container}>
                <AlbumCover albumcover={currentTrack.albumArtUrl} />
                <AlbumDetails trackName={currentTrack.title} artistName={currentTrack.artist} />
                <Controls />
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
