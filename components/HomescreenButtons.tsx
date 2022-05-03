import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props{
  text : string;
  callback : () => void;
}

const HomescreenButtons:React.FC<Props> = ({
    text,
    callback
  }) => {

  return (
    <TouchableOpacity style={styles.btns} onPress={()=>callback()} activeOpacity={1.0}>
      <Text style={{fontFamily:'test',fontSize:30,color:"#DFCCCF"}}>{text}</Text>
    </TouchableOpacity>
  );

};

const styles = StyleSheet.create({
  btns: {
    width: '90%',
    height: '16%',
    alignItems: 'center',
    paddingLeft: 5,
    justifyContent: 'center',
    backgroundColor: '#332323',
    marginTop: 15,
    borderRadius:5,
    shadowColor : "#fff",
    shadowOffset : {
      width : 20,
      height : 20,
    },
    shadowOpacity : 1,
  }
});

export {HomescreenButtons};