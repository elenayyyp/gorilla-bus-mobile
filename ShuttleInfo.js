import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10
  },
  heavy: {
    fontWeight: 'bold',
    fontSize: 18
  },
  normal: {
    fontWeight: 'normal',
    fontSize: 18
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
        <Text style={styles.heavy}>
          Shuttle:{' '}
          <Text style={styles.normal}>
            {this.props.shuttleInfo.shuttle_num}
          </Text>
        </Text>

        <Text style={styles.heavy}>
          Destination:{' '}
          <Text style={styles.normal}>
            {dest}
          </Text>
        </Text>

        <Text style={styles.heavy}>
          ETA:{' '}
          <Text style={styles.normal}>

          </Text>
        </Text>

      </View>
      )
  }
}

export default ShuttleInfo;
