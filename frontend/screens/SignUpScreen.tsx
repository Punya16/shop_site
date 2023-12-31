//screens/SignUpScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

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

  const handleSignup = () => {
    // Logic for handling signup with the form data
    console.log(`Signing up with name: ${name}, email: ${email}, phone: ${phone}, username: ${username}, password: ${password}`);
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
      <TouchableOpacity style={[styles.signupBtn,Platform.OS === 'web' && styles.webSignupBtn]} onPress={handleSignup}>
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
    fontSize: Platform.OS === 'ios' ? 50 : 40, // Adjust font size for different platforms
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
  // Add styles specific to web platform
  webInputView: {
    width: '25%', // Adjusted width for web
  },
  webInputText: {
    width: '100%', // Full width for web input text
  },
  webSignupBtn: {
    width: '10%', // Adjusted width for web
    height: 40, // Adjusted height for web
  },
});

export default SignUpScreen;
