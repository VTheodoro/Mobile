import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import BibliotecaScreen from './screens/BibliotecaScreen';
import NoticiasScreen from './screens/NoticiasScreen';
import PerfilScreen from './screens/PerfilScreen';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1a1a2e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Biblioteca" 
          component={BibliotecaScreen}
          options={({ navigation }) => ({
            title: 'Minha Biblioteca',
            headerRight: () => (
              <View style={{ flexDirection: 'row', gap: 15 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Notícias')}>
                  <Ionicons name="newspaper" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                  <Ionicons name="person" size={24} color="white" />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Stack.Screen 
          name="Notícias" 
          component={NoticiasScreen} 
          options={{ title: 'Notícias Gamers' }}
        />
        <Stack.Screen 
          name="Perfil" 
          component={PerfilScreen} 
          options={{ title: 'Meu Perfil' }}
        />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}