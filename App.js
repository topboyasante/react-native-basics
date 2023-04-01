import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen';
import AddPayment from './pages/AddPayment';
import { useFonts } from 'expo-font';
import WithdrawFunds from './pages/WithdrawFunds';
import Expenses from './pages/Expenses';

const Stack = createNativeStackNavigator();
  
function App() {
  const [loaded] = useFonts({
    'GeneralSans-Regular': require('./assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-Semibold': require('./assets/fonts/GeneralSans-Semibold.otf'),
    'ClashDisplay-Semibold': require('./assets/fonts/ClashDisplay-Semibold.otf'),
    'ClashDisplay-Light': require('./assets/fonts/ClashDisplay-Light.otf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown:false,
        }}/>
        <Stack.Screen name="AddFunds" component={AddPayment} options={{
          headerShown:false,
        }}/>
        <Stack.Screen name="WithdrawFunds" component={WithdrawFunds} options={{
          headerShown:false,
        }}/>
        <Stack.Screen name="Expenses" component={Expenses} options={{
          headerShown:false,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;