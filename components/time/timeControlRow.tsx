import React, { useEffect } from 'react'
import {View,TouchableOpacity,Text,StyleSheet,Image,ScrollView} from 'react-native';
import { SavedTime } from './SavedTime';

interface props{
    data : string;
    indexes : number[];
}

const TimeControlRow:React.FC<props> = ({
        data,
        indexes
    }) => {
    
    const images = {
        bullet : require("../../images/bullet.png"),
        rapid : require("../../images/rapid.png"),
        blitz : require("../../images/blitz.png"),
        classical : require("../../images/classical.png")
    }
    data = JSON.parse(data);
    let dataKeys = Object.keys(data);
    let mapKey:number[] = [];

    for(let i:number = 0; i < dataKeys.length;++i){
        mapKey.push(i);
    }
    try{
        return(
            <>
            {
                indexes.map((i)=>{
                    let timeFormat = data[dataKeys[i]];
                    return <SavedTime text={`${timeFormat["hours"]}:${timeFormat["minutes"]}:${timeFormat["seconds"]} + ${timeFormat["increment"]}`} image={images[timeFormat["gameType"]]} key={i}/>
                })
            }
            </>
        )
    }
    catch{
        console.log("recdeived");
        
        return <></>
    }
}

const styles = StyleSheet.create({
    row :{
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginTop : 15,
    },
})

export {TimeControlRow};