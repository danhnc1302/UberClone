import React, {useState, useEffect, useMemo} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useRoute, useNavigation} from '@react-navigation/native';
import ItemBasket from '../components/ItemBasket';
import { getBasketItems, getBasketSubtotal }  from '../store/basketSlice'
import { useDispatch, useSelector } from 'react-redux';
import basketSlice from '../store/basketSlice'
import WaitIndicator from '../components/WaitIndicator';
import { DataStore} from 'aws-amplify';
import { Dish, Restaurant } from '../models';

const BasketScreen = () => {
    const [restaurant, setRestaurant] = useState()
    const [subTotal, setSubTotal] = useState(0)
    const navigation = useNavigation()
    const route = useRoute()
    const restaurantId = route.params.restaurantId
    const dispatch = useDispatch()
    
    const basketItems = useSelector(state => getBasketItems(state, restaurantId));

    const getRestaurant= async () => {
        await DataStore.query(Restaurant, restaurantId).then(setRestaurant)
    }

    const calcSubtotal = (result) => {
        setSubTotal(parseFloat(subTotal)+ parseFloat(result))
    }

    useEffect(() => {
        getRestaurant()
    },[])


    const handleOrder = () => {
        dispatch(basketSlice.actions.createOrder({ restaurantId: restaurantId,
            total: (parseFloat(subTotal) + parseFloat(restaurant.deliveryFee)).toFixed(2)                                            
        })) 
        navigation.navigate('HomeScreen')
    }
    const handleBack = () => {
        navigation.pop()
    }

    if(!restaurant) {
        return <WaitIndicator/>
    }
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={handleBack}>
                    <Ionicons name="arrow-back" size={30} color="black" style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.name}>{restaurant.name}</Text>
                <Text style={styles.yourItems}>Your Items</Text>
                <FlatList 
                    data={basketItems}
                    renderItem={({item}) => <ItemBasket item={item} calcSubtotal={calcSubtotal} />}
                />
                <View style={styles.line}></View>
                <View style={styles.row}>
                    <Text>Subtotal</Text>
                    <Text>${subTotal.toFixed(2)}</Text>
                </View>
                <View style={styles.row}>
                    <Text>Total</Text>
                    <Text>${(parseFloat(subTotal) + parseFloat(restaurant.deliveryFee)).toFixed(2)}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={handleOrder}>
                <View style={styles.addToBasketBtn}>
                    <Text style={styles.text}>Order</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 18,
        paddingVertical: 50,
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 14,
    },
    addToBasketBtn: {
        paddingVertical: 18,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    text: {
        color: 'white',
        fontWeight: '400',
        fontSize: 14
    },
    line: {
        width: '100%',
        height: 2,
        marginVertical: 16,
        backgroundColor: '#DDDDDD',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    yourItems: {
        marginBottom: 14,
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default BasketScreen;