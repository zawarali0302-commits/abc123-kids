export type LetterItem = {
  id: string;
  letter: string;
  word: string;
  emoji: string;
  color: string;
};

export type NumberItem = {
  id: string;
  number: number;
  word: string;
  emoji: string;
  color: string;
};

export const LETTERS: LetterItem[] = [
  { id: 'a', letter: 'A', word: 'Apple',     emoji: '🍎', color: '#FF6B6B' },
  { id: 'b', letter: 'B', word: 'Ball',      emoji: '⚽', color: '#4ECDC4' },
  { id: 'c', letter: 'C', word: 'Cat',       emoji: '🐱', color: '#45B7D1' },
  { id: 'd', letter: 'D', word: 'Dog',       emoji: '🐶', color: '#96CEB4' },
  { id: 'e', letter: 'E', word: 'Elephant',  emoji: '🐘', color: '#F7A072' },
  { id: 'f', letter: 'F', word: 'Fish',      emoji: '🐟', color: '#DDA0DD' },
  { id: 'g', letter: 'G', word: 'Grapes',    emoji: '🍇', color: '#98D8C8' },
  { id: 'h', letter: 'H', word: 'Horse',     emoji: '🐴', color: '#F7DC6F' },
  { id: 'i', letter: 'I', word: 'Ice cream', emoji: '🍦', color: '#BB8FCE' },
  { id: 'j', letter: 'J', word: 'Jellyfish', emoji: '🪼', color: '#85C1E9' },
  { id: 'k', letter: 'K', word: 'Kite',      emoji: '🪁', color: '#F1948A' },
  { id: 'l', letter: 'L', word: 'Lion',      emoji: '🦁', color: '#82E0AA' },
  { id: 'm', letter: 'M', word: 'Monkey',    emoji: '🐵', color: '#F0B27A' },
  { id: 'n', letter: 'N', word: 'Nest',      emoji: '🪺', color: '#AED6F1' },
  { id: 'o', letter: 'O', word: 'Octopus',   emoji: '🐙', color: '#F9E79F' },
  { id: 'p', letter: 'P', word: 'Penguin',   emoji: '🐧', color: '#A9CCE3' },
  { id: 'q', letter: 'Q', word: 'Queen',     emoji: '👸', color: '#F1948A' },
  { id: 'r', letter: 'R', word: 'Rainbow',   emoji: '🌈', color: '#ABEBC6' },
  { id: 's', letter: 'S', word: 'Star',      emoji: '⭐', color: '#FAD7A0' },
  { id: 't', letter: 'T', word: 'Tiger',     emoji: '🐯', color: '#A3E4D7' },
  { id: 'u', letter: 'U', word: 'Umbrella',  emoji: '☂️', color: '#D2B4DE' },
  { id: 'v', letter: 'V', word: 'Violin',    emoji: '🎻', color: '#A9DFBF' },
  { id: 'w', letter: 'W', word: 'Whale',     emoji: '🐳', color: '#AED6F1' },
  { id: 'x', letter: 'X', word: 'Xylophone', emoji: '🎵', color: '#F9E79F' },
  { id: 'y', letter: 'Y', word: 'Yak',       emoji: '🐂', color: '#FDEBD0' },
  { id: 'z', letter: 'Z', word: 'Zebra',     emoji: '🦓', color: '#D5D8DC' },
];

export const NUMBERS: NumberItem[] = [
  { id: '0', number: 0, word: 'Zero',  emoji: '🥚', color: '#F8C8A0' },
  { id: '1', number: 1, word: 'One',   emoji: '⭐', color: '#FFD700' },
  { id: '2', number: 2, word: 'Two',   emoji: '🍒', color: '#FF6B6B' },
  { id: '3', number: 3, word: 'Three', emoji: '🍀', color: '#4ECDC4' },
  { id: '4', number: 4, word: 'Four',  emoji: '🌸', color: '#FFB6C1' },
  { id: '5', number: 5, word: 'Five',  emoji: '🌟', color: '#98D8C8' },
  { id: '6', number: 6, word: 'Six',   emoji: '🎲', color: '#DDA0DD' },
  { id: '7', number: 7, word: 'Seven', emoji: '🌈', color: '#87CEEB' },
  { id: '8', number: 8, word: 'Eight', emoji: '🎱', color: '#F0E68C' },
  { id: '9', number: 9, word: 'Nine',  emoji: '🎯', color: '#FFB347' },
];