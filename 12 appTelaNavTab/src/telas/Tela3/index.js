import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Tela3({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Tela 3</Text>

            <Button
                title="Ir para Tela Principal"
                onPress={() => navigation.navigate("Principal")}
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
