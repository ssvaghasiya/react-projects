import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';

class Profile extends Component {


    constructor(props) {
        super()
        console.log(props.route.params)
    }

    render() {
        return (
            <View>
                <Text>Profile Component</Text>
            </View>
        )
    }
}


export default Profile;