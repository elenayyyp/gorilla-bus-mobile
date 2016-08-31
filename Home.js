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


const window = Dimensions.get('window');


module.exports = class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {modalVisible: false};
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <View style={styles.avatarContainer}>
          <View>
            <View>
              <Text style={styles.name}>Glacier City Transit Tracker</Text>
            </View>

            <Image
              style={styles.avatar}
              source={require('./assets/girdwood_pic.jpg')}/>
          </View>
        </View>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

        <View style={{marginTop: 22}}>
          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}
            >
           <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>

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
      marginBottom: 10
    },
    item: {
      fontSize: 14,
      fontWeight: '300',
      paddingTop: 5,
    },
  });
