import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListOrderScreen from '../screens/ListOrderScreen';
import OrderDetailScreen from '../screens/OrderDetailScreen';

const Stack = createNativeStackNavigator();

const OrdersRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='ListOrderScreen'>
        <Stack.Screen name='ListOrderScreen' component={ListOrderScreen}/>
        <Stack.Screen name='OrderDetailScreen' component={OrderDetailScreen}/>
    </Stack.Navigator>
  )
}

export default OrdersRoutes;