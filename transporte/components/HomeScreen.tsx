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

  const handleNavigateToPerfil = () => {
    navigation.navigate('Perfil');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a la Aplicación de Transporte Urbano</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button title="Registrar Vuelta" onPress={handleNavigateToRegistroVuelta} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Informes" onPress={handleNavigateToInformes} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Perfil" onPress={handleNavigateToPerfil} />
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
  buttonWrapper: {
    marginBottom: 10,
  },
});

export default HomeScreen;
