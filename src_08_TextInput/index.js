import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Dimensions, Button } from 'react-native'

export default class index extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password:''
        }
    }
    doLogin = () => {
        alert(this.state.username)
    }
    handleChangeText = (val) => {
        this.setState({
            username: val
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <Text> textInComponent </Text> */}
                <TextInput
                    style={[styles.input]}
                    placeholder={'请输入用户名'}
                    value={this.state.username}
                    onChangeText={this.handleChangeText}
                />
                <TextInput
                    style={[styles.input]}
                    placeholder='手机号'
                    keyboardType='number-pad'
                />
                <View style={styles.btn}>
                    <Button title='登录' onPress={this.doLogin} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        width: Dimensions.get('window').width - 20,
        margin: 10,
        borderWidth: 1,
        borderColor: 'grey',
        padding: 5
    },
    btn: {
        borderColor: '#ccc',
        borderWidth: 1
    }
})
