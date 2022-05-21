import React, { useEffect, useState } from 'react'
import {View,TouchableOpacity,Text,StyleSheet,Image,ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import { SavedTime } from '../time/SavedTime';
import { TimeControlRow } from '../time/timeControlRow';

const SavedControls:React.FC = () => {
  

  //images for SavedTime components
  const images = {
      bullet : require("../../images/bullet.png"),
      rapid : require("../../images/rapid.png"),
      blitz : require("../../images/blitz.png"),
      classical : require("../../images/classical.png")
  }

  const [timeControls,setTimeControls] = useState<string>("{}");
  const [buttonIndexes,setButtonIndexes] = useState<number[]>([]);

  //get timeControls from AsyncStorage
  const getTimeControls = async()=>{
    let prevData = await AsyncStorage.getItem("times");
    console.log("prev",prevData)
    setTimeControls(prevData);
  }

  //on render get the data from AsyncStorage
  useEffect(
    ()=>{getTimeControls()}
  ,[])
  

  useEffect(()=>{
    try{
        let jsonControls = JSON.parse(timeControls);
        let indexes:number[] = [];
        for(let i:number = 0; i < Object.keys(jsonControls).length; i++){
            indexes.push(i);
        }
        setButtonIndexes(indexes)
    }
    catch{}
  },[timeControls])

  return (
    <ScrollView style={styles.parent}>
        <Text style={styles.text}>Saved Time Controls</Text>
        <View style={styles.buttonsParent}>
            <SavedTime text="1 + 0" image={images.bullet}/>
            <SavedTime text="3 + 0" image={images.blitz}/>
            <SavedTime text="10 + 0" image={images.rapid}/>
            <SavedTime text="90 + 0" image={images.classical}/>
            {   
                buttonIndexes.map((i) =>{
                    return <TimeControlRow key={i} data={timeControls} index={i}/>
                })
            }
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    parent : {
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor:'#FEAC12',
        flex : 1,
    },
    text : {
        fontSize : 35,
        marginTop : 10,
        fontFamily:'test',
        textAlign : 'center',
    },
    row :{
        marginTop : 15,
    },
    buttonsParent : {
        padding : 25,
        marginBottom:10,
        alignItems : 'center',
    }
})

export {SavedControls};