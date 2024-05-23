import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Principal({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Tela Principal</Text>

            <Button
                title="Ir para tela 1"
                onPress={() => navigation.navigate("Tela1")}
            />
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
});
