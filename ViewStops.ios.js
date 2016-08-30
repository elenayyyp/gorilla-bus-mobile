import React, { Component } from 'react';
import {
  Text,
  ListView,
  View,
  TouchableHighlight
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
      <View>
        <ListView
          dataSource={this.ds.cloneWithRows(this.props.stops)}
          renderRow={ stop => (
            <TouchableHighlight
              underlayColor={'#EEE'}
              onPress={ () => this.selectStop(stop) }
            >
              <View>
                <Text numberOfLines={1}>{stop.name}</Text>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    )
  }
}


export default ViewStops
