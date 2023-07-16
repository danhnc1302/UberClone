import React, {useState, useEffect} from 'react'
import {
    View,
    FlatList,
    StyleSheet
} from 'react-native'
import { DataStore } from 'aws-amplify'
import RestaurantItem from '../components/RestaurantItem'
import { Restaurant } from '../models'

const HomeScreen = () => {
    const [restaurants, setRestaurants] = useState([])

    const fetchRestaurants = async () => {
        const results = await DataStore.query(Restaurant)
        setRestaurants(results)
    }
  
    useEffect( () => {
      fetchRestaurants()
    },[])
    return (
        <View style={styles.container}>
            <FlatList
                data={restaurants}
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