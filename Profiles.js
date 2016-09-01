import {
  View,
  Text,
  Linking
} from 'react-native';
import React, { Component } from 'react';

const Profiles = {

  nateText: function() {
    return(
      <View>
        <View>
          <Text>Githoob:</Text><Text style={{color: 'blue'}}
                onPress={() => Linking.openURL('https://github.com/chugachski')}>
                chugachski
          </Text>

          <Text>LinkedIn:</Text><Text style={{color: 'blue'}}
                onPress={() => Linking.openURL('https://www.linkedin.com/in/nathansmithcodes')}>
                nathansmithcodes
          </Text>

          <Text>Email:</Text><Text style={{color: 'blue'}}
                onPress={() => Linking.openURL('mailto:natesmith.copper@gmail.com')}>
                natesmith.copper@gmail.com
          </Text>
        </View>

        <Text>I wanted to build an app that solved a problem. Making this app gave me a chance to learn the basics of React Native and build something practical.
        </Text>
      </View>
    )
  },
  danText: function(){
    return(
      <View>
       <View>
     <Text>Daniel Yochum</Text>
         <Text>Githoob:</Text><Text style={{color: 'blue'}}
               onPress={() => Linking.openURL('https://github.com/dannersy')}>
               @dannersy
         </Text>

         <Text>LinkedIn:</Text><Text style={{color: 'blue'}}
               onPress={() => Linking.openURL('https://www.linkedin.com/in/danielyochumjr')}>
               danielyochumjr
         </Text>

       </View>

       <Text>I like coding. Especially games. The end.
       </Text>
     </View>
    )
  }
}

export default Profiles
