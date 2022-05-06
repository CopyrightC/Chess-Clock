import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,TextInput} from 'react-native';
import Constants from 'expo-constants';
import { LabelTime } from './label';



const NewTimeControl:React.FC = () => {

  const [hour,setHour] = React.useState<string>("0");
  const [mins,setMins] = React.useState<string>("0");
  const [secs,setSecs] = React.useState<string>("0");

  const changeHours = (text:string) =>{
    let numbers:string = '0123456789';
    let newNumber = '';
    for(let i:number = 0; i < text.length; i++){
      if(numbers.indexOf(text[i]) > -1){
        newNumber += text[i];
      }
      else{
        alert("Please enter numbers only!");
      }
    }
    setHour(newNumber);
  }

  const changeMins = (text:string) =>{
    let numbers:string = '0123456789';
    let newNumber = '';
    for(let i:number = 0; i < text.length; i++){
      if(numbers.indexOf(text[i]) > -1){
        newNumber += text[i];
      }
      else{
        alert("Please enter numbers only!");
      }
    }
    if(parseInt(newNumber) > 59){newNumber = '59';}
    setMins(newNumber);
  }

  const changeSecs = (text:string) =>{
    let numbers:string = '0123456789';
    let newNumber = '';
    for(let i:number = 0; i < text.length; i++){
      if(numbers.indexOf(text[i]) > -1){
        newNumber += text[i];
      }
      else{
        alert("Please enter numbers only!");
      }
    }
    if(parseInt(newNumber) > 59){newNumber = '59';}
    setSecs(newNumber);
  }

  return (
    <View style={styles.parent}>
        <Text style={styles.text}>New Time Control</Text>
        <View style={styles.timeLabels}>
          <LabelTime label="Hours" value={hour} changeValue={changeHours}/>
          <LabelTime label="Minutes" value={mins} changeValue={changeMins}/>
          <LabelTime label="Seconds" value={secs} changeValue={changeSecs}/>

          <TouchableOpacity style={styles.saveButton} activeOpacity={1.0}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    parent : {
      paddingTop: Constants.statusBarHeight + 20,
      backgroundColor:'#FEAC12',
      flex : 1,
    },
    saveText : {
      color:'#fff',
      fontSize : 30,
      fontFamily : 'roboto'
    },

    text : {
      fontSize : 35,
      marginTop : 10,
      fontFamily:'test',
      textAlign : 'center',
    },
    saveButton : {
      width:300,
      height:80,
      backgroundColor: '#332323',
      alignSelf : 'center',
      top : 100,
      borderRadius : 7,
      alignItems : 'center',
      justifyContent : 'center',
    },
    label :{
      color : "#000",
      fontSize : 20,
      fontWeight : "bold",
      fontFamily :"roboto",
      // backgroundColor : "red",
    },

    timeLabels : {
      flex : 1,
      justifyContent : 'center',
      marginBottom : 100,
    },

    row : {
      flexDirection : "row",
      alignItems :"center",
      // marginTop : 30,
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

export {NewTimeControl};