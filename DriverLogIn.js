import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

class DriverLogIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }

  render(){
    return(
      <View>
        <TextInput
          placeholder="Enter first name"
          onChangeText={text => this.setState({
            text
          })}
        />

        <TextInput
          placeholder="Enter last name"
          onChangeText={text => this.setState({
            text
          })}
        />
      </View>
    )
  }

}

const styles = {

}

export default DriverLogIn
