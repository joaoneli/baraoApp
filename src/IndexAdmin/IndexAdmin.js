import React, { Component } from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';

export default class IndexAdmin extends Component{
    render(){
        return(
            <View>
            <View style={styles.Header}>
                <Image 
                    style = {styles.menuThumb}
                    source={require('../../files/images/ThumbExemploMenu.jpg')}>
                </Image>
            </View>
            <View style = {styles.Container}>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    Header:{
        backgroundColor:'green',
        height: 65,
        padding:5,
    },
    Container: {
        flex:1,
        backgroundColor:'#c2c2a3',
    },
    menuThumb:{
        height:55,
        width:55,
        borderRadius:45,
        alignSelf: 'flex-end',
    },
  });