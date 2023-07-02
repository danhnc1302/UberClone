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


const OrderDetailScreen = () => {
    const route = useRoute()
    const orderInfo = route.params.item
    return (
        orderInfo && (
        <View style={styles.container}>
            <Image source={{uri: orderInfo.order.restaurant.image}} style={styles.image}/>
            <View style={styles.infoContainer}>
            <Text style={styles.name}>{orderInfo.order.restaurant.name}</Text>
            <Text style={styles.timeDate}>NEW <Entypo name="dot-single" size={12} color="#777777"/> {orderInfo.timeDate}</Text>
            <Text style={styles.name}>Your Order</Text>
            <FlatList 
                data={orderInfo.order.basketDishes}
                renderItem={({item})=> <ItemBasket dish={item}/>}
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