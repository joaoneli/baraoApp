import React, { Component } from 'react';
import { View,Image,StyleSheet } from 'react-native';

export default class Splash extends Component{
    render(){
        return(
            <View>
                <Image 
                    style = {styles.SplashBack}
                    source={require('./files/images/Splash.jpg')}>
                </Image>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    SplashBack: {
      width: '100%',
      height: '100%'
    }
  });