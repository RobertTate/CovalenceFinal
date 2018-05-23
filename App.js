import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { isLoggedIn } from './services/users';
import { createRootNavigator } from './components/navigator';




export default class App extends Component {

  constructor(props) {
    super(props);

<<<<<<< HEAD
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
=======
    this.state = {
      signedIn: false,
>>>>>>> 6928fa9793dd87df6ac44f5631c0170f3cda473e
    }
  }
}


  componentDidMount() {
    if (isLoggedIn()) {
      this.setState({ signedIn: true })
    }
  }

<<<<<<< HEAD


=======
  render() {
    
    const Layout = createRootNavigator(this.state.signedIn);
    return <Layout />
  }
}
>>>>>>> 6928fa9793dd87df6ac44f5631c0170f3cda473e

// if (isLoggedIn()) {
//   return (
//     <Navigator />
//   )
// } else {
//   return (
//     <SplashScreen />
//   )
// }
// }


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
