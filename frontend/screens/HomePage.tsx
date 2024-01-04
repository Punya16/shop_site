// HomePage.tsx
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  UserProfile: undefined;
  Products: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomePage: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('UserProfile')}
      >
        <Text style={styles.buttonText}>User Profile</Text>
      </TouchableOpacity>
      <View style={styles.spacing} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Products')}
      >
        <Text style={styles.buttonText}>Products</Text>
      </TouchableOpacity>
    </View>
  );
};

// const App: React.FC = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomePage} />
//         {/* Add additional screens for Login, UserProfile, and Products */}
//         {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
//         {/* <Stack.Screen name="UserProfile" component={UserProfileScreen} /> */}
//         {/* <Stack.Screen name="Products" component={ProductsScreen} /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  spacing: {
    height: 10, 
  },
});

export default HomePage;