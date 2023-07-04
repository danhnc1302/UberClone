import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from "./src/store";
import Router from "./src/navigation/Router";


import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import {withAuthenticator } from 'aws-amplify-react-native' 
Amplify.configure(awsconfig)

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
        <Router></Router>
    </NavigationContainer>
    </Provider>
  );
}

export default withAuthenticator(App);

