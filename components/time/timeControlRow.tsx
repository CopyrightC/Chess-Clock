import React from 'react'
import { SavedTime } from './SavedTime';

interface props{
    data : string;
    index : number;
}

const TimeControlRow:React.FC<props> = ({
        data,
        index
    }) => {
    
    const images = {
        bullet : require("../../images/bullet.png"),
        rapid : require("../../images/rapid.png"),
        blitz : require("../../images/blitz.png"),
        classical : require("../../images/classical.png")
    }

    data = JSON.parse(data);
    let dataKeys:string[] = Object.keys(data);

    let timeFormat = data[dataKeys[index]];
    return <SavedTime text={`${timeFormat["hours"]}:${timeFormat["minutes"]}:${timeFormat["seconds"]} + ${timeFormat["increment"]}`} image={images[timeFormat["gameType"]]} key={index}/>
}

export {TimeControlRow};