import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Alert
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useRoute, useNavigation} from '@react-navigation/native';
import basketSlice, {getDishQuantity} from '../store/basketSlice';
import WaitIndicator from '../components/WaitIndicator'
import { DataStore} from 'aws-amplify';
import { Dish, Restaurant } from '../models';

const ManuItemDetailScreen = () => {
    const [dish, setDish] = useState()
    // const quantity = useSelector(selectNumOfItems)
    
    const navigation = useNavigation()
    const route = useRoute()
    const dishId = route.params.dishId
    const dispatch = useDispatch() 

    const getDish = async ()  => {
        await DataStore.query(Dish, dishId).then(setDish)
    }

    useEffect(() => {
        getDish()
    },[])

    const handleBack = () => {
        navigation.pop()
    }

    const increaseQuantity = () => {
        dispatch(basketSlice.actions.increaseQuantity({ dishId: dishId })) 
    }
    
    const decreaseQuantity = () => {
        dispatch(basketSlice.actions.decreaseQuantity({ dishId: dishId })) 
    }

    const handleAddToBasket = () => {
        if(quantity != 0) {
            dispatch(basketSlice.actions.addToBasket({ dishId: dishId, restaurantId: dish.restaurantID }))
            navigation.pop()
        } else {
            Alert.alert('Error', 'Please select the number of dishes', 
                [{
                  text: 'OK',
                  onPress: () => {},
                  style: 'OK',
                }],)
        }
    }



    const quantity = useSelector(state => getDishQuantity(state, dishId))

    if(!dish) {
        return <WaitIndicator/>
    }
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={handleBack}>
                    <Ionicons name="arrow-back" size={30} color="black" style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.name}>{dish.name}</Text>
                <Text style={styles.description}>{dish.description}</Text>
                <View style={styles.line}></View>
                <View style={styles.modifyQuantity}>
                    <TouchableWithoutFeedback onPress={decreaseQuantity}>
                        <Feather name="minus-circle" size={45} color="black" />
                    </TouchableWithoutFeedback>
                    <Text style={styles.itemQuantity}>{quantity}</Text>
                    <TouchableWithoutFeedback onPress={increaseQuantity}>
                        <Feather name="plus-circle" size={45} color="black" />
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <TouchableOpacity onPress={handleAddToBasket}>
                <View style={styles.addToBasketBtn}>
                    <Text style={styles.transparent}>{(dish.price * quantity).toFixed(2)} $</Text>
                    <Text style={styles.text}>Add {quantity} to basket</Text>
                    <Text style={styles.text}>{(dish.price * quantity).toFixed(2)} $</Text>
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
    description: {
        color: '#777777',
        lineHeight: 20
    },
    line: {
        width: '100%',
        height: 2,
        marginVertical: 18,
        backgroundColor: '#C6C6C6'
    },
    icon: {

    },
    addToBasketBtn: {
        flexDirection: 'row',
        paddingVertical: 18,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        backgroundColor: 'black',
    },
    text: {
        color: 'white',
        fontWeight: '400',
        fontSize: 14
    },
    transparent: {
        color: 'transparent'
    },
    itemQuantity: {
        fontSize: 22,
        marginHorizontal: 16
    },
    modifyQuantity: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ManuItemDetailScreen;