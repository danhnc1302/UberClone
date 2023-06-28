import React, { useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { useRoute, useNavigation} from '@react-navigation/native';

const ManuItemDetailScreen = () => {
    const route = useRoute()
    const dishId = route.params.dishId
    console.log(dishId)

    return (
        <View style={styles.container}>
            <Text>ManuItemDetailScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ManuItemDetailScreen;