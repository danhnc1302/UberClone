import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetailScreen from "./src/screens/RestaurantDetailScreen";
import ManuItemDetailScreen from "./src/screens/ManuItemDetailScreen";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='RestaurantDetailScreen' component={RestaurantDetailScreen}/>
        <Stack.Screen name='ManuItemDetailScreen' component={ManuItemDetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

