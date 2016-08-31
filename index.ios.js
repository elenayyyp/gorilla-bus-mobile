import React, { Component } from 'react';

import { AppRegistry, Navigator, StyleSheet } from 'react-native';

// import MainComponent from './Main';
import gorillabus from './Main';


// class gorillabus extends Component {

  // renderScene(route, navigator) {
  //   const Component = route.component;
  //   return <Component navigator={navigator} {...route} />
  // }

  // render(){
  //   return (
  //     <Navigator
  //       initialRoute={{component: MainComponent}}
  //       renderScene={ (route, navigator) => this.renderScene(route, navigator) }
  //       style={styles.container}
  //     />
  //   );
  // }

// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   }
// });

AppRegistry.registerComponent('gorillabus', () => gorillabus);
