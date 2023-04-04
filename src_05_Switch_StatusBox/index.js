import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar, Switch } from 'react-native'

export default class index extends Component {
    constructor() {
        super()
        this.state = {
            hideStatusBar: false
        }
    }

    toggleStatusBar = () => {
        this.setState({
            hideStatusBar: !this.state.hideStatusBar
        })
    }

    render() {
        return (
            <View>
                <StatusBar
                    hidden={false}
                    backgroundColor='red'
                    barStyle={'light-content'}
                />
                <Switch
                    trackColor={{ false: 'blue', true: 'red' }}
                    thumbColor={'blue'}
                    value={this.state.hideStatusBar}
                    onValueChange={this.toggleStatusBar}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
