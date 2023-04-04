import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'

export default class index extends Component {
    constructor(){
        super()
        if (Platform.OS == 'android') {
            alert('当前是安卓')
        }
        if(Platform.OS == 'ios'){
            alert('当前是 ios')
        }
    }
    render() {
        return (
            <View style={[styles.container]}>
                <ActivityIndicator color='blue' size='large'/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})
