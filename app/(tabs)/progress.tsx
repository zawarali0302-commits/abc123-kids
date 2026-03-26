import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useProgressStore } from '../../store/useProgressStore';
import { LETTERS, NUMBERS } from '../../constants/alphabetData';

export default function ProgressScreen() {
  const learnedLetters = useProgressStore((s) => s.learnedLetters);
  const learnedNumbers = useProgressStore((s) => s.learnedNumbers);

  const letterPercent = Math.round((learnedLetters.length / LETTERS.length) * 100);
  const numberPercent = Math.round((learnedNumbers.length / NUMBERS.length) * 100);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Progress ⭐</Text>
          <Text style={styles.subtitle}>Look how much you've learned!</Text>
        </View>

        {/* Letters progress */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>🔤 Letters</Text>
            <Text style={styles.sectionCount}>
              {learnedLetters.length} / {LETTERS.length}
            </Text>
          </View>

          {/* Progress bar */}
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, {
              width: `${letterPercent}%`,
              backgroundColor: '#FF6B6B',
            }]} />
          </View>

          {/* Letter grid */}
          <View style={styles.dotGrid}>
            {LETTERS.map((l) => (
              <View
                key={l.id}
                style={[
                  styles.letterDot,
                  {
                    backgroundColor: learnedLetters.includes(l.id)
                      ? l.color
                      : '#E0E0E0',
                  },
                ]}
              >
                <Text style={[
                  styles.letterDotText,
                  { color: learnedLetters.includes(l.id) ? '#fff' : '#aaa' }
                ]}>
                  {l.letter}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Numbers progress */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>🔢 Numbers</Text>
            <Text style={styles.sectionCount}>
              {learnedNumbers.length} / {NUMBERS.length}
            </Text>
          </View>

          {/* Progress bar */}
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, {
              width: `${numberPercent}%`,
              backgroundColor: '#4ECDC4',
            }]} />
          </View>

          {/* Number grid */}
          <View style={styles.dotGrid}>
            {NUMBERS.map((n) => (
              <View
                key={n.id}
                style={[
                  styles.letterDot,
                  {
                    backgroundColor: learnedNumbers.includes(n.id)
                      ? n.color
                      : '#E0E0E0',
                  },
                ]}
              >
                <Text style={[
                  styles.letterDotText,
                  { color: learnedNumbers.includes(n.id) ? '#fff' : '#aaa' }
                ]}>
                  {n.number}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Encouragement */}
        <View style={styles.encouragement}>
          <Text style={styles.encouragementText}>
            {letterPercent === 100 && numberPercent === 100
              ? '🎉 You learned everything! Amazing!'
              : letterPercent + numberPercent > 50
              ? '🌟 You are doing great, keep going!'
              : '💪 Keep tapping, you can do it!'}
          </Text>
        </View>

      </ScrollView>
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
    color: '#F7A072',
  },
  subtitle: {
    fontFamily: 'Fredoka',
    fontSize: 16,
    color: '#888',
    marginTop: 2,
  },
  section: {
    marginHorizontal: 20,
    marginBottom: 24,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontFamily: 'Fredoka-Bold',
    fontSize: 20,
    color: '#333',
  },
  sectionCount: {
    fontFamily: 'Fredoka',
    fontSize: 16,
    color: '#888',
  },
  progressBarBg: {
    height: 12,
    backgroundColor: '#F0F0F0',
    borderRadius: 6,
    marginBottom: 16,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 6,
  },
  dotGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  letterDot: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  letterDotText: {
    fontFamily: 'Fredoka-Bold',
    fontSize: 16,
  },
  encouragement: {
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 32,
    padding: 16,
    backgroundColor: '#FFF3E0',
    borderRadius: 20,
  },
  encouragementText: {
    fontFamily: 'Fredoka',
    fontSize: 18,
    color: '#F7A072',
    textAlign: 'center',
  },
});