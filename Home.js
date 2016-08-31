import React, { Component } from 'react';
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

// import Profiles from './utils/ourText';

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
              <Text style={styles.name}>Glacier City Transit</Text>
              <Text style={styles.name}>Shuttle Tracker</Text>
            </View>

            <Image
              style={styles.avatar}
              source={require('./assets/girdwood_pic.jpg')}/>
          </View>
        </View>

        <TouchableHighlight onPress={() => {
          this.setAboutModal(true)
        }}>
          <View>
            <Text>About</Text>
            <Text>{}</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => {
          this.setContactModal(true)
        }}>
          <Text>Contact</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => {
          this.setHelpModal(true)
        }}>
          <Text>Help</Text>
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
      backgroundColor: 'gray',
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
      fontSize: 18,
    },
    item: {
      fontSize: 14,
      fontWeight: '300',
      paddingTop: 5,
    },
  });
