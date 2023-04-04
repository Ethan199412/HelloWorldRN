import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, SectionList } from 'react-native'

const DATA = [
    {
        title: "Main dishes",
        data: ["Pizza", "Burger", "Risotto"]
    },
    {
        title: "Sides",
        data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
        title: "Sides",
        data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
        title: "Sides",
        data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
        title: "Sides",
        data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
        title: "Drinks",
        data: ["Water", "Coke", "Beer"]
    },
    {
        title: "Desserts",
        data: ["Cheese Cake", "Ice Cream"]
    },
    {
        title: "Drinks",
        data: ["Water", "Coke", "Beer"]
    },
    {
        title: "Desserts",
        data: ["Cheese Cake", "Ice Cream"]
    },
    {
        title: "Drinks",
        data: ["Water", "Coke", "Beer"]
    },
    {
        title: "Desserts",
        data: ["Cheese Cake", "Ice Cream"]
    }
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);


export default class index extends Component {
    constructor() {
        super()
        this.state = {
            isFresh: false,
            data: [{ title: 'first', data: [1, 2, 3] }]
        }
    }

    loadData = () => {
        this.setState({
            isFresh: true
        })
        console.log('load')
        setTimeout(() => {
            this.setState({
                isFresh: false,
                data: DATA
            })
            alert('下拉刷新')
        }, 1000)
    }

    render() {
        console.log('[p1.0] render')
        const { data, isFresh } = this.state
        return (
            <SafeAreaView>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <Item title={item} />}
                    renderSectionHeader={({ section: { title } }) => {
                        return <Text style={styles.header}>{title}</Text>
                    }}
                    ItemSeparatorComponent={() => {
                        return <View style={{ borderBottomWidth: 1, borderBottomColor: 'red' }} />
                    }}
                    ListEmptyComponent={
                        () => {
                            return <Text>空空如也</Text>
                        }
                    }
                    refreshing={isFresh}
                    onRefresh={this.loadData}
                    onEndReachedThreshold={0.1}
                    onEndReached={() => {
                        alert('到底了')
                    }}
                    ListHeaderComponent={()=>{
                        return <Text style={{fontSize:40}}>食物榜</Text>
                    }}
                    ListFooterComponent={()=>{
                        return <Text>没有更多了</Text>
                    }}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: 40,
        fontSize: 20,
        color: 'grey'
    },
    item: {
        height: 30,
        borderWidth: 1,
        borderColor: 'pink',
        margin:10,
        padding:5
    }
})
