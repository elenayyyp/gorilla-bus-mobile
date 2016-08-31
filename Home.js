const React = require('react');
const {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableHighlight,
  Modal,
  Switch,
} = require('react-native');
const { Component } = React;

const window = Dimensions.get('window');
const uri = 'http://pickaface.net/includes/themes/clean/img/slide2.png';

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
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});

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
          <Image
            style={styles.avatar}
            source={{ uri, }}/>
          <Text style={styles.name}>GORILLA BUS</Text>
        </View>

        <TouchableHighlight onPress={() => {
          this.setAboutModal(true)
        }}>
          <Text>About</Text>
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
