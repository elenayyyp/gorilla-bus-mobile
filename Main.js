import React, { Component } from 'react';
import SideMenu from 'react-native-side-menu';
import Menu from './Home';
import Map from './Map.js';
import ViewStops from './ViewStops.js';
import SingleStop from './SingleStop.js';
import axios from 'axios';
import eta from './ETA.js';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar,
  ScrollView
} from 'react-native';

// hamburger menu
class Button extends Component {

  handlePress(e) {
    if (this.props.onPress) {
      this.props.onPress(e);
    }
  }

  render() {
    console.log('T.P:', this.props)
    return (
      <TouchableOpacity
        onPress={() => this.handlePress()}
        style={this.props.style}>
        <Text>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

module.exports = class gorillabus extends Component {
  state = {
    isOpen: false,
    lat: 0,
    lng: 0,
    selectedItem: 'About',
    selectedStop: stops[0],
    stopsHidden: false,
    eta: 'Calc..',
    toSeward: ''
  };

  handleRefresh(){
    const App = this
    axios.get('http://localhost:3000/shuttles/666').then(function(response){
      App.setState({
        lat: response.data[0].lat,
        lng: response.data[0].lng,
        toSeward: response.data[0].toSeward
      })
    }).then(function(res){
      console.log(App.state)
      if (App.state.lat !== 0){
        App.setState({
          eta: eta(App.state)
        })
      }
      // console.log(res);
    })
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

  onMenuItemSelected = (item) => {
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  }

  handleChangeStop(stop) {
    // console.log(stop)
    this.setState({
      selectedStop: stop,
      stopsHidden: false
    })
  }

  goToStopsPage() {
    console.log('t.p.n:', this.props.navigator)
    this.props.navigator.push({
      component: ViewStops,
    })
  }

  handleCurrentStop() {
    this.setState({
      stopsHidden: true
    })
  }

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

    return (

        <SideMenu
          menu={menu}
          isOpen={this.state.isOpen}
          onChange={isOpen => this.updateMenuState(isOpen)}
          >
          <View style={styles.container}>

            <Text style={styles.header}>Gorilla Bus</Text>
            <SingleStop youPress={() => this.handleCurrentStop()} selectedStop={this.state.selectedStop} handleRefresh={()=> this.handleRefresh()}/>
            {this.state.stopsHidden ?
              <ViewStops stops={stops} changeStop={stop => this.handleChangeStop(stop)} style={styles.viewstop}/>
              : null}
            <Map style={{flex: 1}} eta={this.state.eta}/>
          </View>
          <Button style={styles.burger} onPress={() => this.toggle()}>
            <Image
              source={require('./assets/menu-alt-512.png')} style={{width: 32, height: 32}}/>
          </Button>
        </SideMenu>
      );
  }
};

const stops = [
  {name: "Seward Hwy", lat: 60.941276, lng: -149.172469, distSew: 0},
  {name: "Forest Service", lat: 60.944388, lng: -149.169983, distSew: 0.2},
  {name: "Telemark", lat: 60.951004, lng: -149.164281, distSew: 0.7},
  // {name: "Double Musky", lat: 60.965727, lng: -149.136103, distSew: 2.2},
  {name: "DownTown", lat: 60.962496, lng: -149.135131, distSew: 2.2},
  {name: "Girdwood School", lat: 60.967425, lng: -149.128348, distSew: 2.6},
  {name: "Alyeska View", lat: 60.960100, lng: -149.115815, distSew: 2.7},
  {name: "Daylodge", lat: 60.958949, lng: -149.112068, distSew: 2.9},
  {name: "Olympic Mountain Loop", lat: 60.960751, lng: -149.110305, distSew: 3.0},
  {name: "Brighton", lat: 60.962321, lng: -149.112084, distSew: 3.1},
  {name: "Tram Lot A", lat: 60.971504, lng: -149.101864, distSew: 4.1},
  {name: "Alyeska Tramway", lat: 60.970598, lng: -149.096939, distSew: 4.2}
];

const styles = StyleSheet.create({
  header:{
    marginTop: 30,
    fontSize: 24,
    backgroundColor: 'white',
    borderBottomLeftRadius: 7,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    textAlign: 'center',
    fontFamily: 'Oswald-Regular',
    paddingRight: 130,
    paddingLeft: 130,
    paddingTop: 7,
    paddingBottom: 7,
    position: 'relative',
    zIndex: 1
  },
  burger:{
    position: 'absolute',
    marginTop: 13,
    marginLeft: 10,
    top: 27,
    left: 7,
    zIndex: 5
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: 0
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
