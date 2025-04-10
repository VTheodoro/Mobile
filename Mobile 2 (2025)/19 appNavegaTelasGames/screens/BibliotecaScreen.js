import { 
    StyleSheet, 
    Text, 
    View, 
    ScrollView, 
    TouchableOpacity,
    FlatList 
  } from 'react-native';
  import { Ionicons } from '@expo/vector-icons';
  
  const games = [
    { id: '1', name: 'The Witcher 3', genre: 'RPG', status: 'Zerado', hours: 120 },
    { id: '2', name: 'God of War', genre: 'Ação/Aventura', status: 'Jogando', hours: 45 },
    { id: '3', name: 'Hollow Knight', genre: 'Metroidvania', status: 'Quero jogar', hours: 0 },
    { id: '4', name: 'Red Dead Redemption 2', genre: 'Ação/Aventura', status: 'Jogando', hours: 80 },
    { id: '5', name: 'Stardew Valley', genre: 'Simulação', status: 'Zerado', hours: 65 },
  ];
  
  export default function BibliotecaScreen() {
    const renderGameItem = ({ item }) => (
      <View style={styles.gameCard}>
        <View style={styles.gameHeader}>
          <Text style={styles.gameName}>{item.name}</Text>
          <View style={[
            styles.statusBadge,
            item.status === 'Zerado' && { backgroundColor: '#4caf50' },
            item.status === 'Jogando' && { backgroundColor: '#ff9800' },
            item.status === 'Quero jogar' && { backgroundColor: '#9e9e9e' },
          ]}>
            <Text style={styles.statusText}>{item.status}</Text>
          </View>
        </View>
        <Text style={styles.gameGenre}>{item.genre}</Text>
        {item.hours > 0 && (
          <Text style={styles.gameHours}>⏱️ {item.hours}h jogadas</Text>
        )}
      </View>
    );
  
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Minha Biblioteca</Text>
          
          <FlatList
            data={games}
            renderItem={renderGameItem}
            keyExtractor={item => item.id}
            scrollEnabled={false}
            style={styles.gamesList}
          />
          
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add-circle" size={24} color="#fff" />
            <Text style={styles.addButtonText}>Adicionar Jogo</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0f3460',
    },
    scrollContainer: {
      padding: 20,
      paddingBottom: 40,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 20,
    },
    gamesList: {
      width: '100%',
    },
    gameCard: {
      backgroundColor: '#1a1a2e',
      padding: 15,
      borderRadius: 10,
      marginBottom: 15,
    },
    gameHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 5,
    },
    gameName: {
      fontSize: 18,
      fontWeight: '600',
      color: '#fff',
      flex: 1,
    },
    statusBadge: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 20,
    },
    statusText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold',
    },
    gameGenre: {
      color: '#aaa',
      fontSize: 14,
      marginBottom: 5,
    },
    gameHours: {
      color: '#e94560',
      fontSize: 12,
    },
    addButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#e94560',
      padding: 15,
      borderRadius: 10,
      marginTop: 10,
      gap: 10,
    },
    addButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });