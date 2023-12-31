//screens/LoginScreen.tsx

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<LoginProps> = ({ navigation }) => {
  const handleLogin = () => {
    // Logic for handling login
  };

  const handleSignupNavigation = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Your Logo</Text>
      <View style={[styles.inputView, Platform.OS === 'web' && styles.webInputView]}>
        <TextInput
          style={[styles.inputText, Platform.OS === 'web' && styles.webInputText]}
          placeholder="Username"
          placeholderTextColor="#FFFFFF"
          onChangeText={(text) => {}}
        />
      </View>
      <View style={[styles.inputView, Platform.OS === 'web' && styles.webInputView]}>
        <TextInput
          style={[styles.inputText, Platform.OS === 'web' && styles.webInputText]}
          placeholder="Password"
          placeholderTextColor="#FFFFFF"
          secureTextEntry={true}
          onChangeText={(text) => {}}
        />
      </View>
      <TouchableOpacity style={[styles.loginBtn, Platform.OS === 'web' && styles.webLoginBtn]} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignupNavigation}>
        <Text style={styles.signupText}>Signup</Text>
      </TouchableOpacity>
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
  logo: {
    fontWeight: 'bold',
    fontSize: Platform.OS === 'ios' ? 50 : 40,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%', // Base width for mobile
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  webInputView: {
    width: '25%', // Adjusted width for web
  },
  webInputText: {
    width: '100%', // Full width for web input text
  },
  loginBtn: {
    width: '40%', // Base width for mobile
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  webLoginBtn: {
    width: '10%', // Adjusted width for web
    height: 40, // Adjusted height for web
  },
  loginText: {
    color: 'white',
  },
  forgot: {
    color: 'black',
    fontSize: 11,
  },
  signupText: {
    color: 'black',
    marginTop: 15,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
