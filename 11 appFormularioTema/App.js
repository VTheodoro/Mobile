import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { Switch } from 'react-native-paper';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [categoria, setCategoria] = useState('Masculino Open');
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [profissional, setProfissional] = useState(false);

  const categorias = [
    { nome: 'Masculino Open', valor: 'Masculino Open' },
    { nome: 'Feminino Open', valor: 'Feminino Open' },
    { nome: 'Categoria Amador', valor: 'Categoria Amador' },
    { nome: 'Categoria Master', valor: 'Categoria Master' }
  ];

  function enviarDados() {
    if (nome === '' || idade === '' || peso === 0 || altura === 0) {
      alert('Preencha todos os campos corretamente');
    } else {
      alert(
        'Inscrição no Campeonato de Fisiculturismo:\n\n' +
        'Nome: ' + nome + '\n' +
        'Idade: ' + idade + ' anos\n' +
        'Categoria: ' + categoria + '\n' +
        'Peso: ' + peso + ' kg\n' +
        'Altura: ' + altura + ' cm\n' +
        'Profissional: ' + (profissional ? 'Sim' : 'Não')
      );
    }
  }

  let categoriaItems = categorias.map((v, k) => {
    return <Picker.Item key={k} value={v.valor} label={v.nome} />;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscrição no Campeonato de Fisiculturismo:</Text>
      <View style={styles.formArea}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite seu nome'
          onChangeText={(nome) => setNome(nome)}
        />

        <Text style={styles.label}>Idade:</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite sua idade'
          keyboardType='numeric'
          onChangeText={(idade) => setIdade(idade)}
        />

        <Text style={styles.label}>Categoria:</Text>
        <Picker
          style={styles.picker}
          selectedValue={categoria}
          onValueChange={(itemValue, itemIndex) => setCategoria(itemValue)}
        >
          {categoriaItems}
        </Picker>

        <Text style={styles.label}>Peso (kg):</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite seu peso'
          keyboardType='numeric'
          onChangeText={(peso) => setPeso(parseFloat(peso))}
        />

        <Text style={styles.label}>Altura (cm):</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite sua altura'
          keyboardType='numeric'
          onChangeText={(altura) => setAltura(parseFloat(altura))}
        />

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#32B76C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  formArea: {
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
    backgroundColor: '#fff',
  },
  picker: {
    width: '80%',
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  switchArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green',
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  image: {
    width: 200,
    height: 150,
    marginTop: 20,
  },
});
