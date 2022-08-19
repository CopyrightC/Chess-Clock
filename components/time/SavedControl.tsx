import React from 'react'
import {StyleSheet,Text,TouchableOpacity,Image,ImageSourcePropType} from 'react-native';

interface Props {
    image : ImageSourcePropType,
    deleteImage?:ImageSourcePropType,
    text : string,
    deleteSelf?:React.Dispatch<React.SetStateAction<boolean>>;
}

function SavedControl({
    image, text, deleteImage, deleteSelf
}) {

    return (
        <TouchableOpacity activeOpacity={1.0} style={styles.button}>
            <Image source={image} style={styles.timeIcon} />
            <Text style={styles.timeText}>{`${text}`}</Text>
            <TouchableOpacity activeOpacity={1.0} style={styles.delete}
                onPress={() => deleteImage ? deleteSelf(true) : {}} //respond only if image prop was passed
            >
                <Image source={deleteImage} style={styles.deleteIcon} />
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button : {
        width : 310,
        height : 170,
        backgroundColor : '#638c0c',
        borderRadius : 7,
        marginBottom : 20,
        justifyContent:'center'
    },
    delete: {
        // backgroundColor:'red',
        width:50,
        height:50,
        position:'absolute',
        right:20,
        top:20,
        borderRadius:5,
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
    },
    deleteIcon:{
        width : 50,
        height : 50,
    }
})

export {SavedControl};