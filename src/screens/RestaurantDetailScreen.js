import React, {useState, useEffect} from 'react'
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import { useRoute, useNavigation } from '@react-navigation/native';
import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';

import ManuItem from '../components/ManuItem';

const RestaurantDetailScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const restaurantData = route.params.restaurant

    const handleBack = () => {
        navigation.pop()
    }

    return (
        <View>
             <Image source={{ uri: restaurantData.image }} style={styles.image} />
             <View style={styles.info}>
                <Text style={styles.name}>{restaurantData.name}</Text>
                <Text style={styles.rating}>$
                    <Entypo name="dot-single" size={12} color="#777777" />
                    {restaurantData.rating}
                    <FontAwesome name="star" size={18} color="#F8DB2A" />
                </Text>
             </View>
             <View style={styles.listOfManu}>
                <Text style={styles.manu}>Manu</Text>
                <FlatList 
                    data={restaurantData.dishes}
                    renderItem={({item})=> <ManuItem dish={item}/>}
                />
             </View>
             <TouchableOpacity style={styles.backBtn} onPress={handleBack}>
                <Ionicons name="arrow-back" size={24} color="#999999" />
             </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        aspectRatio: 5/3,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    info: {
        padding: 14,
        borderBottomWidth: 2,
        borderBottomColor: '#CCCCCC'
    },
    rating: {
        color: '#777777'
    },
    listOfManu: {
        padding: 14,
    },
    manu: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#777777',
        marginBottom: 14
    },
    backBtn: {
        position: 'absolute',
        top: 50,
        left: 20,
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default RestaurantDetailScreen;