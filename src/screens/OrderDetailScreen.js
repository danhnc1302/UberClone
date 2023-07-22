import React from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    FlatList
} from 'react-native'
import { useRoute, useNavigation} from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';    
import ItemBasket from "../components/ItemBasket";
import { useDispatch, useSelector } from 'react-redux';
import { getBasketItems } from '../store/basketSlice'


const OrderDetailScreen = () => {
    const route = useRoute()
    const orderInfo = route.params.item
    const orderDishes = useSelector(state => getBasketItems(state, orderInfo.restaurant.id));

   
    return (
        orderInfo && (
        <View style={styles.container}>
            <Image source={{uri: orderInfo.restaurant.image}} style={styles.image}/>
            <View style={styles.infoContainer}>
            <Text style={styles.name}>{orderInfo.restaurant.name}</Text>
            <Text style={styles.timeDate}>NEW <Entypo name="dot-single" size={12} color="#777777"/> {orderInfo.timeDate}</Text>
            <Text style={styles.name}>Your Order</Text>
            <FlatList 
                data={orderDishes}
                renderItem={({item})=> <ItemBasket item={item}/>}
            />
            </View>
        </View>)
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    image: {
        width: '100%',
        aspectRatio: 5/3
    },
    infoContainer: {
        padding: 14
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    timeDate: {
        marginBottom:10,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#777777'
    }
})

export default OrderDetailScreen;