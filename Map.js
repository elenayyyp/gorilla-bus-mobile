import React, { Component } from 'react';
import {
  Dimensions,
  MapView,
  StyleSheet,
  View
} from 'react-native';

import ShuttleInfo from './ShuttleInfo.js';

class Map extends Component {
  constructor(){
    super()
    this.state = {
      mapRegion: {
        latitude: 60.965727,
        longitude: -149.136103,
        latitudeDelta: 0.15,
        longitudeDelta: 0.15,
      },
      annotations: [{
        latitude: 60.965727,
        longitude: -149.136103,
      }],
      shuttleInfo: [{placeholder: "placeholder"}]
    }
  };

  componentDidMount(){
    // console.log('colors:', MapView.PinColors)

    const derp = this
    const handleResponse = this.handleResponse;
    window.setInterval(function(){
      const fetchSettings = {
        method: 'GET',
        headers: { "Content-Type" : "applications/json" }
      }

      return fetch('http://localhost:3000/shuttles/', fetchSettings)
        .then((response) => {
        return response.json().then(function(res){
          console.log('mapview.pincolors:', MapView.PinColors)
          const newLocs = [];
          res.map((shuttle, idx) => {
            let color = ['#155f7c', '#ff3b30', '#c969e0'][idx];
            newLocs.push({
              latitude: shuttle.lat,
              longitude: shuttle.lng,
              tintColor: color,
              title: `Shuttle Num ${shuttle.shuttle_num}`
            })
          })
          derp.setState({
            annotations: newLocs,
            shuttleInfo: res[0]
          })
        });
      });
    }, 3000)
  }

  render() {
    return (
      <View style={{flex: 1}}>
       	<MapView style={{width: Dimensions.get('window').width - 40, height: 450}} region={this.state.mapRegion} annotations={this.state.annotations} />
        <ShuttleInfo shuttleInfo={this.state.shuttleInfo} />
      </View>
    );
  }
}
export default Map
