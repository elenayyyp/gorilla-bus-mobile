import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';

const styles = StyleSheet.create({
  content: {
    top: -20,
    marginTop: 5,
    backgroundColor: 'white',
    borderBottomLeftRadius: 0,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    alignItems: 'center'
  },
  heavy: {
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 18,
    fontFamily: 'Oswald-Regular',
    left: 10
  },
  normal: {
    fontWeight: 'normal',
    fontFamily: 'Lato-Hairline',
    fontSize: 18
  },
  sep: {
    borderBottomColor: 'black'
  }
})

class ShuttleInfo extends Component {
  constructor(props){
    super(props)
  };

  render(){
    console.log(this.props.shuttleInfo)
    let dest = null;
    this.props.shuttleInfo.toSeward ? dest = 'Seward Highway' : dest = 'Alyeska Tramway';

    return(
      <View style={styles.content}>
        <Text style={styles.sep}>
          <Text style={styles.heavy}>
              Shuttle: {' '}
          </Text>
          <Text style={styles.normal}>
            {this.props.shuttleInfo.shuttle_num}
          </Text>
        </Text>

        <Text>
          <Text style={styles.heavy}>
              Destination: {' '}
          </Text>
          <Text style={styles.normal}>
            {dest}
          </Text>
        </Text>

        <Text>
          <Text style={styles.heavy}>
              ETA: {' '}
          </Text>
          <Text style={styles.normal}>
            {this.props.eta} mins
          </Text>
        </Text>

      </View>
      )
  }
}

export default ShuttleInfo;
