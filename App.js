import React, {useState, useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from "./src/store";
import Router from "./src/navigation/Router";
import '@azure/core-asynciterator-polyfill'

import { Amplify } from 'aws-amplify'
import awsmobile from './src/aws-exports'
import { withAuthenticator } from "aws-amplify-react-native";

Amplify.configure(awsmobile)

const App = () => {
 
  
  return (
    <Provider store={store}>
    <NavigationContainer>
        <Router></Router>
    </NavigationContainer>
    </Provider>
  );
}

export default App;

