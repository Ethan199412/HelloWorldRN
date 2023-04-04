import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

export default class index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={() => {
                    console.log('触碰高亮')
                }}>
                    <View style={styles.item}>
                        <Text> 高亮 </Text>
                    </View>
                </TouchableHighlight>
                <TouchableOpacity onPress={() => {
                    console.log('触碰透明度')
                }}>
                    <View style={styles.item}>
                        <Text> 透明度 </Text>
                    </View>
                </TouchableOpacity>
                <TouchableWithoutFeedback onPress={() => {
                    console.log('触碰无响应')
                }}>
                    <View style={styles.item}>
                        <Text> 触碰无响应 </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        // flexDirection:'row'
    },
    item:{
        marginBottom:0,
        padding:10,
        borderWidth:1,
        borderColor:'red'
    }
})
