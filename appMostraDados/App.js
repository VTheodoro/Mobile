import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [cpf, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');

  const [exibircpf, setExibircpf] = useState('');
  const [exibirTelefone, setExibirTelefone] = useState('');
  const [exibirEmail, setExibirEmail] = useState('');
  const [exibirSenha, setExibirSenha] = useState('');

  function mostrarDados() {
    if (cpf == '' || telefone == '' || email == '' || senha == '') {
      alert("Preencha todos os campos corretamente.");
    }
    else {
      setExibircpf(cpf);
      setExibirEmail(email);
      setExibirTelefone(telefone);
      setExibirSenha(senha);
    }
  }


  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Text style={styles.textos}>Preencha os seguintes dados:</Text>

      <TextInput placeholder="CPF..." style={styles.textinput} onChangeText={text => setCPF(text)} />
      <TextInput placeholder="Email..." style={styles.textinput} onChangeText={text => setEmail(text)} />
      <TextInput placeholder="Numero de Telefone..." style={styles.textinput} onChangeText={text => setTelefone(text)} />
      <TextInput secureTextEntry={true} placeholder="Senha..." style={styles.textinput} onChangeText={text => setSenha(text)} />

      <Button
        onPress={mostrarDados}
        title="Continuar"
        color="green"
      />

      <View style={styles.content}>
        <Text style={styles.textos}>Confirme os Dados Abaixo</Text>
        <Text style={styles.textos2}>CPF: {exibircpf}</Text>
        <Text style={styles.textos2}>Email: {exibirEmail}</Text>
        <Text style={styles.textos2}>Telefone: {exibirTelefone}</Text>
        <Text style={styles.textos2}>Senha: {exibirSenha}</Text>
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27282D',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  textos: {
    color: 'white',
    fontSize: 25,
    marginBottom: 20,
  },

  content: {
    alignItems: 'flex-start', // Alinha o conteúdo à esquerda
    marginTop: 20,
  },

  textos2: {
    color: 'white',
    fontSize: 20,
    textAlign: 'left',
  },

  textinput: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10,
  }
});
