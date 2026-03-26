import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LETTERS } from '../../constants/alphabetData';
import * as Speech from 'expo-speech';
import { useEffect } from 'react';
import { useProgressStore } from '@/store/useProgressStore';
import { showInterstitialIfReady } from '@/utils/adManager';

export default function LetterScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const item = LETTERS.find((l) => l.id === id);
  if (!item) return null;

  const currentIndex = LETTERS.findIndex((l) => l.id === id);
  const prevLetter = LETTERS[currentIndex - 1];
  const nextLetter = LETTERS[currentIndex + 1];

  const markLetterLearned = useProgressStore((state) => state.markLetterLearned);
  const letterVisitCount = useProgressStore((state) => state.letterVisitCount);
  const incrementLetterVisit = useProgressStore((state) => state.incrementLetterVisit);

  useEffect(() => {
    if (!item) return;
    speakLetter();
    markLetterLearned(item.id);
    incrementLetterVisit();

    // show interstitial every 3rd visit
  if (letterVisitCount > 0 && letterVisitCount % 3 === 0) {
    showInterstitialIfReady();
  }

  }, [id]);

  function speakLetter() {
    if (!item) return;
    Speech.speak(item.letter, {
      language: 'en',
      pitch: 1.2,
      rate: 0.8,
    });
    setTimeout(() => {
      Speech.speak(item.word, {
        language: 'en',
        pitch: 1.2,
        rate: 0.8,
      });
    }, 800);
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: item.color }]}>

      {/* Back button */}
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      {/* Main content — tap to replay */}
      <TouchableOpacity style={styles.content} onPress={speakLetter} activeOpacity={0.8}>
        <Text style={styles.letter}>{item.letter}</Text>
        <Text style={styles.emoji}>{item.emoji}</Text>
        <Text style={styles.word}>{item.word}</Text>
        <Text style={styles.phonics}>
          "{item.letter.toLowerCase()}" is for {item.word}!
        </Text>
        <Text style={styles.tapHint}>🔊 Tap to hear</Text>
      </TouchableOpacity>

      {/* Prev / Next navigation */}
      <View style={styles.navRow}>
        <TouchableOpacity
          style={[styles.navBtn, !prevLetter && styles.navBtnDisabled]}
          onPress={() => prevLetter && router.push({ pathname: '/letter/[id]', params: { id: prevLetter.id } })}
          disabled={!prevLetter}
        >
          <Text style={styles.navText}>← {prevLetter?.letter ?? ''}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navBtn, !nextLetter && styles.navBtnDisabled]}
          onPress={() => nextLetter && router.push({ pathname: '/letter/[id]', params: { id: nextLetter.id } })}
          disabled={!nextLetter}
        >
          <Text style={styles.navText}>{nextLetter?.letter ?? ''} →</Text>
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
  letter: {
    fontFamily: 'Fredoka-Bold',
    fontSize: 140,
    color: '#fff',
    lineHeight: 160,
  },
  emoji: {
    fontSize: 80,
  },
  word: {
    fontFamily: 'Fredoka-Bold',
    fontSize: 42,
    color: '#fff',
  },
  phonics: {
    fontFamily: 'Fredoka',
    fontSize: 20,
    color: 'rgba(255,255,255,0.85)',
    marginTop: 8,
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