import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { useRoute, useNavigation} from '@react-navigation/native';

const ManuItem = ({dish}) => {
    const navigation = useNavigation()
    const handleSelectDish = () => {
        navigation.navigate('ManuItemDetailScreen', {dishId: dish.id})
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
        margin: 10
    }
})


export default ManuItem;