import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes'
import './src/styles/global.css'
import CartProvider from './src/contexts/CartContext';




export default function App() {
  return (
    
    <NavigationContainer>
      <CartProvider>
        <StatusBar backgroundColor="#004832" barStyle="light-content" />
        <Routes/>
      </CartProvider>
    </NavigationContainer>
    

  );
}
