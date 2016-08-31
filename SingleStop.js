import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native';

class SingleStop extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <TouchableHighlight
        onPress={this.props.youPress}
        underlayColor={'#EEE'}
      >
        <View style={styles.container}>

        <Text style={styles.heavy}>
          &#x02720; Choose Your Stop
        </Text>
          <Text style={styles.normal}>
            {this.props.selectedStop.name}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 5,
    alignItems: 'center'
  },
  icon: {
    height: 28,
    width: 28
  },
  heavy: {
    fontWeight: 'bold',
    fontSize: 18
  },
  normal: {
    fontWeight: 'normal',
    fontSize: 18
  }
});

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
