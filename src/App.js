//import logo from './logo.svg';
import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom';
import withSplashScreen from './components/splash-screen';

import './App.css';

function App() {
  return (
    getHomeScreen()
  );
}

function getHomeScreen() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          I have loaded
        </p>
      </header>
    </div>
  );
}

export default withSplashScreen(App);
