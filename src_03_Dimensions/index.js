import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'

export default class index extends Component {
    render() {
        const base = styles.itemBase
        const h3 = styles.h3
        return (
            <View style={styles.container}>
                <View style={base}>
                    <Text style={h3}> 扫一扫 </Text>
                </View>
                <View style={base}>
                    <Text style={h3}> 付款码 </Text>
                </View>
                <View style={base}>
                    <Text style={h3}> 卡包 </Text>
                </View>
                <View style={base}>
                    <Text style={h3}> 出行 </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap:'wrap'
    },
    itemBase: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00b38a',
        width: Dimensions.get('window').width/3,
        borderColor: 'black',
        borderWidth: 1,
        height: 90
    },
    h3:{
        fontSize:20
    }
})
