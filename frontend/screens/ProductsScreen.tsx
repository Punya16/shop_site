// frontend/screens/ProductsScreen.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useCart } from './CartContext';

type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Products: undefined;
  Purchase: undefined;
};

interface ProductsProps {
  navigation: any; // Replace 'any' with your navigation type
}

const ProductsScreen: React.FC<ProductsProps> = ({ navigation }) => {
  const { dispatch } = useCart();

  const productsData = [
    {
      id: 1,
      name: 'Product1',
      description: 'Description of Product 1',
      image: 'https://tse4.mm.bing.net/th?id=OIP.a0HGVmwS1CoY3YBFqpcQJQHaE8&pid=Api&P=0&h=220',
      price: 20.99,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Product2',
      description: 'Description of Product 2',
      image: 'https://tse3.mm.bing.net/th?id=OIP.qervQhFDZGWPMGtW8phx9wHaE8&pid=Api&P=0&h=220',
      price: 30.49,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Product3',
      description: 'Description of Product 3',
      image: 'https://tse3.mm.bing.net/th?id=OIP.FH6iyTAw3ZPg7Pv5cGxj_AHaE8&pid=Api&P=0&h=220',
      price: 15.99,
      quantity: 1,
    },
    {
      id: 4,
      name: 'Product4',
      description: 'Description of Product 4',
      image: 'https://tse3.mm.bing.net/th?id=OIP.9w6oNcvn4y8qpqBIWBQk0QHaE8&pid=Api&P=0&h=220',
      price: 25.99,
      quantity: 1,
    },
    {
      id: 5,
      name: 'Product5',
      description: 'Description of Product 5',
      image: 'https://tse2.mm.bing.net/th?id=OIP.H7euLSy8SxmRKSOCI9sgnAHaEo&pid=Api&P=0&h=220',
      price: 25.99,
      quantity: 1,
    },
    {
      id: 6,
      name: 'Product6',
      description: 'Description of Product 6',
      image: 'https://tse3.mm.bing.net/th?id=OIP.9w6oNcvn4y8qpqBIWBQk0QHaE8&pid=Api&P=0&h=220',
      price: 25.99,
      quantity: 1,
    },
    {
      id: 7,
      name: 'Product7',
      description: 'Description of Product 7',
      image: 'https://tse3.mm.bing.net/th?id=OIP.9w6oNcvn4y8qpqBIWBQk0QHaE8&pid=Api&P=0&h=220',
      price: 38.99,
      quantity: 1,
    },
    {
      id: 8,
      name: 'Product8',
      description: 'Description of Product 8',
      image: 'https://tse3.mm.bing.net/th?id=OIP.9w6oNcvn4y8qpqBIWBQk0QHaE8&pid=Api&P=0&h=220',
      price: 49.99,
      quantity: 1,
    },
  ];

  const windowWidth = Dimensions.get('window').width;

  const handleAddToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', product });
    console.log(`Product ${product.id} added to cart`);
  };

  const handlePurchase = () => {
    navigation.navigate('Purchase'); // Navigate to the Purchase screen
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Products</Text>
        <TouchableOpacity style={styles.purchaseButton} onPress={handlePurchase}>
          <Text style={styles.purchaseButtonText}>Purchase ▶</Text>
        </TouchableOpacity>
      </View>

      {productsData.map((product) => (
        <View key={product.id} style={[styles.productContainer, { width: windowWidth / 4 - 20 }]}>
          <Image source={{ uri: product.image }} style={styles.productImage} />
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
          <Text style={styles.productPrice}>{`$${product.price.toFixed(2)}`}</Text>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => handleAddToCart(product)}
          >
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  productDescription: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addToCartButton: {
    backgroundColor: '#fb5b5a',
    padding: 10,
    borderRadius: 5,
  },
  addToCartButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  purchaseButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  purchaseButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductsScreen;