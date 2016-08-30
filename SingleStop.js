import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native';

const styles = StyleSheet.create({
  element: {
    marginTop: 15
  }
})

class SingleStop extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <TouchableHighlight onPress={this.props.youPress}>
        <View style={styles.element}>
          <Text>Selected Stop: {this.props.selectedStop.name}</Text>
          <Image style={{height: 25, width: 25}} source={require('./assets/down_arrow.png')}/>
        </View>
      </TouchableHighlight>
    )
  }
}

export default SingleStop


// import React, { Component } from 'react';
// import {
//   Text,
//   View,
//   StyleSheet
// } from 'react-native';

// const styles = StyleSheet.create({
//   element: {
//     marginTop: 15
//   }
// })

// class SingleStop extends Component {
//   constructor(props){
//     super(props)
//   }

//   setNativeProps(nativeProps) {
//     this._root.setNativeProps(nativeProps);
//   }

//   render(){
//     return(
//         <View ref={component => this._root = component} style={styles.element}>
//           <Text>{this.props.selectedStop.name}</Text>
//         </View>

//     )
//   }

// }

// export default SingleStop

