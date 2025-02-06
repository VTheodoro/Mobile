import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Tela1l({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Tela 1</Text>

            <Button
                title="Ir para tela 2"
                onPress={() => navigation.navigate("Tela2")}
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
