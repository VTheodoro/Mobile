import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [area, setArea] = useState('');

  const calcularArea = () => {
    if (parseFloat(base) > 0 && parseFloat(altura) > 0) {
      const calculatedArea = (parseFloat(base) * parseFloat(altura)) / 2;
      setArea(calculatedArea.toString());
    } else {
      setArea('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Digite a base do Triângulo:</Text>
      <TextInput
        placeholder='Digite o valor da base'
        style={styles.caixatexto}
        keyboardType='numeric'
        onChangeText={text => setBase(text)}
        value={base}
      />

      <Text style={styles.texto}>Digite a Altura do Triângulo:</Text>
      <TextInput
        placeholder='Digite o valor da altura'
        style={styles.caixatexto}
        keyboardType='numeric'
        onChangeText={text => setAltura(text)}
        value={altura}
      />

      <Button
        style={styles.botao}
        title='Calcular Área'
        onPress={calcularArea}
      />

      <Text style={styles.resul}>{area ? `Área Triângulo: ${area}` : ''}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'white',
    fontSize: 18,
    marginVertical: 10,
  },
  caixatexto: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    color: 'white',
    paddingHorizontal: 10,
  },
  botao: {
    marginTop: 10,
  },
  resul: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color:'white'
  },
});
