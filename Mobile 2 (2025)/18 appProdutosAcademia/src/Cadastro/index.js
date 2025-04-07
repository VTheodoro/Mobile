import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Switch, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function CadastroProduto({ navigation }) {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');
  const [disponivel, setDisponivel] = useState(false);

  const handleCadastrar = () => {
    alert(`Produto cadastrado com sucesso!\n
Nome: ${nome}
Preço: R$${preco}
Categoria: ${categoria}
Disponível: ${disponivel ? 'Sim' : 'Não'}`);

    setNome('');
    setPreco('');
    setCategoria('');
    setDisponivel(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image 
        source={{uri: 'https://static.wixstatic.com/media/2edbed_66ddb7052cbb40918aeb44b7221ed262~mv2.png/v1/fill/w_340,h_340,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%20academia%20central%20fitness.png'}} 
        style={styles.logo}
      />
      
      <Text style={styles.title}>Cadastro de Produtos Academia</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço"
        keyboardType="numeric"
        value={preco}
        onChangeText={setPreco}
      />

      <TextInput
        style={styles.input}
        placeholder="Categoria (ex: Halteres, Máquinas)"
        value={categoria}
        onChangeText={setCategoria}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Disponível para venda:</Text>
        <Switch
          trackColor={{ false: "#767577", true: "rgb(236, 173, 0)" }}
          thumbColor={disponivel ? "rgb(236, 173, 0)" : "#f4f3f4"}
          value={disponivel}
          onValueChange={setDisponivel}
        />
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={handleCadastrar}
      >
        <Text style={styles.buttonText}>Cadastrar Produto</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('Produtos')}
      >
        <Text style={styles.secondaryButtonText}>Ver Produtos</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'rgb(0, 0, 0)',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgb(236, 173, 0)',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  switchText: {
    fontSize: 16,
    color: '#fff',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgb(236, 173, 0)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    marginTop: 15,
    padding: 10,
  },
  secondaryButtonText: {
    color: 'rgb(236, 173, 0)',
    fontSize: 16,
    fontWeight: '500',
  },
});