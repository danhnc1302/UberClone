import React from 'react'
import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { Entypo } from '@expo/vector-icons';    
import { useRoute, useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import basketSlice from '../store/basketSlice'

const screenWidth = Dimensions.get('screen').width

const RestaurantItem = ({restaurant}) => {
    const navigation = useNavigation()

    const handleSelectRestaurant = () => {
        navigation.navigate('RestaurantDetailScreen', {id:  restaurant.id})
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handleSelectRestaurant}>
           <Image source={{uri: restaurant.image}} style={styles.image}></Image>
           <View style={styles.row}>
                <Text style={styles.name}>{restaurant.name}</Text>
                <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>{restaurant.rating.toFixed(1)}</Text>
                </View>
           </View>
           <Text style={styles.delivery}>{restaurant.deliveryFee.toFixed(2)} 
           <Entypo name="dot-single" size={12} color="#777777" />
            {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} min</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        paddingHorizontal: 20,
        marginBottom: 30
    },
    image: {
        width: '100%',
        aspectRatio: 5/3,
        marginBottom: 8
    },
    row: {
        flexDirection: 'row'
    },
    name: {
        flex: 1,
        fontWeight: 'bold'
    },
    ratingContainer: {
        backgroundColor: '#dddddd',
        width: 26,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    rating: {
        fontSize: 10
    },
    delivery: {
        color: '#777777'
    }
})


export default RestaurantItem;