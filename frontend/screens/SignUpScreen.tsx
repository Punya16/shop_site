

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';

type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
};

type SignupScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Signup'>;

interface SignupProps {
  navigation: SignupScreenNavigationProp;
}

const SignUpScreen: React.FC<SignupProps> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async () => {
    try {
      if (password !== confirmPassword) {
        setError("Password and Confirm Password don't match");
        return;
      }

      const userData = {
        name,
        email,
        phone,
        username,
        password,
      };

      const response = await axios.post('http://localhost:3000/user/signup', userData);

      console.log(response.data);
      navigation.navigate('Login');
    } catch (error: any) {
      console.error('Error during signup:', error.message);
      // Handle the error, show a user-friendly message, or log it for debugging
    }
  };

  const handleLoginNavigation = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Your Logo</Text>
      <View style={[styles.inputView, Platform.OS === 'web' && styles.webInputView]}>
        <TextInput
          style={[styles.inputText, Platform.OS === 'web' && styles.webInputText]}
          placeholder="Name"
          placeholderTextColor="#FFFFFF"
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={[styles.inputView, Platform.OS === 'web' && styles.webInputView]}>
        <TextInput
          style={[styles.inputText, Platform.OS === 'web' && styles.webInputText]}
          placeholder="Email"
          placeholderTextColor="#FFFFFF"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={[styles.inputView, Platform.OS === 'web' && styles.webInputView]}>
        <TextInput
          style={[styles.inputText, Platform.OS === 'web' && styles.webInputText]}
          placeholder="Phone Number"
          placeholderTextColor="#FFFFFF"
          keyboardType="phone-pad"
          onChangeText={(text) => setPhone(text)}
        />
      </View>
      <View style={[styles.inputView, Platform.OS === 'web' && styles.webInputView]}>
        <TextInput
          style={[styles.inputText, Platform.OS === 'web' && styles.webInputText]}
          placeholder="Username"
          placeholderTextColor="#FFFFFF"
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={[styles.inputView, Platform.OS === 'web' && styles.webInputView]}>
        <TextInput
          style={[styles.inputText, Platform.OS === 'web' && styles.webInputText]}
          placeholder="Password"
          placeholderTextColor="#FFFFFF"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={[styles.inputView, Platform.OS === 'web' && styles.webInputView]}>
        <TextInput
          style={[styles.inputText, Platform.OS === 'web' && styles.webInputText]}
          placeholder="Confirm Password"
          placeholderTextColor="#FFFFFF"
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <TouchableOpacity style={[styles.signupBtn, Platform.OS === 'web' && styles.webSignupBtn]} onPress={handleSignup}>
        <Text style={styles.signupText}>SIGN UP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLoginNavigation}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
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
    width: '80%',
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
  signupBtn: {
    width: '30%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  signupText: {
    color: 'white',
  },
  loginText: {
    color: 'black',
    marginTop: 15,
    fontSize: 15,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  // Add styles specific to web platform
  webInputView: {
    width: '25%',
  },
  webInputText: {
    width: '100%',
  },
  webSignupBtn: {
    width: '10%',
    height: 40,
  },
});

export default SignUpScreen;
