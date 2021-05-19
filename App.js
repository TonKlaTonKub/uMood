import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ReactNavigator from './navigation/ReactNavigator'
import Main from './screen/Main'
import Profile from './screen/Profile'


const App = () => {
  //return <ReactNavigator/>
  return <Profile/>
}

export default App
