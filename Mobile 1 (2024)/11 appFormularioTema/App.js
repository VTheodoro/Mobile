import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Slider from '@react-native-community/slider';
import { Switch } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('Masculino Open');
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [idade, setIdade] = useState(18); // Valor inicial do Slider
  const [profissional, setProfissional] = useState(false);
  const [escolaridade, setEscolaridade] = useState('Ensino Médio');

  const categorias = [
    { nome: 'Masculino Open', valor: 'Masculino Open' },
    { nome: 'Feminino Open', valor: 'Feminino Open' },
    { nome: 'Categoria Amador', valor: 'Categoria Amador' },
    { nome: 'Categoria Master', valor: 'Categoria Master' }
  ];

  const escolaridades = ['Ensino Médio', 'Ensino Superior', 'Pós-graduação', 'Mestrado', 'Doutorado'];

  function enviarDados() {
    if (nome === '' || peso === 0 || altura === 0) {
      alert('Preencha todos os campos corretamente');
    } else {
      alert(
        'Inscrição no Campeonato de Fisiculturismo:\n\n' +
        'Nome: ' + nome + '\n' +
        'Idade: ' + idade + ' anos\n' +
        'Categoria: ' + categoria + '\n' +
        'Peso: ' + peso + ' kg\n' +
        'Altura: ' + altura + ' cm\n' +
        'Profissional: ' + (profissional ? 'Sim' : 'Não') + '\n' +
        'Escolaridade: ' + escolaridade
      );
    }
  }

  const categoriaItems = categorias.map((item, index) => (
    <View key={index} style={styles.radioItem}>
      <RadioButton
        value={item.valor}
        status={categoria === item.valor ? 'checked' : 'unchecked'}
        onPress={() => setCategoria(item.valor)}
      />
      <Text>{item.nome}</Text>
    </View>
  ));

  const escolaridadeItems = escolaridades.map((item, index) => (
    <Picker.Item key={index} label={item} value={item} />
  ));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Inscrição no Campeonato de Fisiculturismo:</Text>
      <View style={styles.formArea}>
        <View style={styles.row}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nome Completo:</Text>
            <TextInput
              style={styles.input}
              placeholder='Digite seu Nome'
              onChangeText={(nome) => setNome(nome)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Idade:</Text>
            <Text style={styles.sliderValue}>{idade} anos</Text>
            <Slider
              style={styles.slider}
              minimumValue={18}
              maximumValue={60}
              step={1}
              value={idade}
              onValueChange={(idade) => setIdade(idade)}
            />
          </View>
        </View>

        <View style={styles.radioGroup}>
          <Text style={styles.label}>Categoria:</Text>
          <View style={styles.radioContainer}>{categoriaItems}</View>
        </View>

        <View style={styles.row}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Peso (kg):</Text>
            <TextInput
              style={styles.input}
              placeholder='Digite seu peso'
              keyboardType='numeric'
              onChangeText={(peso) => setPeso(parseFloat(peso))}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Altura (cm):</Text>
            <TextInput
              style={styles.input}
              placeholder='Digite sua altura'
              keyboardType='numeric'
              onChangeText={(altura) => setAltura(parseFloat(altura))}
            />
          </View>
        </View>

        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Escolaridade:</Text>
          <Picker
            style={styles.picker}
            selectedValue={escolaridade}
            onValueChange={(itemValue, itemIndex) => setEscolaridade(itemValue)}
          >
            {escolaridadeItems}
          </Picker>
        </View>

        <View style={styles.switchArea}>
          <Text style={styles.label}>Profissional:</Text>
          <Switch
            value={profissional}
            onValueChange={(profissional) => setProfissional(profissional)}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={enviarDados}
        >
          <Text style={styles.buttonText}>Enviar Inscrição</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={require('./assets/esporte.png')}
        style={styles.image}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    paddingTop: 40,
  },
  formArea: {
    width: '80%',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
  },
  inputContainer: {
    width: '48%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    width: '100%',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '80%',
    justifyContent: 'space-between',
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 10,
  },
  sliderContainer: {
    width: '80%',
    marginBottom: 10,
  },
  slider: {
    width: '100%',
  },
  sliderValue: {
    color: '#000',
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  pickerContainer: {
    width: '80%',
    marginBottom: 10,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  switchArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 5,
  },
});
