import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions } from 'react-native'

export default class index extends Component {
    render() {
        return (
            <View style={[styles.container]}>
                <Image
                    style={[styles.item1]}
                    source={require('./img.png')}
                />
                <Image
                    style={[styles.tinyLogo]}
                    source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item1: {
        // height: 100,
        width: Dimensions.get('window').width
    },
    tinyLogo:{
        height:50,
        width:50
    }
})
