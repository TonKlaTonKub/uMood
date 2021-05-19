import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { color } from 'react-native-reanimated';

class Main extends React.Component {
    render() {
        return (
            <ImageBackground source={require('../assets/bg.jpg')} style={styles.container}>
                <View style={styles.statsContainer}>
                    <Image 
                        style={styles.sizeImage}
                        source={require('../assets/icon/Pic_profile.png')}
                    />
                    <Text style={{fontSize: 20, marginTop: 22}}>
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
                        source={require('../assets/Circle_bg.png')}
                        style={styles.test_image}
                    />
                    <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 30}}>
                            Tuesday
                        </Text>
                        <Text style={{fontSize: 50}}>
                            11
                        </Text>
                    </View>
                </View>
                <View style={styles.statsContainer2}>
                    <Image 
                        style={styles.sizeImage}
                        source={require('../assets/icon/Mood_Happy.png')}
                    />
                    <Text style={styles.marginLeft}>
                        Happy
                    </Text>
                    <Text style={styles.marginLeft, {fontSize: 40, marginLeft: 30, marginTop: 7}}>
                        +
                    </Text>
                </View>
                <View style={styles.statsContainer, {marginLeft: 20, marginTop: 10}}>
                    <TextInput
                        label="... Memo ..."
                        style={{fontSize: 20, width: 355, height: 150}}
                    />
                </View>
                <View style={styles.statsContainer}>
                    <TextInput
                        label="+"
                        style={{fontSize: 20, width: 112, height: 100, marginTop: 5}}
                    />
                    <TextInput
                        label="+"
                        style={{fontSize: 20, width: 112, height: 100, marginTop: 5, marginLeft: 10}}
                    />
                    <TextInput
                        label="+"
                        style={{fontSize: 20, width: 112, height: 100, marginTop: 5, marginLeft: 10}}
                    />
                    </View>
            </ImageBackground>
        )
    }
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
        marginTop: 10,
        marginLeft: 20
    },
    statsContainer2: {
        flexDirection: "row",
        marginLeft: 20,
        backgroundColor: '#FFF',
        marginRight: 180
    },
    marginLeft: {
        marginLeft: 20,
        marginTop: 25
    },
    Text_Month: {
        fontSize: 30,
        alignItems: 'center',
        backgroundColor: '#ffb7a2',
        color: '#fff'
    },
    Layout_Text: {
        alignItems: 'center',
    },
    test_image: {
        width: 200,
        height: 200,
        alignItems: 'center'
    }
  });

export default Main
