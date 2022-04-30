import React,{useState,useEffect} from 'react';
// import Constants from 'expo-constants';
import { HomescreenButtons } from './HomescreenButtons';
import { StyleSheet, View, Image, Dimensions,Text } from 'react-native';
import AppLoading from 'expo-app-loading';
// import useFonts from './useFonts';
import Constants from 'expo-constants';
import * as Font from 'expo-font';

export const HomeScreen = (props) => {

  const [loaded, setLoaded] = useState(false);

  const fonts = {
    'test': require('../fonts/r.ttf'),
  };

  useEffect(() => {
    (async () => {
      try {
        await Font.loadAsync(fonts);
        setLoaded(true);
      } catch (err) {
        console.log(1);
      }

    })();
  }), [fonts];

  if (!loaded) return (
    <Text>Loading...</Text>
  );

  return (
    <View style={styles.parent}> 
        <Image source={require('../images/logo.jpg')} style={styles.logo}/>     
        <HomescreenButtons text="Start Game" callback={()=>props.setScreen("play")} />
        <HomescreenButtons text="Adjust time control" callback={()=>console.log("haha")} />
        <HomescreenButtons text="Settings" callback={()=>console.log("haha")}/>
    </View>

  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    alignItems:'center',
    justifyContent : 'center',
    backgroundColor:'#FEAC12'
  },
  bg: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  logo : {
    width : '50%',
    height : '35%',
    backgroundColor : "#fff"
  }
});
