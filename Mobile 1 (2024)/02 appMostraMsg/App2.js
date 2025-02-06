import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React,{useState} from 'react';

export default function App() {

//Declarando as "variáveis que serão utilizadas durante o código:
const [nome, setNome] = useState('');
const[nomeDigitado,setNomeDigitado] = useState("");

//Criando a Função para verificar se o campo do nome foi preenchido e definindo o nome para que ele possa aparecer na tela
function exibir(){
if(nome == ''){
  alert("Preencha o campo nome para que o aplicativo funcione.");
}

else{
  setNomeDigitado(nome);
}

}

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Digite seu nome:</Text>
<TextInput
style={styles.input}
pleaceholder='Digite seu nome Aqui'
onChangeText={(nome) => setNome(nome)}
>
</TextInput>

<Button title="Exibir Nome" onPress={exibir}></Button>

<Text style={styles.textomsg}>Nome Digitado: {nomeDigitado}</Text>


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

  input:{
    width:200,
    borderWidth:6,
    borderColor: '#000',
    height: 45,
    fontSize:20,
    alignItems:'center',
    paddin: 10,
    marginBottom: 20
  },
  
  texto:{
textAlign:'center',
fontSize: 30,
color: '#000',
paddingRight: 20,
  }

  textomsg:{
    textAlign:'center',
    fontSize: 30,
    color: '#0ff',
    paddingRight: 20,
      }

});
