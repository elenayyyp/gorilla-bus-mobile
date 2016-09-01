import {
  View,
  Text,
  Linking,
  StyleSheet,
  Image
} from 'react-native';
import React, { Component } from 'react';

const Profiles = {

  nateText: function() {
    return(
      <View>
        <View style={styles.block}>
          <Text style={[styles.name, styles.text]}>Nate Smith</Text>
          <View style={styles.subBlock}>
            <Text style={styles.text}>Making this app gave me a chance to learn the basics of React Native and solve a problem for Girdwood!
            </Text>
          </View>

          <View style={styles.subBlock}>
            <View >
              <Text style={styles.text}>
                <Image style={styles.avatar} source={require('../assets/github.png')}/>
                {' '} GitHub: {' '}
                <Text style={[styles.link, styles.text]}
                    onPress={() => Linking.openURL('https://github.com/chugachski')}>
                    chugachski
                </Text>
              </Text>
            </View>
          </View>

          <View style={styles.subBlock}>
            <View >
              <Text style={styles.text}>
                <Image style={styles.avatar} source={require('../assets/in.png')}/>
                {' '} LinkedIn: {' '}
                <Text style={{color: 'blue'}}
                    onPress={() => Linking.openURL('https://www.linkedin.com/in/nathansmithcodes')}>
                    nathansmithcodes
                </Text>
              </Text>
            </View>
          </View>


        </View>
      </View>
    )
  },

  danText: function() {
    return(
      <View style={styles.dark}>
        <View style={styles.block}>
          <Text style={[styles.name, styles.text]}>Dan Yochum</Text>
          <View style={styles.subBlock}>
            <Text style={styles.text}>Making this app gave me a chance to learn the basics of React Native and solve a problem for Girdwood!
            </Text>
          </View>

          <View style={styles.subBlock}>
            <View >
              <Text style={styles.text}>
                <Image style={styles.avatar} source={require('../assets/github.png')}/>
                {' '} GitHub: {' '}
                <Text style={[styles.link, styles.text]}
                    onPress={() => Linking.openURL('https://github.com/chugachski')}>
                    chugachski
                </Text>
              </Text>
            </View>
          </View>

          <View style={styles.subBlock}>
            <View >
              <Text style={styles.text}>
                <Image style={styles.avatar} source={require('../assets/in.png')}/>
                {' '} LinkedIn: {' '}
                <Text style={{color: 'blue'}}
                    onPress={() => Linking.openURL('https://www.linkedin.com/in/nathansmithcodes')}>
                    nathansmithcodes
                </Text>
              </Text>
            </View>
          </View>


        </View>
      </View>
    )
  },

    elenaText: function() {
      return(
      <View>
        <View style={styles.block}>
          <Text style={[styles.name, styles.text]}>Dan Yochum</Text>
          <View style={styles.subBlock}>
            <Text style={styles.text}>Making this app gave me a chance to learn the basics of React Native and solve a problem for Girdwood!
            </Text>
          </View>

          <View style={styles.subBlock}>
            <View >
              <Text style={styles.text}>
                <Image style={styles.avatar} source={require('../assets/github.png')}/>
                {' '} GitHub: {' '}
                <Text style={[styles.link, styles.text]}
                    onPress={() => Linking.openURL('https://github.com/chugachski')}>
                    chugachski
                </Text>
              </Text>
            </View>
          </View>

          <View style={styles.subBlock}>
            <View >
              <Text style={styles.text}>
                <Image style={styles.avatar} source={require('../assets/in.png')}/>
                {' '} LinkedIn: {' '}
                <Text style={{color: 'blue'}}
                    onPress={() => Linking.openURL('https://www.linkedin.com/in/nathansmithcodes')}>
                    nathansmithcodes
                </Text>
              </Text>
            </View>
          </View>


        </View>
      </View>
    )
  },

  contactText: function() {
    return(
      <View>
        <View style={styles.block}>
          <Text style={[styles.name, styles.text]}>Glacier Valley Transit</Text>
          <View style={styles.subBlock}>
            <Text>Phone:{' '}
              <Text style={styles.text}
                style={{color: 'blue'}}
                onPress={() => Linking.openURL('tel:9073829909')}>
                (907) 382-9909
              </Text>
            </Text>

            <Text>Email:{' '}
              <Text style={styles.text}
                style={{color: 'blue'}}
                onPress={() => Linking.openURL('email:info@glaciervalleytransit.com')}>
                info@glaciervalleytransit.com
              </Text>
            </Text>
          </View>

          <Text style={[styles.name, styles.text]}>Gorilla Bus Dev Team</Text>
          <View style={styles.subBlock}>
            <Text style={styles.text}>Found a Bug? Suggestions?{'  '}
              <Text style={styles.text}>
              <Image style={styles.avatar} source={require('../assets/bug.png')}/>
            </Text>
              <Text>{'\n'}Email:</Text>
              <Text style={styles.text}
                style={{color: 'blue'}}
                onPress={() => Linking.openURL('email:info@gorillabus.com')}>
                gorillabus@gmail.com
              </Text>
            </Text>
          </View>

        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  block: {
    padding: 8,
    paddingLeft: 30
  },
  subBlock: {
    padding: 4,
    paddingLeft: 20,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold'
  },
  avatar: {
    width: 25,
    height: 25
  },
  dark: {
    backgroundColor: '#EEE',
    borderRadius: 10
  },
  text: {
    fontSize: 15
  },
  link: {
    color: 'blue',
    fontSize: 15
  }
})

export default Profiles
