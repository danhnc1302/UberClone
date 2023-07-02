import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import basketSlice from '../store/basketSlice';
import { useRoute, useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
const ManuItem = ({dish}) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const handleSelectDish = () => {
        dispatch(basketSlice.actions.setDishId({ dishId: dish.id })) 
        navigation.navigate('ManuItemDetailScreen', {dish: dish})
    }

    return (
        <TouchableOpacity onPress={handleSelectDish}>
          <Text style={styles.name}>{dish.name}</Text>
          <Text style={styles.description}>{dish.description}</Text>
          <Text style={styles.name}>{dish.price}</Text>
          <View style={styles.line}></View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    name: {
        fontWeight: 'bold'
    },
    description: {
        color: '#777777'
    },
    line: {
        width: '100%',
        height: 2,
        backgroundColor: '#DDDDDD',
    }
})


export default ManuItem;