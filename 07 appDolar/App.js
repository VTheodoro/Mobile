import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [dolar, setDolar] = useState('');
  const [resultado, setResultado] = useState('');

  function calcularValor() {
    if (parseFloat(dolar) > 0) {
      const resReal = parseFloat(dolar) * 4.98;
      setResultado(resReal.toFixed(2)); // Limitando o resultado a duas casas decimais
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.resultado}>Digite o valor em Dólares (USD):</Text>
      <TextInput
        placeholder='$ 00,00'
        style={styles.textinput}
        onChangeText={(text) => setDolar(text)} // Corrigindo o nome do argumento para text
        keyboardType="numeric" // Adicionando um teclado numérico para facilitar a entrada de valores
      />
      <Button onPress={calcularValor} title="Calcular" color="green" />
      <Text style={styles.resultado}>{resultado ? `Valor em Reais: R$ ${resultado}` : ''}</Text>
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
  textinput: {
    height: 40,
    width: 200,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 18,
    margin: 10,
    textAlign: 'center',
  },
  resultado: {
    marginTop: 40,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
