
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
export default function App() {

  function clique(){
    alert("Você Clicou no Botão")
  }  

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Meu nome é Victor Theodoro!</Text>
      <Text style={styles.idade}>Minha idade é 17 anos</Text>
      <Text style={styles.cidade}>Moro na cidade de Jacupiranga!</Text>   
      <TextInput></TextInput>
    <Button
title="Clique Aqui"
onPress={clique}
>
</Button>
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
  
nome:{
  fontSize: 46,
  color: '#aa4',
},

idade:{
  fontSize:30,
  color:'green',
  fontWeight: 'bold'
},

cidade:{
  color: 'purple',
  fontSize: 35,
  fontStyle: 'italic'
},

});

