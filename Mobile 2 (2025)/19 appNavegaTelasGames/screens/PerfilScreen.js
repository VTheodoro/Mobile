import { 
    StyleSheet, 
    Text, 
    View, 
    ScrollView, 
    Image 
  } from 'react-native';
  
  const achievements = [
    { id: '1', name: 'Primeiros Passos', unlocked: true },
    { id: '2', name: 'Viciado', unlocked: true },
    { id: '3', name: 'Colecionador', unlocked: false },
    { id: '4', name: 'Completista', unlocked: false },
  ];
  
  export default function PerfilScreen() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileHeader}>
          <Image 
            source={require('../assets/images/avatar.jpg')}
            style={styles.avatar}
          />
          <Text style={styles.nickname}>Victor Theodoro</Text>
          <Text style={styles.memberSince}>Membro desde: Jan 2020</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Estatísticas</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>15</Text>
              <Text style={styles.statLabel}>Jogos</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>7</Text>
              <Text style={styles.statLabel}>Zerados</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>320h</Text>
              <Text style={styles.statLabel}>Jogadas</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Conquistas</Text>
          <View style={styles.achievementsGrid}>
            {achievements.map(item => (
              <View key={item.id} style={[
                styles.achievementCard,
                !item.unlocked && styles.lockedAchievement
              ]}>
                <View style={styles.achievementIcon}>
                  {item.unlocked ? (
                    <Text style={styles.achievementIconText}>🏆</Text>
                  ) : (
                    <Text style={styles.achievementIconText}>🔒</Text>
                  )}
                </View>
                <Text style={styles.achievementName}>{item.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
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
    profileHeader: {
      alignItems: 'center',
      marginBottom: 30,
    },
    avatar: {
      width: 120,
      height: 120,
      borderRadius: 60,
      borderWidth: 3,
      borderColor: '#e94560',
      marginBottom: 15,
    },
    nickname: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 5,
    },
    memberSince: {
      color: '#aaa',
      fontSize: 14,
    },
    section: {
      marginBottom: 25,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 15,
      paddingLeft: 10,
      borderLeftWidth: 3,
      borderLeftColor: '#e94560',
    },
    statsGrid: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    statCard: {
      backgroundColor: '#1a1a2e',
      borderRadius: 10,
      padding: 15,
      width: '30%',
      alignItems: 'center',
    },
    statNumber: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#e94560',
      marginBottom: 5,
    },
    statLabel: {
      color: '#fff',
      fontSize: 12,
    },
    achievementsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: 10,
    },
    achievementCard: {
      width: '48%',
      backgroundColor: '#1a1a2e',
      borderRadius: 10,
      padding: 15,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    lockedAchievement: {
      opacity: 0.6,
    },
    achievementIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#0f3460',
      justifyContent: 'center',
      alignItems: 'center',
    },
    achievementIconText: {
      fontSize: 20,
    },
    achievementName: {
      color: '#fff',
      fontSize: 14,
      flex: 1,
    },
  });