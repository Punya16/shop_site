// frontend/App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ProductsScreen from './screens/ProductsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="Signup" component={SignUpScreen} options={{ title: 'Signup' }} />
        <Stack.Screen name="Products" component={ProductsScreen} options={{ title: 'Products' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
