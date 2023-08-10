import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native'
import OrderItem from '../components/OrderItem'
import { useOrderContext } from '../context/OrderContext'

const ListOrderScreen = () => {
        const {orders} = useOrderContext()
       
        if (orders.length !== 0) {
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
