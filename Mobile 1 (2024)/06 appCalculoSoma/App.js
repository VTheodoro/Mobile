import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);

  function calcularSoma() {
    if (num1 > 0 && num2 > 0) {
      setResultado(parseInt(num1) + parseInt(num2));
      //resultado = num1 + num2 (convertendo para int)    <= mesmo conceito
    } else {
      setResultado('');
    }
  }

  return (
    <View style={styles.container}>
      <Text>Calculo Soma</Text>

      <Text>Digite o Primeiro número:</Text>
      <TextInput
        style={styles.caixa}
        placeholder='Digite um número:'
        onChangeText={num1 => setNum1(num1)}
      ></TextInput>

      <Text>Digite o Segundo número:</Text>
      <TextInput
        style={styles.caixa}
        placeholder='Digite um número:'
        onChangeText={num2 => setNum2(num2)}
      ></TextInput>

      <Button
        title='Calcular'
        onPress={calcularSoma}
      >
      </Button>

      <Text>{resultado ? `Resultado: ${resultado} ` : ''}</Text>
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
