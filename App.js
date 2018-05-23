import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { isLoggedIn } from './services/users';
import MapScreen from './screens/mapscreen';
import SplashScreen from './screens/splashscreen';


export default class App extends Component {


  render() {
    if (isLoggedIn()) {
      return (
        <MapScreen />
      )
    } else {
      return (
        <View>
          <SplashScreen />
          <MapScreen />
        </View>
      )
    }
  }
}











// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
