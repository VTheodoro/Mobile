import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Principal from './src/telas/Principal';
import Tela1 from './src/telas/Tela1';
import Tela2 from './src/telas/Tela2';
import Tela3 from './src/telas/Tela3';


export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Principal'>
        <Stack.Screen
          // Para Cada Tela Devo Criar um Stack.Screen:
          name = "Tela1"
          component={Tela1}
          options={{
            title:"Tela 1",
            headerStyle: { backgroundColor: '#3f64c7' },
            headerTintColor: '#FFF',
            headerShown: true
          }}
        >
        </Stack.Screen>

        <Stack.Screen name="Tela2" component={Tela2}></Stack.Screen>
        <Stack.Screen name="Tela3" component={Tela3}></Stack.Screen>
        <Stack.Screen name="Principal" component={Principal}></Stack.Screen>


      </Stack.Navigator>
    </NavigationContainer>

  );
}


