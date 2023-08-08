import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native'
import { useSelector } from 'react-redux'
import { getOrderList } from '../store/basketSlice'
import OrderItem from '../components/OrderItem'
import { DataStore } from 'aws-amplify'
import { Restaurant } from  '../models'

const ListOrderScreen = () => {
        const [orders, setOrders] = useState([])
        const orderList = useSelector(getOrderList)
        const [isLoading, setIsLoading] = useState(true)

        const getOrders = async () => {
            const orderPromises = orderList.map(async (order) => {
                const restaurant = await DataStore.query(Restaurant, order.restaurantId)
                const orderTemp = {
                    timeDate : order.timeDate,
                    restaurant,
                    total : order.total
                }
                return orderTemp
            })
            const restaurantData = await Promise.all(orderPromises)
            setOrders(restaurantData)
            setIsLoading(false)
        }

        useEffect(() => {
            getOrders()
        }, [orderList])

        if (isLoading) {
            return (
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text>Loading...</Text>
                </View>
            )
        } else if (orders.length !== 0) {
            return (
                <View style={styles.container}>
                    <FlatList
                        data={orders}
                        renderItem={({ item }) => <OrderItem item={item} />} />
                </View>
            )
        } else {
            return (
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text>No Order</Text>
                </View>
            )
        }
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 14,
        marginTop: 60
    }
})

export default ListOrderScreen;
