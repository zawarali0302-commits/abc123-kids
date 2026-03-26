import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ProgressStore = {
    learnedLetters: string[];
    learnedNumbers: string[];
    letterVisitCount: number;
    incrementLetterVisit: () => void;
    markLetterLearned: (id: string) => void;
    markNumberLearned: (id: string) => void;
    loadProgress: () => Promise<void>;
};

export const useProgressStore = create<ProgressStore>((set, get) => ({
    learnedLetters: [],
    learnedNumbers: [],
    letterVisitCount: 0,

    markLetterLearned: async (id) => {
        const updated = [...new Set([...get().learnedLetters, id])];
        set({ learnedLetters: updated });
        await AsyncStorage.setItem('learnedLetters', JSON.stringify(updated));
    },
    markNumberLearned: async (id) => {
        const updated = [...new Set([...get().learnedNumbers, id])];
        set({ learnedNumbers: updated });
        await AsyncStorage.setItem('learnedNumbers', JSON.stringify(updated));
    },

    incrementLetterVisit: () => {
        set((s) => ({ letterVisitCount: s.letterVisitCount + 1 }));
    },
    loadProgress: async () => {
        const letters = await AsyncStorage.getItem('learnedLetters');
        const numbers = await AsyncStorage.getItem('learnedNumbers');
        set({
            learnedLetters: letters ? JSON.parse(letters) : [],
            learnedNumbers: numbers ? JSON.parse(numbers) : [],
        });
    },
}));