// frontend/App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CartProvider } from './screens/CartContext';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ProductsScreen from './screens/ProductsScreen';
import PurchaseScreen from './screens/PurchaseScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import UserProfileScreen from './screens/UserProfile';
import HomePage from './screens/HomePage';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="Signup" component={SignUpScreen} options={{ title: 'Signup' }} />
        <Stack.Screen name="Products" component={ProductsScreen} options={{ title: 'Products' }} />
        <Stack.Screen name="Purchase" component={PurchaseScreen} options={{ title: 'Purchase' }} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} options={{ title: 'UserProfile' }} />
        <Stack.Screen name="HomePage" component={HomePage} options={{ title: 'HomePage' }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: 'ForgotPassword' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;