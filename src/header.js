import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Header extends Component <{}> {
    render (){
        return(
            <View style={styles.viewStyle}>
               <Text style={styles.textStyle}>Albums</Text>
            </View>    
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
      backgroundColor:'#f8f8f8',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      paddingTop: 15,
      shadowColor: '#000',
      shadowOffset: {width: 0 , height: 2},
      shadowOpacity: 0.2
    },
    textStyle: {
      fontSize: 20
    }
  });