import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet, Image, ScrollView } from 'react-native';

const Lista = () => {
    const produtos = [
        { 
            id: '1', 
            nome: 'Coca-Cola', 
            descricao: 'Refrigerante clássico com sabor inconfundível.', 
            ingredientes: 'Água carbonatada, açúcar, corante caramelo, ácido fosfórico, cafeína, aromatizantes.', 
            preco: 'R$7,00', 
            valorCalorico: '140 kcal por 350 ml' 
        },
        { 
            id: '2', 
            nome: 'Fini', 
            descricao: 'Guloseimas de gelatina com diversos sabores e formatos.', 
            ingredientes: 'Açúcar, glucose de milho, água, gelatina, acidulantes, aromatizantes, corantes.', 
            preco: 'R$9,00', 
            valorCalorico: '320 kcal por 100 g' 
        },
        { 
            id: '3', 
            nome: 'Doritos', 
            descricao: 'Chips de milho crocantes com sabor de queijo.', 
            ingredientes: 'Milho, óleo de palma, queijo cheddar, sal, aromatizantes, corantes.', 
            preco: 'R$12,00', 
            valorCalorico: '500 kcal por 100 g' 
        },
        { 
            id: '4', 
            nome: 'Pepsi', 
            descricao: 'Refrigerante refrescante com sabor de cola.', 
            ingredientes: 'Água carbonatada, açúcar, corante caramelo, ácido fosfórico, cafeína, aromatizantes.', 
            preco: 'R$7,00', 
            valorCalorico: '150 kcal por 350 ml' 
        },
        { 
            id: '5', 
            nome: 'Hershey\'s', 
            descricao: 'Chocolate ao leite com sabor cremoso e rico.', 
            ingredientes: 'Açúcar, leite integral, pasta de cacau, manteiga de cacau, lecitina de soja.', 
            preco: 'R$15,00', 
            valorCalorico: '535 kcal por 100 g' 
        },
        { 
            id: '6', 
            nome: 'Lay\'s', 
            descricao: 'Batatas fritas crocantes com sabor tradicional de sal.', 
            ingredientes: 'Batata, óleo de girassol, sal.', 
            preco: 'R$10,00', 
            valorCalorico: '536 kcal por 100 g' 
        },
        { 
            id: '7', 
            nome: 'KitKat', 
            descricao: 'Chocolate com wafer crocante, uma combinação irresistível.', 
            ingredientes: 'Açúcar, leite integral, massa de cacau, gordura vegetal, leite em pó.', 
            preco: 'R$8,00', 
            valorCalorico: '489 kcal por 100 g' 
        }
    ];    

    const alertItemName = (item) => {
        Alert.alert(item.nome+" - "+item.preco,item.descricao + "\n\nIngredientes: " + item.ingredientes + "\n\nValor Calorico: " + item.valorCalorico);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <Text style={styles.texto}>THEODORO MARKET</Text>
            <FlatList
                data={produtos}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => alertItemName(item)}>
                        <Text style={styles.item}>{item.nome}</Text>
                    </TouchableOpacity>
                )}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#428556',
        paddingTop: 20,
    },
    logo: {
        width: 300,
        height: 200,
    },
    texto: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#ffffff',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        backgroundColor: '#ff842a',
        marginBottom: 10,
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: 5,
    },
});

export default Lista;