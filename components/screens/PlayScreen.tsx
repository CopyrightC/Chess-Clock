import React from 'react';
import { ClockButton } from '../clockButton';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';


const PlayScreen:React.FC = () => {

  const [run, setRun] = React.useState<boolean>(true);
  const [paused,setPaused] = React.useState<boolean>(true);

  return (
    <View style={styles.container}>
      <ClockButton color={!run && !paused ? "#FEAC12" : "black"} fontc="white" prun={!run} psetRun={setRun} paused={paused}  oriColor = {"black"}/>
      <TouchableOpacity style={styles.pause} activeOpacity={1.0} onPress={()=>setPaused(!paused)}>
        {
        !paused ?
        <Text style={styles.text}>| |</Text>
        :
        <Text style={styles.text}>{`>`}</Text>
        }
      </TouchableOpacity>
      <ClockButton color={run && !paused ? "#FEAC12" : "white"} fontc="black" prun={run} psetRun={setRun} paused={paused} oriColor = {"white"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pause:{
    backgroundColor : "red",
    width : 80,
    height : 80,
    position : 'absolute',
    zIndex : 1,
    borderRadius : 50,
    alignItems : 'center',
    justifyContent : 'center',
  },
  text:{
    fontSize : 25,
  }
});

export {PlayScreen};