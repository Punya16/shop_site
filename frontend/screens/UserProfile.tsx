import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Button } from 'react-native';
//import axios from 'axios'; 
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Products: undefined;
  UserProfile :undefined;
};

type UserProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'UserProfile'>;

interface UserProfileProps {
  navigation: UserProfileScreenNavigationProp;
}


const UserProfileScreen :React.FC<UserProfileProps> = ({ navigation }) => {
  const [user, setUser] = useState({
    id: 1,
    username: 'username',
    email: 'email@example.com',
    firstName: 'First Name',
    lastName: 'Last Name',
    avatar: 'https://via.placeholder.com/150',
    
  });

  useEffect(() => {
    // Fetch user details from API or local storage
    // You can use fetch or axios for API requests
    // Example: axios.get('your_api_endpoint/user/profile').then(response => setUser(response.data));
  }, []);

  // const handleUpdateProfile = () => {
  //   // Implement update profile functionality
  //   // You can use axios to send updated user data to the backend
  //   axios.put('your_api_endpoint/user/profile', user)
  //     .then(response => {
  //       console.log('Profile Updated', response.data);
  //       // Optionally, navigate to another screen upon successful update
  //       navigation.navigate('HomePage'); 
  //     })
  //     .catch(error => {
  //       console.error('Update Failed', error);
  //     });
  // };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <TouchableOpacity onPress={() => console.log('Change Avatar')}>
          <Text style={styles.changeAvatarText}>Change Avatar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.detailsContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={user.username}
          onChangeText={(text) => setUser({ ...user, username: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={user.email}
          onChangeText={(text) => setUser({ ...user, email: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={user.firstName}
          onChangeText={(text) => setUser({ ...user, firstName: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={user.lastName}
          onChangeText={(text) => setUser({ ...user, lastName: text })}
        />
        
        <Button title="Update Profile" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  changeAvatarText: {
    color: 'blue',
  },
  detailsContainer: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
  },
});

export default UserProfileScreen;
