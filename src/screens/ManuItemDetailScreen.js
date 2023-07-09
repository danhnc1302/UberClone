import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useRoute, useNavigation} from '@react-navigation/native';
import basketSlice from '../store/basketSlice';
import { selectNumOfItems, getDish } from '../store/basketSlice';
import WaitIndicator from '../components/WaitIndicator'

const ManuItemDetailScreen = () => {
    const quantity = useSelector(selectNumOfItems)
    const dish = useSelector(getDish)
    const navigation = useNavigation()
    const route = useRoute()
    const dispatch = useDispatch() 

    const handleBack = () => {
        navigation.pop()
    }

    const increaseQuantity = () => {
        dispatch(basketSlice.actions.addBasketItem({ dish })) 
    }
    
    const decreaseQuantity = () => {
        dispatch(basketSlice.actions.removeBasketItem({ dish })) 
    }

    const handleAddToBasket = () => {
        navigation.navigate('BasketScreen')
    }

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
                    <Text style={styles.transparent}>{dish.price} $</Text>
                    <Text style={styles.text}>Add {quantity} to bassket</Text>
                    <Text style={styles.text}>{dish.price} $</Text>
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