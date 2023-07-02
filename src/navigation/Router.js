import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomHomeNavigator from './bottomTabNavigator';


const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <BottomHomeNavigator/>
  );
};

export default Router;
