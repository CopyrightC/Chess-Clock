import React from 'react'
import {View,TextInput,Text,StyleSheet} from 'react-native';

interface Props{
  value:string,
  changeValue : React.Dispatch<React.SetStateAction<string>>,
  label : string,
}

const LabelTime:React.FC<Props> = ({
    value,
    changeValue,
    label
  }) => {
  return (
    <View style={styles.row}>
        <Text style={styles.label}>{label}</Text>
        <TextInput 
        style={styles.textInput}
        keyboardType='numeric'
        onChangeText={(text:string)=> changeValue(text)}
        value={value}
        maxLength={2}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  label :{
    color : "#000",
    fontSize : 20,
    fontWeight : "bold",
    fontFamily :"roboto",
  },
  row : {
    flexDirection : "row",
    alignItems :"center",
    marginTop : 30,
    justifyContent : 'space-around',
  },
  textInput:{
    backgroundColor : 'white',
    width : 100,
    textAlign : 'center',
    fontFamily : 'roboto',
    fontWeight : 'bold',
    fontSize : 25,
    borderRadius : 5,
    height:50,
  }
})

export {LabelTime};