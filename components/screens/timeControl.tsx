import React from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

const TimeControl:React.FC = ({navigation}) => {

  return (
    <View style={styles.parent}>
        <Text style={styles.text}>Time Control</Text>
        <View style={styles.buttonsView}>
            <TouchableOpacity activeOpacity={1.0} style={styles.button} onPress={()=>navigation.navigate('Saved Time Controls')}>
                <Text style={styles.btnText}>Saved Time Controls</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} activeOpacity={1.0} onPress={()=>navigation.navigate('New Time Control')}>
                <Text style={styles.btnText}>New Time Control</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} activeOpacity={1.0}>
                <Text style={styles.btnText}>Time Odds</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
  
}

const styles = StyleSheet.create({
    parent : {
        paddingTop: Constants.statusBarHeight + 20,
        alignItems :'center',
        backgroundColor:'#FEAC12',
        flex : 1,
    },
    text : {
        fontSize : 40,
        fontFamily:'test',
        textAlign : 'center',
    },

    buttonsView: {
        flex : 1,
        justifyContent : 'center',
        marginBottom : 30,
    },

    button :{
        width : 300,
        height : 80,
        marginTop : 30,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : "#1c302d",
        borderRadius : 8,
    },
    btnText :{
        color : "white",
        fontSize : 20,
        fontWeight : "bold",
        fontFamily :"roboto",
    },

})

export {TimeControl};