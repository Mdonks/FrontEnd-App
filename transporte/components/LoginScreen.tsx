import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Platform } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './AppNavigator';
import { useNavigation } from '@react-navigation/native';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulamos la autenticación exitosa
    // En un escenario real, deberías realizar la autenticación con tus propios métodos
    setTimeout(() => {
      navigation.navigate('Loading');
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, styles.roundedInput]}
          placeholder="Correo"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[styles.input, styles.roundedInput]}
          placeholder="Clave"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.buttonContainer}>
          <Button title="Entrar" onPress={handleLogin} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Platform.OS === 'web' ? 50 : 20,
  },
  logo: {
    width: Platform.OS === 'web' ? 300 : 220,
    height: Platform.OS === 'web' ? 100 : 70,
    marginBottom: Platform.OS === 'web' ? 50 : 220,
    marginTop: Platform.OS === 'web' ? 50 : 200,
  },
  inputContainer: {
    width: '100%',
    flex: 1,
    borderRadius: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#192A57',
    alignItems: 'center',
    justifyContent: 'center',
    padding: Platform.OS === 'web' ? 50 : 100,
  },
  input: {
    width: '90%',
    height: Platform.OS === 'web' ? 40 : 30,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#D9D9D9',
    fontSize: Platform.OS === 'web' ? 16 : 12,
  },
  roundedInput: {
    borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  buttonContainer: {
    width: '90%',
    marginTop: Platform.OS === 'web' ? 20 : 10,
    height: Platform.OS === 'web' ? 50 : 20,
  },
});

export default LoginScreen;
