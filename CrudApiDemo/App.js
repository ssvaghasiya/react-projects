/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import axios from 'axios';
import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

const postUser = () => {
  axios({
    method: 'POST',
    url: 'https://gorest.co.in/public/v1/users',
    data: {
      email: 'abcdefg@gmail.com',
      name: 'Cody Info',
      gender: 'Male',
      status: 'Active'
    },
    headers: {
      'Authorization': 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(function (response) {
    console.log("response", JSON.stringify(response.data))
  }).catch(function (error) {
    console.log("error", error)
  })
}

const getUser = () => {
  axios({
    method: 'get',
    url: 'https://gorest.co.in/public/v1/users/1853',
    headers: {
      "Authorization": "Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408",
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(function (response) {
      console.log("response", JSON.stringify(response.data))
    })
    .catch(function (error) {
      console.log("error", error)
    })
}

const updateUser = () => {
  axios({
    method: 'PUT',
    url: 'https://gorest.co.in/public/v1/users/1853',
    data: {
      email: "hello@gmail.com",
      name: "Abhishek Rai",
      gender: 'Male',
      status: 'active'
    },
    headers: {
      "Authorization": "Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408",
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(function (response) {
      console.log("response", JSON.stringify(response.data))
    })
    .catch(function (error) {
      console.log("error", error)
    })
}

const deleteUser = () => {
  axios({
    method: 'DELETE',
    url: 'https://reqres.in/api/users/2',
  })
    .then(function (response) {
      console.log("response", JSON.stringify(response.data))
    })
    .catch(function (error) {
      console.log("error", error)
    })
}


const App: () => Node = () => {

  return (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 10, margin: 10 }}>Axios Networking API for your networking library/Data.
        API Credit: GoRest https://gorest.co.in</Text>
      <View style={{ margin: 10, marginTop: 50, padding: 20, marginHorizontal: 16 }} >
        <Button
          title='POST: Create User'
          onPress={() => postUser()}
        />

        <View style={{ margin: 10, marginTop: 20, padding: 20, marginHorizontal: 16 }} >
          <Button
            title='Get: Get UserList'
            onPress={() => getUser()}
          />
        </View>

        <View style={{ margin: 10, marginTop: 20, padding: 20, marginHorizontal: 16 }} >
          <Button
            title='PUT Update user '
            onPress={() => updateUser()}
          />
        </View>


        <View style={{ margin: 10, marginTop: 20, padding: 20, marginHorizontal: 16 }} >
          <Button
            title='Delete Update user '
            onPress={() => deleteUser()}
          />
        </View>
      </View>
    </View>
  );
};



export default App;
