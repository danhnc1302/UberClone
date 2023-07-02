import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from "./src/store";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetailScreen from "./src/screens/RestaurantDetailScreen";
import ManuItemDetailScreen from "./src/screens/ManuItemDetailScreen";
import BasketScreen from "./src/screens/BasketScreen";
import ListOrderScreen from "./src/screens/ListOrderScreen";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='RestaurantDetailScreen' component={RestaurantDetailScreen}/>
        <Stack.Screen name='ManuItemDetailScreen' component={ManuItemDetailScreen}/>
        <Stack.Screen name='BasketScreen' component={BasketScreen}/>
        <Stack.Screen name='ListOrderScreen' component={ListOrderScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

