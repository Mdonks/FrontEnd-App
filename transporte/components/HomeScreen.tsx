// HomeScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './AppNavigator';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const handleNavigateToRegistroVuelta = () => {
    navigation.navigate('RegistroVuelta');
  };

  const handleNavigateToInformes = () => {
    navigation.navigate('Informes');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a la Aplicación de Transporte Urbano</Text>
      <View style={styles.buttonContainer}>
        <Button title="Registrar Vuelta" onPress={handleNavigateToRegistroVuelta} />
        <Button title="Informes" onPress={handleNavigateToInformes} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default HomeScreen;
