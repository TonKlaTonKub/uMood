import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';


const Main = () => {
    return (
        <ImageBackground source={require('../assets/bg.jpg')} style={styles.container}>
            <View style={styles.statsContainer}>
                <Image 
                    style={styles.sizeImage}
                    source={require('../assets/Profile_Image.jpg')}
                />
                <Text style={styles.marginLeft}>
                    ( Your Name )
                </Text>
            </View>
            <View style={styles.Layout_Text}>
                <Text style={styles.Text_Month}>
                    May 2021
                </Text>
            </View>
            <View style={styles.Layout_Text}>
                <Image 
                    source={require('../assets/circle_bg.png')} 
                    style={styles.test_image}
                />
                <Text>Test</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    sizeImage: {
        width: 70,
        height: 70
    },
    statsContainer: {
        flexDirection: "row",
        marginTop: 30,
        marginLeft: 20
    },
    marginLeft: {
        marginLeft: 20,
        marginTop: 25
    },
    Text_Month: {
        fontSize: 30,
        alignItems: 'center',
        backgroundColor: '#FFA07A'
    },
    Layout_Text: {
        alignItems: 'center'
    },
    test_image: {
        width: 300,
        height: 300,
        alignItems: 'center'
    }
  });

export default Main
