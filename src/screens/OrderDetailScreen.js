import React, {useEffect, useState} from "react";
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
import {Order, OrderDish} from '../models'
import { useOrderContext } from "../context/OrderContext";
import { DataStore } from "aws-amplify";

const OrderDetailScreen = () => {
    const [orderDish, setOrderDish] = useState()
    const route = useRoute()
    const orderInfo = route.params.item


    const getData = async () => {
        const orderDishes = await DataStore.query(OrderDish, (od) =>
        od.orderID("eq", orderInfo.id)
    );
        if (orderDishes.length > 0) {
            setOrderDish(orderDishes);
        } else {
            console.log("No order dishes found for the given orderID.");
        }
    }

    useEffect(() => {
       getData()
    }, [orderInfo.id]);
    

    console.log(orderDish)
    return (
        orderInfo && (
        <View style={styles.container}>
            <Image source={{uri: orderInfo.Restaurant.image}} style={styles.image}/>
            <View style={styles.infoContainer}>
            <Text style={styles.name}>{orderInfo.Restaurant.name}</Text>
            <Text style={styles.timeDate}>NEW <Entypo name="dot-single" size={12} color="#777777"/> {orderInfo.Restaurant.createdAt}</Text>
            <Text style={styles.name}>Your Order</Text>
            <FlatList 
                data={orderDish}
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