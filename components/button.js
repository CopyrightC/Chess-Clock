import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
export const TimerButton = (props) => {
  alert(props.mins);
  return (
    <View style={{ ...styles.timerButton, backgroundColor: `${props.color}` }}>
      <TouchableWithoutFeedback>
        <Text style={styles.timeText}>54:00</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  timerButton: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timeText: {
    color: '#fff',
    fontSize: 60
  }
});
