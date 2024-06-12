import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './AppNavigator';

type InformesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Informes'>;

const InformesScreen: React.FC = () => {
  const navigation = useNavigation<InformesScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Generación de Informes</Text>
      <Button title="Volver" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default InformesScreen;
