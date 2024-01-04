import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
};

type ForgotPasswordScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ForgotPassword'>;

interface ForgotPasswordProps {
  navigation: ForgotPasswordScreenNavigationProp;
}

const ForgotPasswordScreen: React.FC<ForgotPasswordProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSendEmail = async () => {
    try {
      console.log('Sending email to:', email);
      // Add logic here to send a password recovery email
      console.log('Email sent successfully');
    } catch (error: any) {
      console.error('Error during email sending:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Your Logo</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter Email"
          placeholderTextColor="#FFFFFF"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.checkboxContainer}>
  <TouchableOpacity onPress={() => {}}>
    {/* Include your checkbox component here */}
    <View style={styles.checkbox} />
  </TouchableOpacity>
  <Text style={styles.checkboxText}>Remind me</Text>
</View>
      <TouchableOpacity style={styles.sendEmailBtn} onPress={handleSendEmail}>
        <Text style={styles.sendEmailText}>SEND EMAIL</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.registerText}>Don't have an account? Register.</Text>
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
    width: '30%', // Adjusted width for the input box
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1, // Add a border to make the checkbox visible
    borderColor: 'black', // Border color
    marginRight: 10,
  },
  checkboxText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  sendEmailBtn: {
    width: '30%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  sendEmailText: {
    color: 'white',
  },
  registerText: {
    color: 'black',
    marginTop: 15,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;