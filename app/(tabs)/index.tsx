import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>ABC & 123</Text>
        <Text style={styles.subtitle}>Let's learn today! 🌟</Text>
      </View>

      {/* Big buttons */}
      <View style={styles.buttonRow}>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#FF6B6B' }]}
          onPress={() => router.push('/(tabs)/letters')}
          activeOpacity={0.85}
        >
          <Text style={styles.cardEmoji}>🔤</Text>
          <Text style={styles.cardTitle}>Letters</Text>
          <Text style={styles.cardSub}>A to Z</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#4ECDC4' }]}
          onPress={() => router.push('/(tabs)/numbers')}
          activeOpacity={0.85}
        >
          <Text style={styles.cardEmoji}>🔢</Text>
          <Text style={styles.cardTitle}>Numbers</Text>
          <Text style={styles.cardSub}>0 to 9</Text>
        </TouchableOpacity>

      </View>

      {/* Bottom encouragement */}
      <Text style={styles.footer}>Tap something to start! 👇</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F0',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 24,
  },
  header: {
    alignItems: 'center',
    marginTop: 16,
  },
  title: {
    fontFamily: 'Fredoka-Bold',
    fontSize: 48,
    color: '#FF6B6B',
    letterSpacing: 2,
  },
  subtitle: {
    fontFamily: 'Fredoka',
    fontSize: 20,
    color: '#888',
    marginTop: 4,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 16,
    paddingHorizontal: 24,
  },
  card: {
    width: (width - 64) / 2,
    aspectRatio: 0.85,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  cardEmoji: {
    fontSize: 52,
    marginBottom: 12,
  },
  cardTitle: {
    fontFamily: 'Fredoka-Bold',
    fontSize: 28,
    color: '#fff',
  },
  cardSub: {
    fontFamily: 'Fredoka',
    fontSize: 16,
    color: 'rgba(255,255,255,0.85)',
    marginTop: 4,
  },
  footer: {
    fontFamily: 'Fredoka',
    fontSize: 18,
    color: '#BBBBBB',
    marginBottom: 8,
  },
});