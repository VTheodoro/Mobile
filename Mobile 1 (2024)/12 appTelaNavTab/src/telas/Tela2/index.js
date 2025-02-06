import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Tela2l({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Tela 2</Text>

            <Button
                title="Ir para tela 3"
                onPress={() => navigation.navigate("Tela3")}
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
