/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

const getMoviesFromApi = () => {
  console.log('Fetch API Call');

  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: "Abhi",
      OS: "Android"
    })
  };

  fetch('https://reactnative.dev/movies.json', requestOptions)
    .then((response) => response.json())
    .then((json) => {
      console.log('Fetch API Response', json.movies);
      console.log('Fetch API Response', json.title);
      console.log('Fetch API Response', json.description);
    })
    .catch((error) => {
      console.error(error);
    });
}

const postUser = () => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408' },
    body: JSON.stringify({
      email: "abhitesting@gmail.com",
      name: "Abhi",
      gender: 'male',
      status: 'active'
    })
  };

  fetch('https://gorest.co.in/public/v1/users', requestOptions)
    .then((response) => response.json())
    .then((json) => {
      console.log('Fetch API Response', json.data);
    })
    .catch((error) => {
      console.error(error);
    });

}


const getUser = () => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408' },
  };

  fetch('https://gorest.co.in/public/v1/users', requestOptions)
    .then((response) => response.json())
    .then((json) => {
      console.log('Fetch API Response', json.data);
    })
    .catch((error) => {
      console.error(error);
    });

}

const updateUser = () => {

  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408' },
    body: JSON.stringify({
      email: "abhitester@gmail.com",
      name: "Abhi Rai",
      gender: 'male',
      status: 'inactive'
    })
  };

  fetch('https://gorest.co.in/public/v1/users/1896', requestOptions)
    .then((response) => response.json())
    .then((json) => {
      console.log('Fetch API Response', json.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

const deleteUser = () => {
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408' },
  };

  fetch('https://gorest.co.in/public/v1/users/1896', requestOptions)
    .then(response => response.ok)
    .catch((error) => {
      console.error(error);
    });


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
      </View>

      <View style={{ margin: 10, marginTop: 20, padding: 20, marginHorizontal: 16 }} >
        <Button
          title='Get: Get UserList'
          onPress={() => getUser()}
        />
      </View>

      <View style={{ margin: 10, marginTop: 20, padding: 20, marginHorizontal: 16 }} >
        <Button
          title='PUT / PATCH: Update user'
          onPress={() => updateUser()}
        />
      </View>

      <View style={{ margin: 10, marginTop: 20, padding: 20, marginHorizontal: 16 }} >
        <Button
          title='Delete: Delete user'
          onPress={() => deleteUser()}
        />
      </View>
    </View>
  );
};



export default App;
