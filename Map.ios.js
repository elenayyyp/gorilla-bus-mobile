import React, { Component } from 'react';
import {
   MapView,
   StyleSheet,
   View
} from 'react-native';

class Map extends Component {

  constructor(){
    super()
    this.state = {
      mapRegion: {
        latitude: 60.965727,
        longitude: -149.136103,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      },
      annotations: [{
        latitude: 60.965727,
        longitude: -149.136103,
      }],
    }
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF'}}>
       	<MapView style={{height: 500, width: 300 }} region={this.state.mapRegion} annotations={this.state.annotations} />
      </View>
    );
  }
}
export default Map
