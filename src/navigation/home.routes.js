import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import RestaurantDetailScreen from '../screens/RestaurantDetailScreen';
import ManuItemDetailScreen from '../screens/ManuItemDetailScreen';
import BasketScreen from '../screens/BasketScreen';

const Stack = createNativeStackNavigator();

const HomeRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='RestaurantDetailScreen' component={RestaurantDetailScreen}/>
        <Stack.Screen name='ManuItemDetailScreen' component={ManuItemDetailScreen}/>
        <Stack.Screen name='BasketScreen' component={BasketScreen}/>
      </Stack.Navigator>
  )
}

export default HomeRoutes;