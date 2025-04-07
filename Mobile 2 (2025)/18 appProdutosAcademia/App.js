import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Login from './src/Login';
import Produtos from './src/Produtos';
import CadastroProduto from './src/Cadastro';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          const iconColor = 'rgb(255, 187, 0)';
          const iconSize = 25;

          if (route.name === 'Cadastro') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Produtos') {
            iconName = focused ? 'list' : 'list-outline';
          }

          return <Ionicons name={iconName} size={iconSize} color={iconColor} />;
        },
        tabBarStyle: {
          backgroundColor: 'rgb(39, 39, 39)',
          borderTopWidth: 1,
          borderTopColor: '#333333',
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#666666',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Cadastro" component={CadastroProduto} />
      <Tab.Screen name="Produtos" component={Produtos} />
    </Tab.Navigator>
  );
}

function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Main"
        component={TabsNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}