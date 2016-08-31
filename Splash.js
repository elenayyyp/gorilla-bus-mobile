import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

class Splash extends Component {

  buttonPressed(){
    console.log('button pressed');
  }

  render(){
    return(
      <View>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.buttonPressed()}>
        <View>
          <Text>Driver</Text>
        </View>

        </TouchableHighlight>
      </View>
    )
  }
}

const styles = {
  button: {
    textAlign: 'center',
    color: '#AAA',
    border: none,
    borderRadius: 5
  }
}

export default Splash
