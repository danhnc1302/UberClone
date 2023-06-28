import React from 'react'
import {
    View,
    FlatList,
    StyleSheet
} from 'react-native'

import RestaurantItem from '../components/RestaurantItem'

import data from '../data/restaurant'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({item}) => <RestaurantItem restaurant={item}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
})

export default HomeScreen;