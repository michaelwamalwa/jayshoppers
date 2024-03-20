import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';

import { Picker } from '@react-native-picker/picker';
const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+254');

  const handleSignUp = async() => {
 try {
  await auth().createUserWithEmailAndPassword(email, password);
  console.log('User account & signed in!');
  navigation.navigate('Products');
 } catch (error) {
  if (error.code === 'auth/email-already-in-use') {
    console.log('That email address is already in use');
  }
  if (error.code === 'auth/invalid-email') {
    console.log('That email address is invalid');
  }

  console.error(error);
 }

  };
 
  const checkPasswordStrength = (password) => {
    return password.length >= 8;
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <View style={styles.inputContainer}>
        <Picker
        selectedValue={countryCode}
        style={styles.countryPicker}
        onValueChange={(itemValue) => setCountryCode(itemValue)}
        >
          <Picker.Item label="+254" value="+254" />
          <Picker.Item label="+255" value="+255" />
          <Picker.Item label="+91" value="+91" />
          <Picker.Item label="+1" value="+1" />
        </Picker>
        <TextInput
        style={[styles.input, { flex: 1 }]}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      </View>
        
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {!checkPasswordStrength(password) && (
        <Text style={styles.passwordError}>
          Password must be at least 8 characters long
        </Text>
      )}
      <Button title="Sign Up" onPress={handleSignUp} />
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    marginVertical: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10,
  },
  countryPicker: {
    height: 50,
    width: 50,
    color: '#333',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  loginText: {
    fontSize: 16,
  },
  loginLink: {
    fontSize: 16,
    color: '#007bff',
  },
  passwordError: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SignupScreen;