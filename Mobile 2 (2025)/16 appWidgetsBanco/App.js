import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";
import { Switch } from "react-native";

export default function App() {
  //Para colocar Máscara no telefone ao digitar

  const formatPhoneNumber = (text) => {
    // Remove todos os caracteres que não são números
    let cleaned = text.replace(/\D/g, "");

    // Formata o telefone para o padrão (XX) XXXXX-XXXX
    if (cleaned.length > 10) {
      return cleaned.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
    } else if (cleaned.length > 6) {
      return cleaned.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
    } else if (cleaned.length > 2) {
      return cleaned.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
    } else {
      return cleaned;
    }
  };

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [sexo, setSexo] = useState(1);
  const [limite, setLimite] = useState(100);
  const [estudante, setEstudante] = useState(false);
  const sexos = [
    { sexoNome: "Masculino", valor: 1 },
    { sexoNome: "Feminino", valor: 2 },
  ];

  function enviarDados() {
    if (!nome || !telefone) {
      alert("Preencha todos os campos!");
      return;
    }
    alert(
      `Conta Aberta com Sucesso!\n\nNome: ${nome}\nTelefone: ${telefone}\nSexo: ${
        sexos.find((s) => s.valor === sexo)?.sexoNome
      }\nLimite Conta: ${limite.toFixed(2)}\nConta Estudante: ${
        estudante ? "Ativo" : "Inativo"
      }`
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground
      style={styles.imagemFundo}
      source={require("./assets/fundo.jpg")}
      >

        <Text style={styles.bancoLogo}>Banco Theodoro</Text>

        <Image style={styles.image} source={require("./assets/celular.png")} />

        <View style={styles.areaFormulario}>
          <Text style={styles.textoNome}>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome aqui!"
            onChangeText={setNome}
          />

          <Text style={styles.textoNome}>Telefone:</Text>
          <TextInput
            style={styles.input}
            placeholder="(99) 99999-9999"
            value={telefone}
            onChangeText={(text) => setTelefone(formatNumber(text))}
            keyboardType="numeric"
            maxLength={15}
          />

          <Text>Telefone: {telefone}</Text>

          <Text style={styles.textNome}>Sexo:</Text>
          <Picker selectedValue={sexo} onValueChange={setSexo}>
            {sexos.map((item) => (
              <Picker.Item
                key={item.valor}
                label={item.sexoNome}
                value={item.valor}
              />
            ))}
          </Picker>

          <Text style={styles.textoNome}>
            Seu limite: R${limite.toFixed(0)}
          </Text>
          <Slider
            style={{ width: 300, height: 40 }}
            minimumValue={100}
            maximumValue={10000}
            step={100}
            value={limite}
            onValueChange={setLimite}
          />

          <Text style={styles.textoNome}>Estudante:</Text>
          <Switch
            value={estudante}
            onValueChange={setEstudante}
            trackColor={{ false: "#ccc", true: "#4caf50" }}
            thumbColor={estudante ? "#4caf50" : "#ccc"}
          />

          <TouchableOpacity style={styles.botao} onPress={enviarDados}>
            <Text style={styles.botaoTexto}>Abrir Conta</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  areaformulario: {
    flexDirection: "column",
    margin: 10,
    gap: 25,
  },
  textoNome: {
    fontSize: 17,
    color: "#000000",
    fontWeight: "bold",
  },
  bancoLogo: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
  },
  areaSexo: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 5,
  },
  pickerSexo: {
    flex: 1,
  },
  limiteArea: {
    flexDirection: "row",
    paddingBottom: 5,
  },
  limiteTexto: {
    color: "#FF0000",
    fontSize: 17,
    fontWeight: "bold",
    paddingLeft: 5,
  },
  areaEstudante: {
    alignItems: "center",
    justifyContent: "center",
  },
  botao: {
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    borderRadius: 150,
    margin: 20,
    height: 50,
    width: 150,
  },
  botaoTexto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  imagemFundo: {
    resizeMode: "cover",
    height: "auto",
    width: "auto",
    top: -4,
  },
  image: {
    width: 100,
    height: 100,
    top: -3,
    paddingLeft: 540,
    resizeMode: "contain",
  },
});
