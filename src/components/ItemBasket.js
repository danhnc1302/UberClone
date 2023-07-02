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
                    <Text style={styles.text}>1</Text>
                </View>
                <Text style={styles.name}>{dish.basketDish.name}</Text>
                <Text style={styles.quantity}>x{dish.quantity}</Text>
                <Text>${dish.basketDish.price}</Text>
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
        marginHorizontal: 10,
        fontWeight: '600'
    },
    quantity: {
        flex: 1
    }
    
})


export default ItemBasket;