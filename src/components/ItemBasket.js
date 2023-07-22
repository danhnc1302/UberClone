import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { DataStore} from 'aws-amplify';
import { Dish, Restaurant } from '../models';
import WaitIndicator from '../components/WaitIndicator'
import { getBasketItems } from '../store/basketSlice';


const ItemBasket = ({ item, calcSubtotal }) => {
    const [dish, setDish] = useState();
  
    const getDish = async () => {
      try {
        const fetchedDish = await DataStore.query(Dish, item.dishId);
        setDish(fetchedDish);
      } catch (error) {
        console.error('Error fetching dish:', error);
      }
    };
  
    useEffect(() => {
      if (item) {
        getDish();
      }
    }, []);
  
    useEffect(() => {
      if (calcSubtotal !== undefined && dish && item && item.quantity) {
        const subtotal = (dish.price * item.quantity).toFixed(2);
        calcSubtotal(subtotal);
      }
    }, [dish]);

    return (
            dish && (
                    <View style={styles.container}>
                        <View style={styles.quantityOfItem}>
                            <Text style={styles.text}>{item.quantity}</Text>
                        </View>
                        <Text style={styles.name}>{dish.name}</Text>
                        <Text>${(dish.price * item.quantity).toFixed(2)}</Text>
                    </View>

            )
        
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5
    },
    quantityOfItem: {
        width: 24,
        height: 24,
        borderRadius: 4,
        backgroundColor: '#E3E3E3',
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        flex: 1,
        marginHorizontal: 10,
        fontWeight: '600'
    },
})


export default ItemBasket;