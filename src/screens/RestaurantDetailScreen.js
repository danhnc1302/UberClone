import React, {useState, useEffect} from 'react'
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    Dimensions
} from 'react-native'

import { useRoute, useNavigation } from '@react-navigation/native';
import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';
import { getBasketQuantity } from '../store/basketSlice';
import { useSelector, useDispatch } from 'react-redux'
import ManuItem from '../components/ManuItem';
import { DataStore} from 'aws-amplify';
import { Dish, Restaurant } from '../models';
import { useBasketContext } from '../context/BasketContext'

const screenWidth = Dimensions.get('screen').width

const RestaurantDetailScreen = () => {
    const [restaurant, setRestaurant] = useState()
    const [dishes, setDishes] = useState([])

    const navigation = useNavigation()
    const route = useRoute()
    const restaurantId = route.params?.id

    const {
        setRestaurant: setBasketRestaurant,
        basket,
        basketDishes
    } = useBasketContext()


    const handleBack = () => {
        navigation.pop()
    }

    const handleOpenBasket = () => {
        navigation.navigate('BasketScreen')
    }

    const fetchData = async () => {
        await DataStore.query(Restaurant, restaurantId).then(setRestaurant)
        await DataStore.query(Dish, dish => dish.restaurantID.eq(restaurantId)).then(setDishes);
    }

    useEffect(() => {
        if(!restaurantId) return;
        setBasketRestaurant(null)
        fetchData()
    },[restaurantId])

    useEffect(()=> {
        setBasketRestaurant(restaurant)
    },[restaurant])


    if(!restaurant || !dishes) {
        return <ActivityIndicator size='large' style={{flex:1, justifyContent: 'center', alignItems: 'center'}}></ActivityIndicator>
    }
    
    return (
        <>
            <View>
             <Image source={{ uri: restaurant.image }} style={styles.image} />
             <View style={styles.info}>
                <Text style={styles.name}>{restaurant.name}</Text>
                <Text style={styles.rating}>$
                    <Entypo name="dot-single" size={12} color="#777777" />
                    {restaurant.rating.toFixed(1)}
                    <FontAwesome name="star" size={18} color="#F8DB2A" />
                </Text>
             </View>
             <View style={styles.listOfManu}>
                <Text style={styles.manu}>Manu</Text>
                <FlatList 
                    data={dishes}
                    renderItem={({item})=> <ManuItem dish={item}/>}
                />
             </View>
             <TouchableOpacity style={styles.backBtn} onPress={handleBack}>
                <Ionicons name="arrow-back" size={24} color="#999999" />
             </TouchableOpacity>
             </View>
             {
                basket && (<TouchableOpacity onPress={handleOpenBasket}>
                    <View style={styles.openBasket}>
                        <Text style={styles.text}>Open basket ({basketDishes.length})</Text>
                    </View>
                </TouchableOpacity>) 
             }
        </>
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
    },
    openBasket: {
        position: 'absolute',
        width: screenWidth - 18,
        alignSelf: 'center',
        paddingVertical: 18,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    }, 
    text: {
        color: 'white',
        fontWeight: '400',
        fontSize: 14
    }
})

export default RestaurantDetailScreen;