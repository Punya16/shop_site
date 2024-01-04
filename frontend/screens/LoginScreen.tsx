import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import axios from 'axios';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Products: undefined;
  ForgotPassword: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<LoginProps> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const loginData = {
        username,
        password,
      };

      // Make a POST request to your NestJS backend to authenticate the user
      // Replace the URL with your actual backend URL
      const response = await axios.post('http://localhost:3000/user/login', loginData);

      // If authentication is successful, navigate to the Products page
      if (response.data.success) {
        navigation.navigate('Products');
      } else {
        console.log('Invalid credentials');
        // Handle invalid credentials, show a user-friendly message, or log it for debugging
      }
    } catch (error: any) {
      console.error('Error during login:', error.message);
      // Handle the error, show a user-friendly message, or log it for debugging
    }
  };

  const handleSignupNavigation = () => {
    navigation.navigate('Signup');
  };

  const handleForgotPasswordNavigation = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Your Logo</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="#FFFFFF"
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#FFFFFF"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPasswordNavigation}>
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
    width: '30%', // Base width for mobile
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
  loginBtn: {
    width: '30%', // Base width for mobile
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
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











// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
// import axios from 'axios';
// import { StackNavigationProp } from '@react-navigation/stack';

// type RootStackParamList = {
//   Login: undefined;
//   Signup: undefined;
//   Products: undefined;
//   HomePage : undefined;
// };

// type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

// interface LoginProps {
//   navigation: LoginScreenNavigationProp;
// }

// const LoginScreen: React.FC<LoginProps> = ({ navigation }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       const loginData = {
//         username,
//         password,
//       };

      
//       const response = await axios.post('http://localhost:3000/user/login', loginData);

      
//       if (response.data.success) {
//         navigation.navigate('HomePage');
//       } else {
//         console.log('Invalid credentials');
        
//       }
//     } catch (error: any) {
//       console.error('Error during login:', error.message);
      
//     }
//   };

//   const handleSignupNavigation = () => {
//     navigation.navigate('Signup');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.logo}>Your Logo</Text>
//       <View style={[styles.inputView, Platform.OS === 'web' && styles.webInputView]}>
//         <TextInput
//           style={[styles.inputText, Platform.OS === 'web' && styles.webInputText]}
//           placeholder="Username"
//           placeholderTextColor="#FFFFFF"
//           onChangeText={(text) => setUsername(text)}
//         />
//       </View>
//       <View style={[styles.inputView, Platform.OS === 'web' && styles.webInputView]}>
//         <TextInput
//           style={[styles.inputText, Platform.OS === 'web' && styles.webInputText]}
//           placeholder="Password"
//           placeholderTextColor="#FFFFFF"
//           secureTextEntry={true}
//           onChangeText={(text) => setPassword(text)}
//         />
//       </View>
//       <TouchableOpacity style={[styles.loginBtn, Platform.OS === 'web' && styles.webLoginBtn]} onPress={handleLogin}>
//         <Text style={styles.loginText}>LOGIN</Text>
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <Text style={styles.forgot}>Forgot Password?</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleSignupNavigation}>
//         <Text style={styles.signupText}>Signup</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   logo: {
//     fontWeight: 'bold',
//     fontSize: Platform.OS === 'ios' ? 50 : 40,
//     color: '#fb5b5a',
//     marginBottom: 40,
//   },
//   inputView: {
//     width: '80%', // Base width for mobile
//     backgroundColor: '#465881',
//     borderRadius: 25,
//     height: 50,
//     marginBottom: 20,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   inputText: {
//     height: 50,
//     color: 'white',
//   },
//   webInputView: {
//     width: '25%', 
//   },
//   webInputText: {
//     width: '100%', 
//   },
//   loginBtn: {
//     width: '40%', 
//     backgroundColor: '#fb5b5a',
//     borderRadius: 25,
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 40,
//     marginBottom: 10,
//   },
//   webLoginBtn: {
//     width: '10%', 
//     height: 40, 
//   },
//   loginText: {
//     color: 'white',
//   },
//   forgot: {
//     color: 'black',
//     fontSize: 11,
//   },
//   signupText: {
//     color: 'black',
//     marginTop: 15,
//     fontSize: 15,
//     fontWeight: 'bold',
//   },
// });

// export default LoginScreen;
