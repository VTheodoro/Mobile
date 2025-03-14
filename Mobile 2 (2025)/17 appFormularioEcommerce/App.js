import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { Switch } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [material, setMaterial] = useState(0);
  const [preco, setPreco] = useState(50);
  const [acabamentoPremium, setAcabamentoPremium] = useState(false);
  
  const materiais = [
    { nome: 'PLA', valor: 0 },
    { nome: 'ABS', valor: 1 },
    { nome: 'PETG', valor: 2 },
    { nome: 'Resina', valor: 3 }
  ];

  function enviarDados() {
    if (username === '' || email === '') {
      alert('Preencha todos os campos corretamente!');
      return;
    }
    alert(
      'Pedido realizado com sucesso!\n\n' +
      'Nome: ' + username + '\n' +
      'E-mail: ' + email + '\n' +
      'Material: ' + materiais[material].nome + '\n' +
      'Preço: R$' + preco.toFixed(2) + '\n' +
      'Acabamento Premium: ' + (acabamentoPremium ? 'Sim' : 'Não')
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imagemFundo} source={require('./assets/fundo.jpg')}>
        <Text style={styles.lojaLogo}>3D Print Store</Text>
        <Image style={styles.logo} source={require('./assets/logo.png')} />

        <View style={styles.areaFormulario}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput style={styles.input} placeholder="Digite seu nome" placeholderTextColor="#aaa" onChangeText={setUsername} />
          
          <Text style={styles.label}>E-mail:</Text>
          <TextInput style={styles.input} placeholder="Digite seu e-mail" placeholderTextColor="#aaa" keyboardType="email-address" onChangeText={setEmail} />

          <Text style={styles.label}>Material:</Text>
          <Picker selectedValue={material} onValueChange={setMaterial} style={styles.picker}>
            {materiais.map((mat, index) => (
              <Picker.Item key={index} label={mat.nome} value={index} />
            ))}
          </Picker>

          <Text style={styles.label}>Preço: R${preco.toFixed(2)}</Text>
          <Slider minimumValue={50} maximumValue={500} value={preco} onValueChange={setPreco} minimumTrackTintColor="#ffcc00" thumbTintColor="#ffcc00" />

          <View style={styles.switchArea}>
            <Text style={styles.label}>Acabamento Premium:</Text>
            <Switch value={acabamentoPremium} onValueChange={setAcabamentoPremium} trackColor={{ false: '#666', true: '#ffcc00' }} thumbColor="#ffcc00" />
          </View>

          <TouchableOpacity style={styles.botao} onPress={enviarDados}>
            <Text style={styles.botaoTexto}>Finalizar Pedido</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  imagemFundo: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  lojaLogo: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffcc00',
    marginTop: 50,
  },
  logo: {
    width: width * 0.4,
    height: height * 0.2,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  areaFormulario: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.8)',
    margin: 20,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#222',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
  },
  picker: {
    backgroundColor: '#222',
    color: '#fff',
    marginBottom: 15,
  },
  switchArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  botao: {
    backgroundColor: '#ffcc00',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  botaoTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
  },
});
