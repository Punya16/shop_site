// frontend/screens/ProductsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Products: undefined;
};

const ProductsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      {/* Add your product listing or other content here */}    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: Platform.OS === 'ios' ? 30 : 25,
    color: '#fb5b5a',
    marginBottom: 20,
  },
});

export default ProductsScreen;
