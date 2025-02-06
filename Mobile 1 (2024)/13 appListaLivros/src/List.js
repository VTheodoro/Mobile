import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet, Image, ScrollView } from 'react-native';

const Lista = () => {
    const livros = [
        { id: 1, nome: 'É assim que acaba', autor: 'Collen Hoover' },
        { id: 2, nome: 'Dracula', autor: 'Bram Stoker' },
        { id: 3, nome: 'Clube da Luta', autor: 'Chuck Palahniuk' },
        { id: 4, nome: 'O Homem Mais Inteligente da História', autor: 'Augusto Cury' },
        { id: 5, nome: 'Hades', autor: 'Alexandra Adornetto' },
        { id: 6, nome: 'Quatro Vidas de um Cachorro', autor: 'W. Bruce Cameron' },
        { id: 7, nome: 'Todas as Faces da Morte', autor: 'Sue Black' },
        { id: 8, nome: 'Os Sete Maridos de Evelyn Hugo', autor: 'Taylor Jenkins Reid' },
        { id: 9, nome: 'A Biblioteca da Meia-Noite', autor: 'Matt Haig' },
        { id: 10, nome: 'Os Dois Morrem no Final', autor: 'Adam Silvera' },
    ];

    const alertItemName = (item) => {
        Alert.alert("Sobre o livro '"+ item.nome+"'","Autor: " + item.autor);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image style={styles.logo} source={require('../assets/logolivro.jpeg')} />
            <Text style={styles.texto}>THEODORO'S LIVRARIA</Text>
            <FlatList
                data={livros}
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
        backgroundColor: 'black',
        paddingTop: 80,
    },
    logo: {
        width: 100,
        height: 100,
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#ffffff',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        backgroundColor: '#ffffff',
        marginBottom: 10,
        textAlign: 'center',
        borderRadius: 5,
    },
});

export default Lista;