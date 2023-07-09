import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

const ItemBasket = ({dish}) => {
    return (
            dish && (
                    <View style={styles.container}>
                        <View style={styles.quantityOfItem}>
                            <Text style={styles.text}>{dish.quantity}</Text>
                        </View>
                        <Text style={styles.name}>{dish.dish.name}</Text>
                        <Text>${(dish.dish.price * dish.quantity).toFixed(2)}</Text>
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