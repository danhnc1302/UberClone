import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomHomeNavigator from './bottomTabNavigator';
import { useAuthContext } from '../context/AuthContext';
import ProfileScreen from '../screens/ProfileScreen';
const Stack = createNativeStackNavigator();

const Router = () => {
  const { dbUser } = useAuthContext()
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {
        dbUser ? (
          <Stack.Screen name="BottomHomeNavigator" component={BottomHomeNavigator}/>
        ) : (
          <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
        )
      }
    </Stack.Navigator>
  );
};

export default Router;
