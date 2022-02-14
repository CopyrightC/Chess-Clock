import React from 'react';
import { TimerButton } from './button';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
export const PlayScreen = () => {
  const [hrs, setHrs] = React.useState(0);
  const [mins, setMins] = React.useState(10);
  const [secs, setSecs] = React.useState(10);
  const decreaseTime = () => {
    if (hrs == 0 && mins == 0 && secs == 0);
    else if (mins == 0 && secs == 0) {
      setHrs(hrs - 1);
    } else if (secs == 0) {
      if (parseInt(mins) === 10) {
        setMins(`09`);
      } else {
        setMins(mins - 1);
      }
      setSecs(59);
    } else {
      if (parseInt(secs) < 10) {
        if (!secs.toString().startsWith('0') || secs == '0') {
          setSecs(`0${parseInt(secs)}`);
        }
        if (secs.toString().startsWith('0')) {
          setSecs(`0${parseInt(secs) - 1}`);
        }
      } else {
        if (parseInt(secs) === 10) {
          setSecs(`09`);
        } else {
          setSecs(secs - 1);
        }
      }
    }
    if (mins < 10) {
      if (!mins.toString().startsWith('0') || mins == '0') {
        setMins(`0${mins}`);
      }
    }
  };
  React.useEffect(() => {
    const timerId = setInterval(() => decreaseTime(), 1000);
    return () => clearInterval(timerId);
  });
  return (
    <View style={styles.container}>
      <TimerButton color="black" fontc="white" h={hrs} m={mins} s={secs} />
      <TimerButton color="white" fontc="black" h={hrs} m={mins} s={secs} />
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
