// AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import LoadingScreen from './LoadingScreen';
import HomeScreen from './HomeScreen';
import RegistroVueltaScreen from './RegistroVueltaScreen';
import InformesScreen from './InformesScreen'; // Importamos InformesScreen
import HistorialScreen from './HistorialScreen'; // Importamos HistorialScreen
import GestionServiciosScreen from './GestionServiciosScreen'; // Importamos GestionServiciosScreen

export type RootStackParamList = {
  Login: undefined;
  Loading: undefined;
  Home: undefined;
  RegistroVuelta: undefined;
  Informes: undefined; // Definimos Informes en el RootStackParamList
  Historial: undefined; // Definimos Historial en el RootStackParamList
  GestionServicios: undefined; // Definimos GestionServicios en el RootStackParamList
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RegistroVuelta" component={RegistroVueltaScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Informes" component={InformesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Historial" component={HistorialScreen} options={{ headerShown: false }} />
        <Stack.Screen name="GestionServicios" component={GestionServiciosScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
