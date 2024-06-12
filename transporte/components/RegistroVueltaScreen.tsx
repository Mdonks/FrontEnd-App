import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './AppNavigator';
import DateTimePickerModal from 'react-native-modal-datetime-picker'

type RegistroVueltaScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'RegistroVuelta'>;

const RegistroVueltaScreen: React.FC = () => {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [ruta, setRuta] = useState('');
  const [pasajeros, setPasajeros] = useState('');

  const navigation = useNavigation<RegistroVueltaScreenNavigationProp>();

  const handleRegistro = () => {
    // Aquí puedes agregar la lógica para enviar los datos al servidor
    console.log('Registro de vuelta:', { fecha, hora, ruta, pasajeros });
    // Luego, puedes navegar a la siguiente pantalla o realizar alguna acción adicional
  };

  const [isDatePickerVisible, setDataPickerVisible] = useState(false)

  const showDatePicker = () =>{
    setDataPickerVisible(true)
  }

  const hideDatePicker = () => {
    setDataPickerVisible(false)
  }

  const handlerConfirmar = () =>{
    console.warn('El dato es: ', Date);
    hideDatePicker();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Fecha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese la fecha"
        value={fecha}
        onChangeText={setFecha}
      />
      <Button title='show date' onPress={showDatePicker}></Button>
      <DateTimePickerModal
        mode="date"
        onConfirm={handlerConfirmar}
        onCancel={hideDatePicker}
      />
      <Text style={styles.label}>Hora:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese la hora"
        value={hora}
        onChangeText={setHora}
      />
      <Text style={styles.label}>Ruta:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese la ruta"
        value={ruta}
        onChangeText={setRuta}
      />
      <Text style={styles.label}>Pasajeros:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el número de pasajeros"
        keyboardType="numeric"
        value={pasajeros}
        onChangeText={setPasajeros}
      />
      <Button title="Registrar Vuelta" onPress={handleRegistro} />
      <Button title="Volver" onPress={() => navigation.navigate("Home")} />
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
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: Platform.OS === 'web' ? 40 : 30,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#D9D9D9',
    fontSize: Platform.OS === 'web' ? 16 : 12,
  },
});

export default RegistroVueltaScreen;
