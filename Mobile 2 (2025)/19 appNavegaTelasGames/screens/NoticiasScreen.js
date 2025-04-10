import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Image, 
  TouchableOpacity 
} from 'react-native';

const news = [
  {
    id: '1',
    title: 'Novo DLC para Elden Ring anunciado',
    summary: 'FromSoftware revela expansão com 30 horas de conteúdo novo que continuará a história de Elden Ring.',
    category: 'Lançamentos',
    image: { uri: 'https://blog.navegamer.com.br/wp-content/uploads/2023/01/9edf816d-5625-45d2-9ef6-8b2ae65bb7eaCover_Elder-Ring-1024x640.webp' },
  },
  {
    id: '2',
    title: 'Nintendo anuncia sucessor do Switch',
    summary: 'Novo console chegará em 2025 com hardware significativamente mais potente e retrocompatibilidade.',
    category: 'Hardware',
    image: { uri: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
  },
];

export default function NoticiasScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Notícias Gamers</Text>
      
      <View style={styles.categories}>
        <TouchableOpacity style={[styles.categoryButton, styles.activeCategory]}>
          <Text style={[styles.categoryText, styles.activeCategoryText]}>Todas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Lançamentos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Hardware</Text>
        </TouchableOpacity>
      </View>
      
      {news.map(item => (
        <View key={item.id} style={styles.newsCard}>
          <Image source={item.image} style={styles.newsImage} />
          <View style={styles.newsContent}>
            <Text style={styles.newsCategory}>{item.category}</Text>
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text style={styles.newsSummary}>{item.summary}</Text>
            <TouchableOpacity style={styles.readMoreButton}>
              <Text style={styles.readMoreText}>Ler mais →</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  categories: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  categoryButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  activeCategory: {
    backgroundColor: '#e94560',
  },
  categoryText: {
    color: '#fff',
    fontSize: 14,
  },
  activeCategoryText: {
    fontWeight: 'bold',
  },
  newsCard: {
    backgroundColor: '#1a1a2e',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  newsImage: {
    width: '100%',
    height: 180,
  },
  newsContent: {
    padding: 15,
  },
  newsCategory: {
    color: '#e94560',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  newsSummary: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 15,
    lineHeight: 20,
  },
  readMoreButton: {
    alignSelf: 'flex-end',
  },
  readMoreText: {
    color: '#e94560',
    fontWeight: 'bold',
  },
});