import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

class Profile extends React.Component {
    goto_Main = () => {
      this.props.navigation.navigate('Main')
    }

    goto_Sign_up = () => {
      this.props.navigation.navigate('Sign_up')
    }

    render() {
        return (
            <ImageBackground source={require('../assets/bg_1.jpg')} style={styles.container}>
          <View style={{alignItems: 'center'}}>
              <Text style={styles.text_style}>
                  uMood
              </Text>
              <Text style={{color: 'white', fontSize: 30}}>
                Hello
              </Text>
              <Image
                style={{width: 150, height: 150}}
                source={require('../assets/icon/Pic_profile.png')}
              />
              <Text style={{color: 'white', fontSize: 30}}>
                ( Your Name )
              </Text>
          </View>
          
        </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    InputStyle: {
      marginTop: 5,
      marginBottom: 5,
      height: 50,
      width: 250
    },
    Button_Style: {
      marginTop: 10,
      marginBottom: 10,
    },
    Space: {
      marginTop: 5
    },
    text_style: {
        fontSize: 50
    }
  });

export default Profile
