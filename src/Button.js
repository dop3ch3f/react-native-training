import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';


export default class Button extends Component <{}> {

    render () {
        return (
           <TouchableOpacity onPress={ () => console.log('Pressed') } style={styles.buttonStyle}>
               <Text style={styles.textStyle}>Click Me</Text>
           </TouchableOpacity> 
           
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10,
    }

});