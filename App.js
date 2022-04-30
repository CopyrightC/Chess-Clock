import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PlayScreen } from './components/PlayScreen';
import { HomeScreen } from './components/HomeScreen';
export default function App() {

  const [screen,setScreen] = React.useState("home");
  if(screen == 'home') {return <HomeScreen setScreen = {setScreen}/>}
  else if(screen == 'play') {return <PlayScreen/>}
}
