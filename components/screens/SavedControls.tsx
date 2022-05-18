import React from 'react'
import {View,TouchableOpacity,Text,StyleSheet,Image,ScrollView} from 'react-native';
import Constants from 'expo-constants';
import { SavedTime } from '../time/SavedTime';

const SavedControls:React.FC = () => {

  const images = {
      bullet : require("../../images/bullet.png"),
      rapid : require("../../images/rapid.png"),
      blitz : require("../../images/blitz.png"),
      classical : require("../../images/classical.png")
  }

  return (
    <ScrollView style={styles.parent}>
        <Text style={styles.text}>Saved Time Controls</Text>
        <View style={styles.buttonsParent}>
            <View style={styles.row}>
                 <SavedTime text="10 + 0" image={images.bullet}/>
                 <SavedTime text="10 + 0" image={images.blitz}/>
            </View>
            <View style={styles.row}>
                 <SavedTime text="10 + 0" image={images.rapid}/>
                 <SavedTime text="90 + 0" image={images.classical}/>
            </View>
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
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginTop : 15,
    },
    buttonsParent : {
        padding : 25,
    }
})

export {SavedControls};