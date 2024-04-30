import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
 
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { Switch} from 'react-native-paper';
import { RadioButton } from 'react-native-paper';
 
 
export default function App() {
  const [ nome, setNome] = useState('');
  const [ carro, setCarro] = useState('');
  const [ placa, setPlaca ] = useState('');
  const [ modelo, setModelo ] = useState(0);
  const [ valor, setValor ] = useState(15000);
  const [ utilitario, setUtilitario ] = useState(false);
  const [ checked, setChecked ] = useState('Masculino');
  const modelos = [
    { modelonome: 'Hatch', valor: 1 },
    { modelonome: 'Pickup', valor: 2 },
    { modelonome: 'Sedan', valor: 3 },
    { modelonome: 'SUV', valor: 4 }
  ]
 
  function enviarDados() {
    if (nome == '' || carro == '') {
      alert('Preencha todos os campos corretamente');
    }
    else {
      alert(
        'Informações do carro \n\n' +
        'Nome: ' + nome + '\n' +
        'Sexo: ' + checked + '\n' +
        'Placa: ' + placa +
        'Carro: ' + carro + '\n' +
        'Modelo: ' + modelos[modelo].modelonome + '\n' +
        'Valor: ' + valor + '\n' +
        'Carro Utlitário: ' + (utilitario ? 'Sim' : 'Não')
 
      );
    }
  }
 
  let modeloItems = modelos.map((v, k) => {
    return <Picker.Item key={k} value={k} label={v.modelonome}></Picker.Item>
  })
 
 
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações do carro particular: </Text>
      <View style={styles.areaformulario}>
        <Text style={styles.labelName}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite seu nome aqui'
          onChangeText={nome => setNome(nome)}
        >
        </TextInput>
        <View style={styles.areaRadio}>
          <RadioButton
            value='Masculino'
            status={checked == 'Masculino' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Masculino')}
          ></RadioButton>
          <Text>Masculino</Text>
          <RadioButton
            value='Feminino'
            status={checked == 'Feminino' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Feminino')}
          ></RadioButton>
          <Text>Feminino</Text>
        </View>
 
        <Text style={styles.labelName}>Carro</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite aqui o nome do carro'
          onChangeText={carro => setCarro(carro)}
        >
        </TextInput>
        <Text style={styles.labelName}>placa</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite a sua placa aqui'
          onChangeText={placa => setPlaca(placa)}
        >
        </TextInput>
 
        <View style={styles.areaModelo}>
          <Text style={styles.labelName}>modelo</Text>
 
          <Picker
            style={styles.pickerModelo}
            selectedValue={modelo}
            onValueChange={(itemValue, itemIndex) => setModelo(itemValue)}
          >
            {modeloItems}
          </Picker>
        </View>
        <View style={styles.valorCarro}>
          <Text style={styles.labelName}>valor do carro: </Text>
          <Text style={styles.carroTexto}>R${valor}</Text>
        </View>
        <View style={styles.areaSlider}>
          <Slider
            minimumTrackTintColor='#faa'
            minimumValue={1500}
            maximumValue={300000}
            value={valor}
            onValueChange={valor => setValor(valor)}
          >
          </Slider>
        </View>
        <View style={styles.areaUtilitario}>
          <Text style={styles.labelName}>Utilitário:</Text>
          <Switch
            style={{ paddingTop: 15 }}
            value={utilitario}
            onValueChange={(utilitario) => setUtilitario(utilitario)}
          >
 
          </Switch>
 
        </View>
 
        <TouchableOpacity
          style={styles.botao}
          onPress={enviarDados}
        >
          <Text style={styles.botaoTexto}>Mostra dados carro</Text>
        </TouchableOpacity>
      </View>
 
      <Image source={require('./assets/carros.png')}
      style={styles.imagem
      }
      >
      </Image>
    </View>
  )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#32B76C',
 
  },
  areaformulario:
  {
    flexDirection: 'column',
    margin: 10
  },
  textoNome: {
    fontSize: 17,
    color: '#000000',
    fontWeight: 'bold',
  },
 
  areaModelo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5
  },
  pickerModelo: {
    flex: 1
  },
  valorArea: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  valorTexto: {
    color: '#FF0000',
    fontSize: 17,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  areaUtilitario: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  areaRadio: {
    flexDirection: 'row',
    alignItems: 'center',
 
  },
  botao: {
    backgroundColor: 'green',
    width: '60%',
    alignSelf: "center",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  botaoTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  input: {
    borderWidth: 0.5,
    borderColor: '#000',
    width: '90%',
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
    justifyContent: "center",
    marginHorizontal: 5,
    alignSelf: "center",
    backgroundColor: '#fff',
    height: 45,
  },
  titulo:
  {
    fontSize: 22,
    color: "#000",
    marginLeft: 23,
    marginTop: 15,
    fontWeight: 'bold'
  },
  imagem:{
    width: 300,
    height: 150,
     marginLeft: 50,
     padding: 10,
  }
});