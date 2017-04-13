import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignupForm from './components/SignupForm';
import SigninForm from './components/SigninForm';
import secrets from './secrets';

class App extends React.Component {
  
  componentDidMount() {
     const config = {
      apiKey: secrets.apiKey,
      authDomain: secrets.authDomain,
      databaseURL: secrets.databaseURL,
      projectId: secrets.projectId,
      storageBucket: secrets.storageBucket,
      messagingSenderId: secrets.messagingSenderId
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
