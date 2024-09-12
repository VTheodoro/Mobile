import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, TextInput, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';  // Make sure to import axios

export default function App() {
  const api = 'http://10.68.36.142/2mtec/apireact/';
  const [lista, setLista] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [id, setId] = useState('0');
  const [buscar, setBuscar] = useState('');
  const [abrir, setAbrir] = useState(false);

  useEffect(() => {
    listaDados();
  }, []);

  async function listaDados() {
    try {
      const res = await axios.get(api + 'list.php?busca=' + buscar);
      setLista(res.data.result);  // Make sure to update the state
    } catch (error) {
      console.error('Error fetching data', error);
    }
  }

  async function add() {
    const obj = { nome, email, senha, id };
    try {
      const res = await axios.post(api + 'add.php', obj);
      if (res.data.sucess === true) {
        limparCampos();
      } else if (res.data.sucess === 'Email ja Cadastrado!') {
        mensagemDuplicidade();
      }
      listaDados();
      setAbrir(false);
    } catch (error) {
      console.error('Error adding user', error);
    }
  }

  function limparCampos() {
    setNome('');
    setEmail('');
    setSenha('');
    setId('0');
  }

  const mensagemDuplicidade = () =>
    Alert.alert("Erro ao Salvar", "Email já Cadastrado", [{ text: "OK", onPress: () => setAbrir(true) }]);

  return (
    <View>
      <View style={styles.navbar}>
        <Text style={styles.textonavbar}>Lista de Usuários</Text>
        <TouchableOpacity style={styles.botao} onPress={() => setAbrir(true)}>
          <Ionicons name="add" size={30} color="#FFF" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.grid}>
          {lista.map((item) => (
            <View style={styles.griditem} key={item.id}>
              <Text style={{ color: '#585858' }}>{item.id} - {item.name} - {item.email}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <Modal animationType='slide' visible={abrir} transparent={false}>
        <SafeAreaView style={styles.modal}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setAbrir(false)}>
              <Ionicons style={{ marginLeft: 5, marginRight: 5 }} name="arrow-back" size={35} color="#FFF" />
            </TouchableOpacity>
            <Text style={styles.textoModal}>Inserir Usuário</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Insira um Nome"
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            style={styles.input}
            placeholder="Insira um email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Insira uma senha"
            value={senha}
            onChangeText={setSenha}
          />
          <TouchableOpacity style={styles.botaoModal} onPress={add}>
            <Text style={styles.textoBotaoModal}>Salvar</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: '#b2b2b2',
  },
  textoModal: {
    color: '#FFF',
    marginLeft: 15,
    fontSize: 25,
  },
  modalHeader: {
    marginLeft: 10,
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    margin: 8,
    padding: 8,
    color: '#000',
    fontSize: 13,
  },
  botaoModal: {
    backgroundColor: '#00335c',
    borderRadius: 5,
    margin: 5,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotaoModal: {
    fontSize: 16,
    color: '#FFF',
  },
  navbar: {
    backgroundColor: '#00335c',
    padding: 12,
    color: '#FFF',
    flexDirection: 'row',
    marginTop: 35,
  },
  textonavbar: {
    fontSize: 20,
    color: '#FFF',
    marginTop: 4,
    marginBottom: 2,
  },
  botao: {
    position: 'absolute',
    right: 13,
    marginTop: 11,
  },
  grid: {
    marginTop: 8,
  },
  griditem: {
    padding: 11,
    borderBottomColor: "#dbdbdb",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
