import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class CardSection extends Component <{}> {

    render (props) {
        return (
            <View style={styles.containerStyle}>
            {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        borderBottomWidth:1,
        padding:5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
    }
});
