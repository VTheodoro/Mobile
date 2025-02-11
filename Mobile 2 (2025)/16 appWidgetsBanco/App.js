import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { Switch } from 'react-native';

export default function App() {

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [sexo, setSexo] = useState(0);
  const [limite, setLimite] = useState(100);
  const [estudante, setEstudante] = useState(false);
  const sexos = [
    { sexoNome: 'Maculino', valor: 1 },
    { sexoNome: 'Feminino', valor: 2 }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.bancoLogo} >SEJA BEM VINDO A AULA PAM II.</Text>
      <View style={styles.areaFormulario} >

        <Text style={styles.textoNome}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome aqui!"
          onChangeText={nome => setNome(nome)}
        ></TextInput>

        <Text style={styles.textoNome}>Telefone</Text>
        <TextInput
          style={{ borderBottomWidth: '1', padding: 10, fontSize: 16 }}
          value={telefone}
          placeholder="(99)99999-9999"
          onChangeText={telefone => setTelefone(telefone)}
          maxLength={15}
          keyboardType='numeric'
        ></TextInput>
        <Text>Telefone: {telefone}</Text>

        <View style={styles.areaSexo}>
          <Text style={styles.textNome}>Sexo: </Text>
<Picker
style={styles.pickerSexo}
selectedValue={sexo}
></Picker>

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
