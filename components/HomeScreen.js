import React from 'react';
import Constants from 'expo-constants';
import { HomescreenButtons } from './HomescreenButtons';
import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native';

export const HomeScreen = () => {
  return (
    <View style={styles.parent}>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80'
        }}
        style={styles.bg}
      >
        <HomescreenButtons text="Start Game" />
        <HomescreenButtons text="Adjust time control" />
        <HomescreenButtons text="Settings" />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  bg: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  }
});
