import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PlayScreen } from './components/PlayScreen';
import { HomeScreen } from './components/HomeScreen';

const App:React.FC = () => {
  const [screen,setScreen] = React.useState<string>("home");
  if(screen == 'home') {return <HomeScreen setScreen = {setScreen}/>}
  else if(screen == 'play') {return <PlayScreen/>}
}

export default App;