import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, FlatList, StatusBar, Platform, Dimensions, TouchableOpacity } from 'react-native'

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
        title: '4',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f631',
        title: '5',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d721',
        title: '6',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2',
        title: '7',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
        title: '8',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d722',
        title: '9',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba3',
        title: '10',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f633',
        title: '11',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d723',
        title: '12',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba4',
        title: '13',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f634',
        title: '14',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d724',
        title: '15',
    },
];

const Item = ({ title }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

export default class index extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    renderItem = ({ index, item }) => {
        const backgroundColor = item.id == this.state.selectedId ? '#dfb' : '#f9c2ff'
        console.log('[p1.0]', { item })
        return <TouchableOpacity style={[styles.item, { backgroundColor }]} onPress={() => {
            this.setState({
                selectedId: item.id
            })
        }}>
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    };
    render() {
        const { selectedId } = this.state
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                    horizontal={false}
                    // initialScrollIndex={2}
                    initialNumToRender={5}
                    numColumns={2}
                    inverted={false}
                    // extraData={selectedId}
                >
                </FlatList>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 10,
        height: 50,
        width: Dimensions.get('window').width / 2 - 20
    },
    title: {
        fontSize: 20,
    },
})
