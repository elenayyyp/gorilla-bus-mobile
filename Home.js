import React, { Component } from 'react';
import Profiles from './Profiles.js';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableHighlight,
  Modal,
  Switch,
} from 'react-native';

const window = Dimensions.get('window');
const uri = 'http://pickaface.net/includes/themes/clean/img/slide2.png';

module.exports = class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      aboutModal: false,
      contactModal: false,
      helpModal: false
    };
  }

  setAboutModal(visible) {
    this.setState({aboutModal: visible});
  }
  setContactModal(visible) {
    this.setState({contactModal: visible});
  }
  setHelpModal(visible) {
    this.setState({helpModal: visible});
  }

  render() {
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>

        <View style={styles.avatarContainer}>
          <View>
            <View>
              <Text style={styles.name}>Gorilla Bus</Text>

            </View>

            <Image
              style={styles.avatar}
              source={require('./assets/girdwood_pic.jpg')}/>
          </View>
        </View>

        <TouchableHighlight onPress={() => {
          this.setAboutModal(true)
        }}
        >
          <Text style={styles.item}>About</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => {
          this.setContactModal(true)
        }}
        >
          <Text style={styles.item}> &#9742; Contact</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => {
          this.setHelpModal(true)
        }}
        >
          <Text style={styles.item}>Help</Text>
        </TouchableHighlight>

        <View style={{marginTop: 22}}>
          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.aboutModal}
            onRequestClose={() => {alert("Modal has been closed.")}}
            >
           <View style={{marginTop: 22}}>
            <View>
              <TouchableHighlight onPress={() => {
                  this.setAboutModal(!this.state.aboutModal)
                }}>
                <Text> X </Text>
              </TouchableHighlight>

              <Text> About us</Text>
              {Profiles.nateText()}
              {Profiles.danText()}

            </View>
           </View>
          </Modal>
        </View>

        <View style={{marginTop: 22}}>
          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.contactModal}
            onRequestClose={() => {alert("Modal has been closed.")}}
            >
           <View style={{marginTop: 22}}>
            <View>
              <TouchableHighlight onPress={() => {
                  this.setContactModal(!this.state.contactModal)
                }}>
                <Text> X </Text>
              </TouchableHighlight>

              <Text>  Contact Us</Text>

            </View>
           </View>
          </Modal>
        </View>



        <View style={{marginTop: 22}}>
          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.helpModal}
            onRequestClose={() => {alert("Modal has been closed.")}}
            >
           <View style={{marginTop: 22}}>
            <View>
              <TouchableHighlight onPress={() => {
                  this.setHelpModal(!this.state.helpModal)
                }}>
                <Text> X </Text>
              </TouchableHighlight>

              <Text>  Help</Text>

            </View>
           </View>
          </Modal>
        </View>

      </ScrollView>


    );
  }
};

 const styles = StyleSheet.create({
    menu: {
      flex: 1,
      width: window.width,
      height: window.height,
      backgroundColor: '#27303C',
      padding: 20,
    },
    avatarContainer: {
      marginBottom: 20,
      marginTop: 20,
    },
    avatar: {
      width: 75,
      height: 48,
      borderRadius: 3,
      flex: 1,
    },
    name: {
      marginBottom: 10,
      fontWeight: 'bold',
      color: 'white',
      fontSize: 18,
      fontFamily: 'Oswald-Regular'
    },
    item: {
      fontSize: 14,
      fontWeight: '300',
      color: 'white',
      paddingTop: 5,
      paddingBottom: 5,
      fontFamily: 'Montserrat-Regular'
    },
  });
