import React from 'react';
import { TimerButton } from './button';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
export const PlayScreen = () => {
  const [run, setRun] = React.useState(true);
  React.useEffect(() => {
    // console.log('h');
    // console.log(run);
  });
  return (
    <View style={styles.container}>
      <TimerButton color="black" fontc="white" prun={!run} psetRun={setRun} />
      <TimerButton color="white" fontc="black" prun={run} psetRun={setRun} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
