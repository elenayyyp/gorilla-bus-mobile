import React, { Component } from 'react';

import {
  Text,
  View
} from 'react-native';

class ShuttleInfo extends Component {
  constructor(props){
    super(props)
  };


  render(){
    console.log(this.props.shuttleInfo)
    let dest = null;
    this.props.shuttleInfo.toSeward ? dest = 'Seward Highway' : dest = 'Alyeska Tramway';

    return(
      <View>
        <Text>Shuttle: {this.props.shuttleInfo.shuttle_num}</Text>
        <Text>Destination: {dest}</Text>
      </View>
      )
  }
}

export default ShuttleInfo;
