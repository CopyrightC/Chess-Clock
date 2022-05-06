import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PlayScreen } from './components/PlayScreen';
import { HomeScreen } from './components/HomeScreen';
import { Settings } from './components/Settings';
import { TimeControl } from './components/timeControl';
import { NewTimeControl } from './components/NewTimeControl';

const App:React.FC = () => {

  const [screen,setScreen] = React.useState<string>("newTime");

  if(screen == 'home') {return <HomeScreen setScreen = {setScreen}/>}
  else if(screen == 'play') {return <PlayScreen/>}
  else if(screen == 'settings') {return <Settings/>}
  else if(screen == 'time') return <TimeControl/>
  else if(screen == 'newTime') return <NewTimeControl/>
}

export default App;