import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Alert } from 'react-native'

export default class index extends Component {
    handlePress = () => {
        console.log('[p1.2] I am button')
    }
    render() {
        return (
            <View style={styles.container}>
                <Text> textInComponent </Text>
                <Button title='alert'
                    onPress={this.handlePress}
                />
                <Button
                    title='Alert.alert'
                    onPress={() => {
                        Alert.alert('警告标题', '警告内容', [
                            {
                                text: '取消',
                                onPress: () => console.log('cancel'),
                                style:'cancel'
                            },
                            {
                                text: '确认',
                                onPress: () => console.log('confirm'),
                                style:'default'
                            },
                            {
                                text: '确认2',
                                onPress: () => console.log('confirm')
                            }
                        ])
                    }}
                    color={'red'}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        // flex:1,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})
