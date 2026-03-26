import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NUMBERS } from '../../constants/alphabetData';
import * as Speech from 'expo-speech';
import { useEffect } from 'react';
import { useProgressStore } from '@/store/useProgressStore';

export default function NumberScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const item = NUMBERS.find((n) => n.id === id);
  const currentIndex = NUMBERS.findIndex((n) => n.id === id);
  const prevNumber = NUMBERS[currentIndex - 1];
  const nextNumber = NUMBERS[currentIndex + 1];

  const markNumberLearned = useProgressStore((state) => state.markNumberLearned);

  useEffect(() => {
    if (!item) return;
    speakNumber();
    markNumberLearned(item.id);
  }, [id]);

  function speakNumber() {
    if (!item) return;

    // Speak the number word e.g. "Three"
    Speech.speak(item.word, {
      language: 'en',
      pitch: 1.2,
      rate: 0.8,
    });

    // Then count out loud e.g. "1, 2, 3"
    if (item.number > 0) {
      setTimeout(() => {
        const countSequence = Array.from(
          { length: item.number },
          (_, i) => (i + 1).toString()
        ).join(', ');
        Speech.speak(countSequence, {
          language: 'en',
          pitch: 1.2,
          rate: 0.7,
        });
      }, 1000);
    }
  }

  if (!item) return null;

  // Render dots to visually represent the number
  const dots = Array.from({ length: item.number }, (_, i) => i);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: item.color }]}>

      {/* Back button */}
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      {/* Main content — tap to replay */}
      <TouchableOpacity style={styles.content} onPress={speakNumber} activeOpacity={0.8}>
        <Text style={styles.number}>{item.number}</Text>
        <Text style={styles.word}>{item.word}</Text>

        {/* Counting dots */}
        {item.number > 0 && (
          <View style={styles.dotsContainer}>
            {dots.map((i) => (
              <View key={i} style={styles.dot} />
            ))}
          </View>
        )}

        <Text style={styles.emoji}>{item.emoji}</Text>
        <Text style={styles.tapHint}>🔊 Tap to hear</Text>
      </TouchableOpacity>

      {/* Prev / Next navigation */}
      <View style={styles.navRow}>
        <TouchableOpacity
          style={[styles.navBtn, !prevNumber && styles.navBtnDisabled]}
          onPress={() => prevNumber && router.push({ pathname: '/number/[id]', params: { id: prevNumber.id } })}
          disabled={!prevNumber}
        >
          <Text style={styles.navText}>← {prevNumber?.number ?? ''}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navBtn, !nextNumber && styles.navBtnDisabled]}
          onPress={() => nextNumber && router.push({ pathname: '/number/[id]', params: { id: nextNumber.id } })}
          disabled={!nextNumber}
        >
          <Text style={styles.navText}>{nextNumber?.number ?? ''} →</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 24,
  },
  backBtn: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    backgroundColor: 'rgba(255,255,255,0.3)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  backText: {
    fontFamily: 'Fredoka',
    fontSize: 18,
    color: '#fff',
  },
  content: {
    alignItems: 'center',
    gap: 12,
  },
  number: {
    fontFamily: 'Fredoka-Bold',
    fontSize: 140,
    color: '#fff',
    lineHeight: 160,
  },
  word: {
    fontFamily: 'Fredoka-Bold',
    fontSize: 42,
    color: '#fff',
  },
  dotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: 240,
    gap: 8,
    marginVertical: 8,
  },
  dot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  emoji: {
    fontSize: 60,
  },
  tapHint: {
    fontFamily: 'Fredoka',
    fontSize: 16,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 4,
  },
  navRow: {
    flexDirection: 'row',
    gap: 16,
    paddingHorizontal: 24,
    width: '100%',
    marginBottom: 16,
  },
  navBtn: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.3)',
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: 'center',
    minWidth: 120,
  },
  navBtnDisabled: {
    opacity: 0.3,
  },
  navText: {
    fontFamily: 'Fredoka-Bold',
    fontSize: 22,
    color: '#fff',
  },
});