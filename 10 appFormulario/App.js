import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";
import { Switch } from 'react-native';
import { RadioButton } from 'react-native-paper';


export default function App() {
  const [nome, setNome] = useState('');
  const [carro, setCarro] = useState('');
  const [placa, setPlaca] = useState('');
  const [modelo, setMoledo] = useState('0');
  const [valor, setValor] = useState('15000');
  const [utilitario, setulitario] = useState(false);
  const [checked, setChecked] = useState('Masculino');

  const modelos = [
    { modeloNome: 'Hatch', valor: 1 },
    { modeloNome: 'Pikup', valor: 2 },
    { modeloNome: 'Sedan', valor: 3 },
    { modeloNome: 'SUV', valor: 4 }
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Informações do Carro Particular</Text>
      <View style={styles.areaFormulario}>
        <Text style={styles.textoNome}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite seu nome aqui'
          onChangeText={nome => setNome(nome)}
        >
        </TextInput>
        <View style={styles.areaRadio}>
          <RadioButton
            value="Masculino"
            status={chacked == 'Masculino' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Masculino')}
          >

          </RadioButton>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
