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
        <View style={styles.box}>

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
  box: {
    marginTop: 10,
    marginBottom: 10,
    paddingRight: 70,
    paddingLeft: 70,
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomLeftRadius: 0,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  container: {
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'center',
  },
  icon: {
    height: 28,
    width: 28
  },
  heavy: {
    fontFamily: 'Oswald-Regular',
    fontSize: 16
  },
  normal: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '100',
    fontSize: 13,
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
