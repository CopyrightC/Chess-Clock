import React from 'react';
import { PlayScreen } from './components/screens/PlayScreen';
import { HomeScreen } from './components/screens/HomeScreen';
import { Settings } from './components/screens/Settings';
import { TimeControl } from './components/screens/timeControl';
import { NewTimeControl } from './components/screens/NewTimeControl';
import { SavedControls } from './components/screens/SavedControls';

const App:React.FC = () => {

  const [screen,setScreen] = React.useState<string>("play"); 

  if(screen == 'home') {return <HomeScreen setScreen = {setScreen}/>}
  else if(screen == 'play') {return <PlayScreen/>}
  else if(screen == 'settings') {return <Settings/>}
  else if(screen == 'time') return <TimeControl/>
  else if(screen == 'newTime') return <NewTimeControl/>
  else if(screen == 'saved') return <SavedControls/>
}

export default App;