import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';


const Profile = () => {
    return (
        <ImageBackground source={require('../assets/bg.jpg')} style={styles.container}>
            <View>
                
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Profile
