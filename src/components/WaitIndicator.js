import React from 'react'
import {
    View,
    ActivityIndicator
} from 'react-native'

const WaitIndicator = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large"></ActivityIndicator>
        </View>
    )
}

export default WaitIndicator;

