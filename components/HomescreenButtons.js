import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export const HomescreenButtons = (props) => {
  // Chess-Clock/assets/fonts/serpentine.ttf
  // if (!fontsLoaded) return <Text>HAHA</Text>

  return (
    <TouchableOpacity style={styles.btns} onPress={()=>console.log("nciencei")} activeOpacity={1.0}>
      <Text style={{fontFamily:'test',fontSize:30}}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btns: {
    width: '90%',
    height: '18%',
    alignItems: 'center',
    paddingLeft: 5,
    justifyContent: 'center',
    backgroundColor: '#d3bc14',
    marginTop: 15,
    borderRadius:5,
  }
});
