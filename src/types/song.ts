export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export type SongCategory = "Pop" | "Rock" | "Blues" | "Jazz" | "Folk" | "Country" | "Metal" | "Indie" | "Acoustic" | "Fingerstyle";

export interface ChordDiagram {
  name: string;
  frets: string; // e.g., "x32010" for C major
  fingers: string; // e.g., "032010" finger positions
}

export interface Song {
  id: number;
  title: string;
  artist: string;
  difficulty: DifficultyLevel;
  category: SongCategory;
  rating: number;
  chords: string[]; // Array of chord names like ["G", "C", "D", "Em"]
  strummingPattern?: string;
  capoPosition?: number;
  tuning?: string; // e.g., "Standard (EADGBE)"
  key: string; // Musical key
  tempo?: number; // BPM
  description: string;
  lyrics?: string;
  tabs?: string;
  videoUrl?: string;
  duration?: string; // e.g., "3:45"
  year?: number;
  playCount: number;
  favoriteCount: number;
  thumbnail?: string;
}

export interface Tutorial {
  id: number;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  category: string;
  duration: string;
  videoUrl?: string;
  thumbnail?: string;
  views: number;
  rating: number;
  content: string;
}

export interface GuitarTip {
  id: number;
  title: string;
  category: string;
  content: string;
  difficulty: DifficultyLevel;
  helpful: number;
}