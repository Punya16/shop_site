// frontend/screens/PurchaseScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useCart } from './CartContext';

interface PurchaseProps {
  navigation: any; // Replace 'any' with your navigation type
}

const PurchaseScreen: React.FC<PurchaseProps> = ({ navigation }) => {
  const { state, dispatch } = useCart();

  // Calculate total items and total price
  const totalItems = state.cart.reduce((total, product) => total + product.quantity, 0);
  const totalPrice = state.cart.reduce((total, product) => total + product.price * product.quantity, 0);

  const handleRemove = (productId: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', productId });
  };

  const handleQuantityChange = (productId: number, change: number) => {
    dispatch({ type: 'CHANGE_QUANTITY', productId, change });
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.totalItemsText}>{`Total Items: ${totalItems}`}</Text>
        <Text style={styles.totalPriceText}>{`Total Price: $${totalPrice.toFixed(2)}`}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {state.cart.map((product) => (
          <View key={product.id} style={styles.productContainer}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productDescription}>{product.description}</Text>
              <Text style={styles.productPrice}>{`$${product.price.toFixed(2)}`}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => handleQuantityChange(product.id, -1)}
                >
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.productQuantity}>{`${product.quantity}`}</Text>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => handleQuantityChange(product.id, 1)}
                >
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => handleRemove(product.id)}
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // ... (unchanged styles)
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  leftContainer: {
    width: '30%',
    padding: 20,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalItemsText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  totalPriceText: {
    fontSize: 16,
    color: '#555',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 5,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
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
  productQuantity: {
    fontSize: 14,
    color: '#555',
    marginHorizontal: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#ddd',
    padding: 5,
    borderRadius: 5,
  },
  quantityButtonText: {
    fontSize: 16,
    color: '#555',
    fontWeight: 'bold',
  },
  removeButton: {
    backgroundColor: '#fb5b5a',
    padding: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#fb5b5a',
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default PurchaseScreen;