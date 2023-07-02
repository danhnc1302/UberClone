import React from "react"
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { Entypo } from '@expo/vector-icons';    
import { useNavigation } from '@react-navigation/native'
const OrderItem = ({item}) => {
    const navigation = useNavigation()
    const handleSelectOrderDetail = () => {
        navigation.navigate('OrderDetailScreen', {item:item})
    }
    return (
        <TouchableOpacity style={styles.container} onPress={handleSelectOrderDetail}>
            <Image source={{uri: item.order.restaurant.image }} style={styles.image}/>
            <View style={styles.info}>
                <Text style={styles.name}>{item.order.restaurant.name}</Text>
                <Text style={styles.text}>Items <Entypo name="dot-single" size={12} color="#777777"/> ${item.total}</Text>
                <Text style={styles.text}>{item.timeDate} <Entypo name="dot-single" size={12} color="#777777" /> NEW</Text>
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

