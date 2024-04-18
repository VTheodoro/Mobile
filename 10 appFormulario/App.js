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
  const [utilitario, setUlitario] = useState(false);
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
            status={checked == 'Masculino' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Masculino')}
          >
          </RadioButton>

          <RadioButton
            value="Feminino"
            status={checked == 'Feminino' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Feminino')}
          >
          </RadioButton>
        </View>

        <Text style={styles.textoNome}>Carro:</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite o nome do Carro:'
          onChangeText={carro => setCarro(carro)}
        >
        </TextInput>

        <Text style={styles.textoNome}>Placa:</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite a Placa do carro:'
          onChangeText={placa => setPlaca(placa)}
        >
        </TextInput>

        <View style={styles.areaModelo}>

          <Text style={styles.textoNome}>Modelo:</Text>
          <Picker
            style={styles.pickerModelo}
            selectedValue={modelo}
            onValueChange={(itemValue, itemIndex) => setMoledo(itemValue)}
          >
            {/*Lembrar de colocar item*/}
          </Picker>
        </View>

        <View style={styles.valorCarro}>
          <Text style={styles.textoNome}>Valor do Carro:</Text>
          <Text style={styles.carroTexto}>R${valor.toFixed(0)}</Text>
        </View>

        <View style={styles.areaSlider}>
          <Slider
            minimumTrackTintColor='#CF0'
            minimumValue={15000}
            maximumValue={300000}
            value={valor}
            onValueChange={(valor) => setValor(valor)}
          >
          </Slider>
        </View>

        <View style={styles.areaUtilitario}>
          <Text style={styles.textoNome}>Utilitário:</Text>
          <Switch
            style={{ paddingTop: 15 }}
            value={utilitario}
            onValueChange={(utilitario) => stUtilitario(utilitario)}
          >
          </Switch>
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
