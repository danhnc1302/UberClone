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
    if(orderList.length != 0) {
        return (
            <View style={styles.container}>
                <FlatList
                    data= {orderList}
                    renderItem={({item}) => <OrderItem item={item} />}
                />
            </View>
    )
    } else {
        return (
            <View style={{
                flex:1,
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
        flex:1,
        paddingHorizontal: 14,
        marginTop: 60
    }
})

export default ListOrderScreen;