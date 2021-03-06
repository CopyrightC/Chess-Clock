import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import { LabelTime } from '../time/label';

//custom hook
import { KeyboardState } from '../hook/keyboardListener';

const NewTimeControl:React.FC = () => {

  //checks if keyboard is open or not
  let isKeyBoardOpen:boolean = KeyboardState();

  //states
  const [hour,setHour] = React.useState<string>("0");
  const [mins,setMins] = React.useState<string>("0");
  const [secs,setSecs] = React.useState<string>("0");
  const [increment,setIncrement] = React.useState<string>("0");


  /*
  If keyboard is closed and if any of the states are single digit numbers, then add a 0
  at the start of it.
  9 -> 09
  also if any of the values are empty strings then change the value to "00"
  */

  if(!isKeyBoardOpen){
    if(hour.length == 1){
      setHour(`0${hour}`)
    }

    if(mins.length == 1){
      setMins(`0${mins}`)
    }

    if(secs.length == 1){
      setSecs(`0${secs}`)
    }
    if(increment.length == 1){
      setIncrement(`0${increment}`)
    }

    if(!hour){setHour("0");}
    if(!mins){setMins("0");}
    if(!secs){setSecs("0");}
    if(!increment){setIncrement("0");}
  }

  //Time format interface
  interface TimeType {
    hours: string;
    minutes : string;
    seconds : string;
    increment : string;
    gameType : string;
  }

  /*
  Save data to local storage;
  Storage format : 
  {
    'hours,mins,secs,increment' : {hours : hours_here, minutes : mins_here, seconds : secs_here, increment : increment_here}
    ...
    (this key format helps in encoutering duplicate values)
  }
  */

  const saveData = async (h:string,m:string,s:string) => {

    try{
      let customGameType:string;
      let totalTime:number = parseInt(mins) + parseInt(hour)*60;
      let gameIndex:number;
      //games type determination; check timeInfo.txt for more info
      //for total mins -
      if(totalTime >= 50){customGameType = "classical"; gameIndex = 3;}
      else if(totalTime >= 8){customGameType = "rapid"; gameIndex = 2;}
      else if(totalTime >= 3) {customGameType = "blitz"; gameIndex = 1;}
      else if(totalTime >= 0) {customGameType = "bullet"; gameIndex = 0;}

      //change on basis of increment - 
      if(parseInt(increment) >= 60){
        if(gameIndex < 3) {
         if(gameIndex == 2) {gameIndex++;}
         else gameIndex+=2;
        }
      }

      else if(parseInt(increment) >= 15){
        if(gameIndex !== 3) {gameIndex++;}
      }


      const dataStored: TimeType = {
        hours : hour,
        minutes : mins,
        seconds : secs,
        increment : increment,
        gameType : customGameType,
      }

      //fetch data from localstorage add new data and then save back.

      let prevData = await AsyncStorage.getItem("times");
      if(prevData == null) {prevData = "{}";}

      prevData = JSON.parse(prevData);
      prevData[`${h},${m},${s},${increment}`] = dataStored;
      prevData  = JSON.stringify(prevData);

      await AsyncStorage.setItem("times",prevData);
      console.log(prevData);
      alert("New time control saved!")
    }

    catch(err){
      alert(err);
    }
  }

  /*
  Checks for valid chars - 
  Allows only number and alerts if any other char is entered;
  */

  const checkForValidChars = (text:string):string => {
    let numbers:string = '0123456789';
    let newNumber:string = '';
    for(let i:number = 0; i < text.length; i++){
      if(numbers.indexOf(text[i]) > -1){
        newNumber += text[i];
      }
      else{
        alert("Please enter numbers only!");
      }
    }
    return newNumber;
  }

  //custom functions for changing values, also checks for valid chars and value ranges.
  const changeHours = (text:string) =>{
    let newNumber:string = checkForValidChars(text)
    setHour(newNumber);
  }

  const changeMins = (text:string) =>{
    let newNumber:string = checkForValidChars(text)
    if(parseInt(newNumber) > 59){newNumber = '59';}
    setMins(newNumber);
  }

  const changeSecs = (text:string) =>{
    let newNumber:string = checkForValidChars(text)
    if(parseInt(newNumber) > 59){newNumber = '59';}
    setSecs(newNumber);
  }

  const changeInc = (text:string) =>{
    let newNumber:string = checkForValidChars(text)
    setIncrement(newNumber);
  }

  return (

    <View style={styles.parent}>
        {!isKeyBoardOpen ?
          //render header only if the keyboard is closed
          <Text style={styles.text}>New Time Control</Text>
          :
          <></>
        }
        <View style={styles.timeLabels}>

          <LabelTime label="Hours" value={hour} changeValue={changeHours}/>
          <LabelTime label="Minutes" value={mins} changeValue={changeMins}/>
          <LabelTime label="Seconds" value={secs} changeValue={changeSecs}/>
          <LabelTime label="Increment" value={increment} changeValue={changeInc} maxLength={3}/>

          <TouchableOpacity style={styles.saveButton} activeOpacity={1.0} onPress={()=>saveData(hour,mins,secs)}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>

        </View>
    </View>

  )
}

//style
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
      top : 70,
      borderRadius : 7,
      alignItems : 'center',
      justifyContent : 'center',
    },
    label :{
      color : "#000",
      fontSize : 20,
      fontWeight : "bold",
      fontFamily :"roboto",
    },

    timeLabels : {
      flex : 1,
      justifyContent : 'center',
      marginBottom : 80,
    },

    row : {
      flexDirection : "row",
      alignItems :"center",
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