import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

export default class FlexDirection extends Component {
    render() {
        return (
            <View style={{ height: '100%' }}>
                <ScrollView>
                    <Text style={[styles.h2]}> 主轴方向 </Text>
                    <View>
                        <Text style={[styles.h3]}>center</Text>
                        <View style={[styles.container, styles.flexRow, styles.AlignItemsCenter]}>
                            <Text style={styles.itemBase}>刘备</Text>
                            <Text style={styles.itemBase}>关羽</Text>
                            <Text style={styles.itemBase}>张飞</Text>
                        </View>
                    </View>

                    <View>
                        <Text style={[styles.h3]}>stretch</Text>
                        <View style={[styles.container, styles.flexRow, styles.AlignItemsStretch]}>
                            <Text style={styles.itemBase}>刘备</Text>
                            <Text style={styles.itemBase}>关羽</Text>
                            <Text style={styles.itemBase}>张飞</Text>
                        </View>
                    </View>

                    <View style={{height:'100%'}}>
                        <Text style={[styles.h3]}>baseline</Text>
                        <View style={[styles.container, styles.flexRow, styles.AlignItemsBaseline]}>
                            <Text style={styles.itemBase}>刘备</Text>
                            <Text style={[styles.itemBase, { fontSize: 60 }]}>关羽</Text>
                            <Text style={[styles.itemBase, { fontSize: 40 }]}>张飞</Text>
                        </View>
                    </View>

                    <View>
                        <Text style={[styles.h3]}>end</Text>
                        <View style={[styles.container, styles.flexRow, styles.AlignItemsEnd]}>
                            <Text style={styles.itemBase}>刘备</Text>
                            <Text style={styles.itemBase}>关羽</Text>
                            <Text style={styles.itemBase}>张飞</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        // margin: 10,
        borderWidth: 1,
        borderColor: '#ddd'
    },
    h3: {
        fontSize: 24,
        marginHorizontal: 10
    },
    h2: {
        fontSize: 30,
        marginHorizontal: 10
    },
    itemBase: {
        // height: 30,
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: '#dfb',
        padding: 4,
        textAlign: 'center'
    },
    flexRow: {
        flexDirection: 'row'
    },
    flexColumn: {
        flexDirection: 'column'
    },
    flexColumnReverse: {
        flexDirection: 'column-reverse'
    },
    flexRowReverse: {
        flexDirection: 'row-reverse'
    },
    JustifyContentEvenly: {
        justifyContent: 'space-evenly'
    },
    JustifyContentEnd: {
        justifyContent: 'flex-end'
    },
    JustifyContentCenter: {
        justifyContent: 'center'
    },
    JustifyContentBetween: {
        justifyContent: 'space-between'
    },
    AlignItemsCenter: {
        alignItems: 'center'
    },
    AlignItemsStretch: {
        alignItems: 'stretch'
    },
    AlignItemsBaseline: {
        alignItems: 'baseline'
    },
    AlignItemsEnd: {
        alignItems: 'flex-end'
    }
})
