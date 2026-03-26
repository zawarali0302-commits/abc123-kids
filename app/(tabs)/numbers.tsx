import { Text, FlatList, TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NUMBERS } from '../../constants/alphabetData';
import AppBannerAd from '@/components/bannerAd';

const { width } = Dimensions.get('window');
const CARD_SIZE = (width - 48) / 3;

export default function NumbersScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Numbers 🔢</Text>
        <Text style={styles.subtitle}>Tap a number to learn!</Text>
      </View>

      {/* Grid */}
      <FlatList
        data={NUMBERS}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: item.color }]}
            onPress={() => router.push({ pathname: '/number/[id]', params: { id: item.id } })}
            activeOpacity={0.8}
          >
            <Text style={styles.number}>{item.number}</Text>
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.word}>{item.word}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Ad */}
      <AppBannerAd />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F0',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  title: {
    fontFamily: 'Fredoka-Bold',
    fontSize: 36,
    color: '#4ECDC4',
  },
  subtitle: {
    fontFamily: 'Fredoka',
    fontSize: 16,
    color: '#888',
    marginTop: 2,
  },
  grid: {
    paddingHorizontal: 12,
    paddingBottom: 24,
  },
  card: {
    width: CARD_SIZE,
    height: CARD_SIZE,
    margin: 6,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
  },
  number: {
    fontFamily: 'Fredoka-Bold',
    fontSize: 42,
    color: '#fff',
  },
  emoji: {
    fontSize: 22,
    marginVertical: 2,
  },
  word: {
    fontFamily: 'Fredoka',
    fontSize: 12,
    color: 'rgba(255,255,255,0.9)',
  },
});