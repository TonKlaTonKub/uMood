import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

class Login extends React.Component {
    next_page = () => {
        this.props.navigation.navigate('Main')
    }

    render() {
        return (
            <ImageBackground source={require('../assets/bg_1.jpg')} style={styles.container}>
          <View>
              <Text style={styles.text_style}>
                  uMood
              </Text>
          </View>
          <View style={styles.Space}>
            <TextInput
              label="User"
              style={styles.InputStyle}
            />
            <TextInput
              label="Password"
              style={styles.InputStyle}
            />
          </View>
          <View>
            <Button mode="contained" style={styles.Button_Style} onPress={this.next_page}>
              Login
            </Button>
            <Button mode="contained">
              Sign in
            </Button>
            <Button mode="text" style={styles.Button_Style}>
              Forgot Password
            </Button>
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

export default Login
