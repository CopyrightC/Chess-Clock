import React from 'react';
import { TimerButton } from './button';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
export const PlayScreen = () => {
  const [mins, setMins] = React.useState(6);
  const [secs, setSecs] = React.useState(1);
  // setInterval(() => {
  //   setSecs(secs - 1);
  //   if (secs == 0) {
  //     setMins(mins - 1);
  //     setSecs(60);
  //   }
  //   if (secs == 60) {
  //     setSecs(secs - 1);
  //   }
  // }, 1000);
  return (
    <View style={styles.container}>
      {/* <TimerButton color="red" mins={mins} secs={secs} /> */}
      {/* <TimerButton color="blue" mins={mins} secs={secs} /> */}
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
