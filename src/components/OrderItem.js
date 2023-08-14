import React, {useState} from "react"
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { Entypo } from '@expo/vector-icons';    
import { useNavigation } from '@react-navigation/native'
import { useEffect } from "react";
import { DataStore } from 'aws-amplify';
import { Restaurant,Order } from "../models";
import WaitIndicator from "./WaitIndicator";

const OrderItem = ({item}) => {
    const [order, setOrder] = useState()
  
    const navigation = useNavigation()
    const handleSelectOrderDetail = () => {
        navigation.navigate('OrderDetailScreen', {item:item})
    }

    useEffect(() => {
        DataStore.query(Order, item.id).then(setOrder)
    }, [item.id]);
    
    if(!order) 
        return <WaitIndicator></WaitIndicator>
    return (
            <TouchableOpacity style={styles.container} onPress={handleSelectOrderDetail}>
                <Image source={{uri: item.Restaurant.image }} style={styles.image}/>
                <View style={styles.info}>
                    <Text style={styles.name}>{item.Restaurant.name}</Text>
                    <Text style={styles.text}>Items <Entypo name="dot-single" size={12} color="#777777"/> ${item.total.toFixed(2)}</Text>
                    <Text style={styles.text}>{order.createdAt} <Entypo name="dot-single" size={12} color="#777777" /> {item.status}</Text>
                </View>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingVertical: 10,
        width: '100%',
        borderBottomWidth: 2,
        borderBottomColor: '#CCCCCC'
    },
    image: {
        height: 80,
        width: 80,
        resizeMode: 'contain'
    },
    name: {
        fontWeight:'bold',
    },
    text: {
        color: '#777777'
    },
    info: {
        width: '100%',
        padding: 6,
        justifyContent: 'space-between'
    }
})

export default OrderItem;

