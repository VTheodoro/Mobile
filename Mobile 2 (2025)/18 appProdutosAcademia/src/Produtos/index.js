import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const data = [
  {
    title: "Halteres Ajustáveis",
    text: "Conjunto de halteres de 10kg a 50kg com ajuste rápido e design ergonômico",
    valor: 799.90,
    img: 'https://m.media-amazon.com/images/I/61tc4ME+y9L._AC_UF1000,1000_QL80_.jpg'
  },
  {
    title: "Esteira Elétrica Profissional",
    text: "Esteira com motor 3.0 HP, inclinação automática e sistema de amortecimento",
    valor: 4599.00,
    img: 'https://http2.mlstatic.com/D_NQ_NP_835522-MLU73338609280_122023-O.webp'
  },
  {
    title: "Kit Anilhas Olímpicas",
    text: "Kit completo com barra olímpica e anilhas de 10kg a 25kg em revestimento de borracha",
    valor: 2899.90,
    img: 'https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/flexfitc/catalog/anillhas-fotos-redirecionadas/anilha-2.jpeg'
  },
];

export default function Produtos() {
  const [background, setBackground] = useState(data[0].img);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: background }} style={styles.imgBg} blurRadius={5}>
        <View style={styles.carouselContainer}>
          <Carousel
            loop
            width={width}
            height={400}
            data={data}
            onSnapToItem={(index) => {
              setBackground(data[index].img);
              setActiveIndex(index);
            }}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={{ uri: item.img }} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
              </View>
            )}
          />
        </View>

        <ScrollView style={styles.infoContainer}>
          <View style={styles.details}>
            <Text style={styles.productTitle}>{data[activeIndex].title}</Text>
            <Text style={styles.price}>R$ {data[activeIndex].valor.toFixed(2)}</Text>
            <Text style={styles.description}>{data[activeIndex].text}</Text>
            
            <TouchableOpacity style={styles.buyButton}>
              <Icon name="add-shopping-cart" size={24} color="white" />
              <Text style={styles.buyButtonText}>Adicionar ao Carrinho</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBg: {
    flex: 1,
  },
  carouselContainer: {
    height: 400,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
    marginHorizontal: 10,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    color: '#333',
  },
  infoContainer: {
    flex: 1,
    backgroundColor: 'rgba(39, 39, 39, 0.95)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  details: {
    paddingBottom: 30,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgb(236, 173, 0)',
    marginBottom: 10,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 25,
  },
  buyButton: {
    flexDirection: 'row',
    backgroundColor: 'rgb(236, 173, 0)',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});