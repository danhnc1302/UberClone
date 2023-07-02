import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons, Entypo, FontAwesome } from '@expo/vector-icons';
import HomeRoutes from './home.routes';
import OrdersRoutes from './orders.routes';
import ProfileScreen from '../screens/ProfileScreen';
const Tab = createBottomTabNavigator();

export default function BottomHomeNavigator () {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return <Entypo name="home" size={24} color="black" />;
            }
            if (route.name === 'Orders') {
              return <MaterialCommunityIcons name="order-bool-ascending-variant" size={24} color="black" />;
            }
            if (route.name === 'Profile') {
              return <FontAwesome name="user" size={24} color="black" />;
            }
          },
          headerShown: false
        })}
        tabBarOptions={{
          activeTintColor: '#000',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}
        >
        <Tab.Screen name="Home" component={HomeRoutes} />
        <Tab.Screen name="Orders" component={OrdersRoutes} />

        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
  );
}