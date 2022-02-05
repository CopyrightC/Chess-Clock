import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
export const HomescreenButtons = (props) => {
  return (
    <TouchableOpacity style={styles.btns}>
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btns: {
    width: 350,
    height: 35,
    alignItems: 'flex-start',
    paddingLeft: 5,
    justifyContent: 'center',
    backgroundColor: '#fcb103',
    marginTop: 3,
    marginLeft: 6
  }
});
