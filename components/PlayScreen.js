import React from 'react';
import { TimerButton } from './button';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
export const PlayScreen = () => {
  const [[hrs, mins, secs], setTime] = React.useState([1, 0, 5]);
  const decreaseTime = () => {
    if (hrs === 0 && mins === 0 && secs === 0) alert('Over!');
    else if (mins == 0 && secs == 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
    if (mins < 10) {
      if (!mins.toString().startsWith('0') || mins == '0') {
        setTime([hrs, `0${mins}`, secs]);
      }
    }
  };
  React.useEffect(() => {
    const timerId = setInterval(() => decreaseTime(), 1000);
    return () => clearInterval(timerId);
  });
  return (
    <View style={styles.container}>
      <TimerButton color="red" h={hrs} m={mins} s={secs} />
      <TimerButton color="blue" h={hrs} m={mins} s={secs} />
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
