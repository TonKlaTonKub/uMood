import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

class myButton extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View>
                    <Text>{this.props.children}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default myButton