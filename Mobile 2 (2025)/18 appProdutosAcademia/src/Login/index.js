import React, { useState, useEffect } from 'react';
import { Animated, ImageBackground, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView, Image, Text } from 'react-native';

export default function Login({ navigation }) {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 90 }));
  const [opac] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
      }),
      Animated.timing(opac, {
        toValue: 1,
        duration: 2000,
      }),
    ]).start();
  }, []);

  return (
    <ImageBackground 
      source={{ uri: 'https://wallpapers.com/images/featured/academia-2szi1xph05943dbk.jpg' }} 
      style={styles.imgBg}
    >
      <KeyboardAvoidingView style={styles.background}>
        <Animated.View style={[styles.formulario, {
          opacity: opac,
          transform: [{ translateY: offset.y }]
        }]}>
          <Image 
            source={{ uri: 'https://static.wixstatic.com/media/2edbed_66ddb7052cbb40918aeb44b7221ed262~mv2.png/v1/fill/w_340,h_340,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%20academia%20central%20fitness.png' }} 
            style={styles.logo}
          />

          <TextInput
            style={styles.input}
            placeholder="Usuário"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate('Main')} // Alterado para navegar para Main
          >
            <Text style={styles.textoBotao}>Entrar</Text>
          </TouchableOpacity>
        </Animated.View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imgBg: {
    flex: 1,
    resizeMode: 'cover',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  formulario: {
    width: '80%',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  botao: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(236, 173, 0, 0.96)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});