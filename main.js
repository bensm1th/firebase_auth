import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignupForm from './components/SignupForm';
import SigninForm from './components/SigninForm';

class App extends React.Component {
  
  componentDidMount() {
     const config = {
      apiKey: "AIzaSyBz9rhSOa5R1c_udMMxvF-9-DpsjFZ9Q9Q",
      authDomain: "one-time-password-ce89b.firebaseapp.com",
      databaseURL: "https://one-time-password-ce89b.firebaseio.com",
      projectId: "one-time-password-ce89b",
      storageBucket: "one-time-password-ce89b.appspot.com",
      messagingSenderId: "148738243163"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Sign up </Text>
        <SignupForm />
        <Text> Sign in </Text>
        <SigninForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

Expo.registerRootComponent(App);
