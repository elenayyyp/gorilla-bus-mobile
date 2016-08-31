import React, { Component } from 'react';
import {
  Text,
  ListView,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

class ViewStops extends Component{
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }

  selectStop(stop) {
    this.props.changeStop(stop)
  }

  render(){
    return(
      <View style={styles.container}>
        <Text>Select a Stop</Text>
        <ListView
          dataSource={this.ds.cloneWithRows(this.props.stops)}
          renderRow={ stop => (
            <TouchableHighlight
              underlayColor={'#EEE'}
              onPress={ () => this.selectStop(stop) }
            >
              <View>
                <Text style={styles.textItems} numberOfLines={1}>{stop.name}</Text>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex: 3,
    textAlign: 'center',
    position: "absolute",
    left: 75,
    marginTop: 25,
    marginBottom: 50,
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
    backgroundColor: 'rgba(255,255,255,0.8)'
  },
  textItems: {
    textAlign: 'center',
    lineHeight: 30,
    fontSize: 18,
    fontWeight: 'bold'
  },
});

export default ViewStops
