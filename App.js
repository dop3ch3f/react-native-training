import Header from './src/header';
import AlbumList from './src/AlbumList';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';



export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <AlbumList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
