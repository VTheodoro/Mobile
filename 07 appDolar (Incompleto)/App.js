import {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';

export default function App() {

  const [dolar, setDolar] = useState('');
  const [resultado, setResultado] = useState('');

function calcularValor(){
if(parseFloat(dolar)>0){
  const resReal = parseFloat(dolar) * 4.98;
  setResultado(resReal.toString());
}
}

  return (
    <View style={styles.container}>

<Text>Digite o valor em Dolares(USD):</Text>

<TextInput
placeholder='$ 00,00'
style={styles.textinput}
onChangeText={reais => setReais(reais)}
/>

<Button
onPress={calcularValor}
title='Calcular'
color= 'green'
/>

<Text style={styles.resul}>{resultado ? `Valor em Reais:: ${resultado}` : ''}</Text>

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
