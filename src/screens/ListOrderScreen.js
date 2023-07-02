import React from 'react'
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native'
import { useSelector } from 'react-redux'
import { getOrderList } from '../store/basketSlice'
import OrderItem from '../components/OrderItem'
const ListOrderScreen = () => {
    const orderList = useSelector(getOrderList)
    return (
        <View style={styles.container}>
            <FlatList
                data= {orderList}
                renderItem={({item}) => <OrderItem item={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 14,
        marginTop: 60
    }
})

export default ListOrderScreen;