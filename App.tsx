import React from 'react';
import { PlayScreen } from './components/screens/PlayScreen';
import { HomeScreen } from './components/screens/HomeScreen';
import { Settings } from './components/screens/Settings';
import { TimeControl } from './components/screens/timeControl';
import { NewTimeControl } from './components/screens/NewTimeControl';
import { SavedControls } from './components/screens/SavedControls';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App:React.FC = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
         <Stack.Screen
          name="Profile"
          component={PlayScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Settings"
          component={Settings}
        />
         <Stack.Screen
          name="Time Controls"
          component={TimeControl}
        />
          <Stack.Screen
          name="Saved Time Controls"
          component={SavedControls}
        />
          <Stack.Screen
          name="New Time Control"
          component={NewTimeControl}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;