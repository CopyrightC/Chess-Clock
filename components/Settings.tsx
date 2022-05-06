import React from 'react'
import {Text,View,StyleSheet} from 'react-native';
import Constants from 'expo-constants';
const Settings:React.FC = () => {
  return (
    <View style={styles.parent}>
        <Text style={styles.text}>Settings</Text>
        <Text>Change color on tap</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    parent : {
        paddingTop: Constants.statusBarHeight + 20, 
        paddingLeft : 20,
        backgroundColor:'#FEAC12',
        flex : 1,
    },
    text : {
        fontSize : 40,
        fontFamily:'test',
        textAlign : 'center',
    }
})


export {Settings};