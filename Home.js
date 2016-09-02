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
      contactModal: false
    };
  }

  setAboutModal(visible) {
    this.setState({aboutModal: visible});
  }
  setContactModal(visible) {
    this.setState({contactModal: visible});
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
          <Text style={styles.item}>Contact</Text>
        </TouchableHighlight>


        <View style={{marginTop: 22}}>
          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.aboutModal}
            onRequestClose={() => {alert("Modal has been closed.")}}
            >
            <ScrollView style={styles.container}>
              <View>
                <TouchableHighlight
                  underlayColor={'#EEE'}
                  onPress={() => {
                    this.setAboutModal(!this.state.aboutModal)
                  }}>
                  <Text style={styles.closeButton}> X </Text>
                </TouchableHighlight>
                  <Text style={styles.title}>About the Developers</Text>
                  {Profiles.nateText()}
                  {Profiles.danText()}
                  {Profiles.elenaText()}
              </View>
            </ScrollView>
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
              <TouchableHighlight
                underlayColor={'#EEE'}
                onPress={() => {
                  this.setContactModal(!this.state.contactModal)
                }}>
                <Text style={styles.closeButton}> X </Text>
              </TouchableHighlight>
              <Text style={styles.title}>Contact Info</Text>
              {Profiles.contactText()}
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
      backgroundColor: '#353749',
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
      color: 'white'
    },
    item: {
      fontSize: 14,
      fontWeight: '300',
      paddingTop: 5,
      color: 'white'
    },
    closeButton: {
      fontSize: 20,
      fontWeight: 'bold',
      alignSelf: 'flex-end',
      padding: 15
    },
    container: {
      padding: 20
    },
    title: {
      fontWeight: 'bold',
      fontSize: 24,
      alignSelf: 'center',
      marginBottom: 15
    },
    option: {
      fontWeight: 'bold',
      fontSize: 24,
    }
  });
