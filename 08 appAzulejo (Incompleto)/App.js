import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

<Text>Parede:</Text>
<Text>Digite a Altura da Parede:</Text>
<TextInput
placeholder='Altura em Metros'
/>

<Text>Digite a Largura da Parede:</Text>
<TextInput
placeholder='Largura em Metros'
/>

<Text>Azulejo:</Text>
<Text>Digite a Altura do AZULEJO:</Text>
<TextInput
placeholder='Altura em Metros'
/>

<Text>Digite a Largura do AZULEJO:</Text>
<TextInput
placeholder='Largura em Metros'
/>

<Text>A Quantidade de Azulejos Necessarios é:</Text>
<Text>Azulejos</Text>

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
