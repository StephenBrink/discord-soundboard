//import logo from './logo.svg';
import React, {Component, Fragment} from 'react';
import { Button, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import {Route} from 'react-router-dom';
import withSplashScreen from './components/splash-screen';

import './App.css';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
});

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          {getHomeScreen()}
          {getSoundboardButtons()}
        </header>
      </div>
    );
  }
}

function getSoundboardButtons(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => console.log('Button was pressed')}>
      <Image source={require("./assets/cat.png")}/>
    </TouchableOpacity>
  );
}

function getHomeScreen() {
  return (
    <p> I have loaded </p>
  );
}

export default withSplashScreen(App);
