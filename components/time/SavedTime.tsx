import React from 'react'
import {StyleSheet,Text,TouchableOpacity,Image,ImageSourcePropType} from 'react-native';

interface Props {
    image : ImageSourcePropType,
    text : string,
}

const SavedTime:React.FC<Props> = ({
    image,
    text,
}) => {
  return (
    <TouchableOpacity activeOpacity={1.0} style={styles.button}>
        <Image source={image} style={styles.timeIcon}/>
        <Text style={styles.timeText}>{`${text}`}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button : {
        width : 310,
        height : 170,
        backgroundColor : '#638c0c',
        borderRadius : 7,
        marginBottom : 20,
    },
    timeText : {
        fontSize : 30,
        fontFamily : 'roboto',
        marginTop : 10,
        textAlign : 'center',
    },
    timeIcon : {
        width : 70,
        height : 70,
        alignSelf : 'center',
        marginTop : 10,
    }
})

export {SavedTime};