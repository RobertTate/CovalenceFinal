import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { isLoggedIn } from './services/users';
import { createRootNavigator } from './components/navigator';




export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
    }
  }

  componentDidMount() {
    if (isLoggedIn()) {
      this.setState({ signedIn: true })
    }
  }

  render() {
    
    const Layout = createRootNavigator(this.state.signedIn);
    return <Layout />
  }
}

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
