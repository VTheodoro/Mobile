import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [velocidade, setVelocidade] = useState('');
  const [tempo, setTempo] = useState('');
  const [distancia, setDistancia] = useState('');

  function calcularVelocidade() {
    if (tempo > 0 && distancia > 0) {
      const resultadoVelocidade = ((parseFloat(distancia) * 1000) / (parseFloat(tempo) * 60)).toFixed(2);
      setVelocidade(resultadoVelocidade + " m/s");
    } else {
      setVelocidade('');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculo de Velocidade:</Text>

      <Text>Digite a Distância:</Text>
      <TextInput
        style={styles.textinput}
        placeholder='Distância em KM'
        onChangeText={distancia => setDistancia(distancia)}
        keyboardType="numeric"
      />

      <Text>Digite o Tempo:</Text>
      <TextInput
        style={styles.textinput}
        placeholder='Tempo em Horas'
        onChangeText={tempo => setTempo(tempo)}
        keyboardType="numeric"
      />

      <Button
        title="Calcular"
        color="green"
        onPress={calcularVelocidade}
      />

      <Text style={styles.resultado}>A Velocidade é:</Text>
      <Text style={styles.res}>{velocidade}</Text>

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
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },

  res: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
});
