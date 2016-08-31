import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

class Splash extends Component {

  buttonPressed(type){
    console.log(`${type} button pressed`);
  }

  render(){
    return(
      <View>
        <TouchableHighlight
          style={styles.button}
          onPress={(driver) => this.buttonPressed(driver)}>
            <View>
              <Text>Driver</Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={(passenger) => this.buttonPressed(passenger)}>
            <View>
              <Text>Passenger</Text>
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
