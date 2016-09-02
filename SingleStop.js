import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  TouchableOpacity
} from 'react-native';

class SingleStop extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View>
        <TouchableHighlight
          onPress={this.props.youPress}
          underlayColor={'#EEE'}>

          <View style={styles.box}>
            <Text style={styles.heavy}>
              &#x02720; Choose Your Stop
            </Text>
            <Text style={styles.normal}>
              {this.props.selectedStop.name}
            </Text>
          </View>
        </TouchableHighlight>
        
          <TouchableOpacity
            style={styles.ref}
            onPress={() => this.props.handleRefresh()}
            activeOpacity={1}>
            <Image
              source={require('./assets/refresh-button-icon-63755.png')} style={{width: 32, height: 32}}/>
          </TouchableOpacity>

      </View>

    )
  }
}

const styles = StyleSheet.create({
  box: {
    alignSelf: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
    paddingRight: 140,
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
  icon: {
    height: 28,
    width: 28
  },
  heavy: {
    fontFamily: 'Oswald-Regular',
    fontSize: 16,
  },
  normal: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '100',
    fontSize: 13,
  },
  ref:{
    right: -250,
    top: -47,
    padding: 0
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
