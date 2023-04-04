import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, SafeAreaView, Platform } from 'react-native'

export default class index extends Component {
    render() {
        const nav = styles.nav
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView
                    style={{ backgroundColor: '#dfb' }}
                    horizontal
                >
                    <Text style={nav}>新闻</Text>
                    <Text style={nav}>娱乐</Text>
                    <Text style={nav}>体育</Text>
                    <Text style={nav}>财经</Text>
                    <Text style={nav}>新闻</Text>
                    <Text style={nav}>娱乐</Text>
                    <Text style={nav}>体育</Text>
                    <Text style={nav}>财经</Text>
                </ScrollView>
                <ScrollView

                    contentContainerStyle={{ margin: 30 }}
                >
                    <Text style={styles.txt}> textInComponenttextInComponent
                        textInComponenttextInComponenttextInComponenttextInCo
                        mponenttextInComponenttextInComponenttextInComponenttextInComponenttextI
                        nComponenttextInComponenttextInComponenttextInComponenttextInComponen
                        ttextInComponenttextInComponenttextInComponenttextInComponenttextInComponen
                        ttextInComponenttextInComponenttextInComponent
                        textInComponenttextInComponent
                        textInComponenttextInComponenttextInComponenttextInCo
                        mponenttextInComponenttextInComponenttextInComponenttextInComponenttextI
                        nComponenttextInComponenttextInComponenttextInComponenttextInComponen
                        ttextInComponenttextInComponenttextInComponenttextInComponenttextInComponen
                        ttextInComponenttextInComponenttextInComponent
                        textInComponenttextInComponent
                        textInComponenttextInComponenttextInComponenttextInCo
                        mponenttextInComponenttextInComponenttextInComponenttextInComponenttextI
                        nComponenttextInComponenttextInComponenttextInComponenttextInComponen
                        ttextInComponenttextInComponenttextInComponenttextInComponenttextInComponen
                        ttextInComponenttextInComponenttextInComponent
                        textInComponenttextInComponent
                        textInComponenttextInComponenttextInComponenttextInCo
                        mponenttextInComponenttextInComponenttextInComponenttextInComponenttextI
                        nComponenttextInComponenttextInComponenttextInComponenttextInComponen
                        ttextInComponenttextInComponenttextInComponenttextInComponenttextInComponen
                        ttextInComponenttextInComponenttextInComponent

                    </Text>
                    <View style={{height:40}}></View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 20
    },
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    nav: {
        margin: 10,
        height: 50,
        fontSize: 30
    }
})
