import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Platform } from 'react-native'
// import Index from './src_02_Flexbox/FlexDirection'
// import Index from './src_02_Flexbox/JustifyContent'
// import Index from './src_02_Flexbox/AlignItems'
// import Index from './src_03_Dimensions'
// import Index from './src_04_Alert_Button'
// import Index from './src_05_Switch_StatusBox'
// import Index from './src_06_Activity'
// import Index from './src_07_Image'
// import Index from './src_08_TextInput'
// import Index from './src_09_Touchable'
// import Index from './src_10_srcScrollview'
// import Index from './src_11_SectionList'
import Index from './src_12_FlatList'

export default class App extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <View style={{height:'100%'}}>
                {/* <Text style={[styles.h1]}>Hello RN</Text> */}
                <Index />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    h2: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})
