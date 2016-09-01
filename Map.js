import React, { Component } from 'react';
import {
  Dimensions,
  MapView,
  StyleSheet,
  View
} from 'react-native';

import ShuttleInfo from './ShuttleInfo.js';

class Map extends Component {
  constructor(props){
    super(props)
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

      return fetch('https://serene-sierra-23458.herokuapp.com/shuttles/', fetchSettings)
        .then((response) => {
        return response.json().then(function(res){
          console.log("gfreertytrewqwert", derp.props);
          const newLocs = [{
            latitude: derp.props.everything.selectedStop.lat,
            longitude: derp.props.everything.selectedStop.lng,
            tintColor: "#4cd964",
            title: derp.props.everything.selectedStop.name
          }]
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
       	<MapView style={{width: Dimensions.get('window').width - 40, height: 410, top: -30}} region={this.state.mapRegion} annotations={this.state.annotations} />
        <ShuttleInfo shuttleInfo={this.state.shuttleInfo} eta={this.props.everything.eta}/>
      </View>
    );
  }
}
export default Map
