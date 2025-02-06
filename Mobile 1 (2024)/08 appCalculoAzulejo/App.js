import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

const [altParede, setAltParede] = useState('');
const [largParede, setLargParede] = useState('');

const [altAzulejo, setAltAzulejo] = useState('');
const [largAzulejo, setLargAzulejo] = useState('');

const [resultado, setResultado] = useState('');

function calcular(){
  const areaParede = parseFloat(altParede) * parseFloat(largParede);
  const areaAzulejo = parseFloat(altAzulejo) * parseFloat(largAzulejo);

  const qtdAzulejos = Math.ceil(areaParede / areaAzulejo);
  setResultado(qtdAzulejos.toString());
}

  return (
    <View style={styles.container}>

      <Text
        style={styles.titulo}>
        Parede:</Text>

      <Text>Digite a Altura da Parede:</Text>
      <TextInput
        style={styles.textinput}
        placeholder='Altura em Metros'
        onChangeText={(text) => setAltParede(text)}
        keyboardType="numeric"
      />

      <Text>Digite a Largura da Parede:</Text>
      <TextInput
        style={styles.textinput}
        placeholder='Largura em Metros'
        onChangeText={(text) => setLargParede(text)}
        keyboardType="numeric"
      />

      <Text
        style={styles.titulo}>
        Azulejo:</Text>

      <Text>Digite a Altura do Azulejo:</Text>
      <TextInput
        style={styles.textinput}
        placeholder='Altura em Metros'
        onChangeText={(text) => setAltAzulejo(text)}
        keyboardType="numeric"
      />

      <Text>Digite a Largura do Azulejo:</Text>
      <TextInput
        style={styles.textinput}
        placeholder='Largura em Metros'
        onChangeText={(text) => setLargAzulejo(text)}
        keyboardType="numeric"
      />

      <Button
      title="Calcular"
      color="green"
      onPress={calcular}/>

      <Text
        style={styles.resultado}
      >A Quantidade de Azulejos Necessarios é:</Text>

      <Text style={styles.res}>{resultado}</Text>

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

  titulo: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },

  textinput: {
    height: 40,
    width: 200,
    borderColor: 'grey',
    borderWidth: 0.5,
    borderRadius: 10,
    fontSize: 16,
    margin: 10,
    textAlign: 'center',
  },
  resultado: {
    marginTop: 40,
    fontSize: 18,
    fontWeight: 'bold',
  },
  res: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
});