# 🎸 Stay at Scandinavia - Quick Reference

## 🚀 Quick Commands

```bash
# Development
pnpm install              # Install dependencies
pnpm run dev             # Start dev server (http://localhost:5173)
pnpm run build           # Build for production
pnpm run preview         # Preview production build

# Desktop App (Tauri)
pnpm run tauri dev       # Run desktop app in dev mode
pnpm run tauri build     # Build desktop app installer

# Code Quality
pnpm run lint            # Run linter (if configured)
pnpm run type-check      # Check TypeScript types
```

---

## 📁 Project Structure

```
stay/
├── src/
│   ├── components/
│   │   ├── AnimatedPage.tsx          # Page transition wrapper
│   │   ├── Navbar.tsx                # Bottom navigation bar
│   │   ├── SongCard.tsx              # Song list item card
│   │   └── SongDetailPage.tsx        # Full song details view
│   │
│   ├── pages/
│   │   ├── Home.tsx                  # Songs library (main page)
│   │   ├── WhatsFor.tsx              # AI assistant chatbot
│   │   └── Profile.tsx               # Platform info & social links
│   │
│   ├── data/
│   │   └── songs.ts                  # Song database (20 songs)
│   │
│   ├── types/
│   │   └── song.ts                   # TypeScript type definitions
│   │
│   ├── utils/
│   │   └── haptics.ts                # Haptic feedback utilities
│   │
│   ├── App.tsx                       # Main app component
│   └── main.tsx                      # App entry point
│
├── src-tauri/                        # Tauri backend
├── public/                           # Static assets
└── dist/                             # Production build output
```

---

## 🎵 Song Object Schema

```typescript
{
  id: number;                         // Unique identifier
  title: string;                      // "Wonderwall"
  artist: string;                     // "Oasis"
  difficulty: DifficultyLevel;        // "Beginner" | "Intermediate" | "Advanced" | "Expert"
  category: SongCategory;             // "Rock" | "Pop" | "Folk" | etc.
  rating: number;                     // 4.8 (out of 5)
  chords: string[];                   // ["Em7", "G", "Dsus4", "A7sus4"]
  strummingPattern?: string;          // "D D U U D U"
  capoPosition?: number;              // 2 (fret number, 0 = no capo)
  tuning?: string;                    // "Standard (EADGBE)"
  key: string;                        // "F#m"
  tempo?: number;                     // 87 (BPM)
  description: string;                // About the song
  lyrics?: string;                    // Full lyrics with chords
  tabs?: string;                      // Guitar tablature
  videoUrl?: string;                  // YouTube tutorial link
  duration?: string;                  // "4:18"
  year?: number;                      // 1995
  playCount: number;                  // 125000
  favoriteCount: number;              // 8500
  thumbnail?: string;                 // "🎸" (emoji icon)
}
```

---

## 🎨 Color System

### Primary Colors
```css
Purple:  #9333EA  (gradient-from, primary buttons)
Blue:    #2563EB  (gradient-to, links)
Indigo:  #4F46E5  (accents)
Violet:  #8B5CF6  (highlights)
```

### Difficulty Colors
```css
Beginner:     Green   #10B981  bg-green-100 text-green-700
Intermediate: Yellow  #F59E0B  bg-yellow-100 text-yellow-700
Advanced:     Orange  #F97316  bg-orange-100 text-orange-700
Expert:       Red     #EF4444  bg-red-100 text-red-700
```

### Common Classes
```css
/* Gradients */
bg-gradient-to-r from-purple-600 to-blue-600
bg-gradient-to-br from-purple-100 to-blue-100

/* Cards */
bg-white rounded-lg shadow-md p-6

/* Buttons */
px-4 py-2 rounded-full font-medium
```

---

## 🔧 Common Tasks

### Add a New Song
```typescript
// In src/data/songs.ts
{
  id: 21,  // Next available ID
  title: "Song Name",
  artist: "Artist Name",
  difficulty: "Beginner",
  category: "Rock",
  rating: 4.5,
  chords: ["G", "C", "D"],
  key: "G",
  description: "...",
  playCount: 10000,
  favoriteCount: 500,
  thumbnail: "🎸",
}
```

### Add a Filter Option
```typescript
// In src/pages/Home.tsx
{
  id: "blues",
  label: "Blues",
  filter: (song) => song.category === "Blues",
}
```

### Update Navigation
```typescript
// In src/components/Navbar.tsx
{
  path: "/new-page",
  key: "new-page",
  label: "Label",
  icon: <IconName size={24} />,
}
```

---

## 🤖 AI Assistant Queries

### Detected Keywords

**Skill Levels:**
- beginner, start, new, easy, simple, first
- intermediate, medium, improving, next level
- advanced, hard, difficult, challenge
- expert, master, professional, virtuoso

**Genres:**
- rock, metal, punk
- pop, popular, hit
- folk, acoustic, unplugged
- blues, jazz
- country, nashville
- fingerstyle, fingerpick, picking

**Topics:**
- chord, chords → Chord explanation
- practice, "how long" → Practice tips
- strum, pattern → Strumming patterns
- capo → Capo usage guide

---

## 🎯 Key Components

### SongCard
**Props:**
- `song: Song`
- `onClick: () => void`

**Features:**
- Displays title, artist, rating, difficulty
- Shows chord preview (first 5 chords)
- Category, key, capo info
- Play count and favorites

### SongDetailPage
**Props:**
- `song: Song`
- `onBack: () => void`

**Sections:**
- Hero with gradient background
- Quick info cards
- Song details table
- Chord list
- Description
- Tabs (if available)
- Lyrics (if available)
- Video link (if available)
- Practice tips

### AI Assistant
**Features:**
- Detects skill level from query
- Detects genre preference
- Provides educational content
- Recommends top-rated songs
- Offers practice tips

---

## 📱 Responsive Design

```css
/* Breakpoints */
sm:  640px   /* Small tablets */
md:  768px   /* Tablets */
lg:  1024px  /* Laptops */
xl:  1280px  /* Desktops */
2xl: 1536px  /* Large screens */

/* Common patterns */
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
<div className="flex flex-col md:flex-row">
<div className="text-sm md:text-base lg:text-lg">
```

---

## 🎸 Difficulty Guidelines

### Beginner (Green)
- 2-4 open chords
- Simple strumming patterns
- Slow to medium tempo
- No barre chords
- Examples: Wonderwall, Horse With No Name

### Intermediate (Yellow)
- 5-7 chords
- Barre chords introduced
- Fingerpicking patterns
- Moderate tempo
- Examples: Blackbird, Tears in Heaven

### Advanced (Orange)
- 7+ chords
- Complex progressions
- Fast tempo
- Guitar solos
- Examples: Stairway to Heaven, Hotel California

### Expert (Red)
- Virtuoso techniques
- Jazz chords
- Complex timing
- Professional level
- Examples: Advanced jazz/metal pieces

---

## 🔍 Search & Filter Logic

```typescript
// Combine filters
const filteredSongs = songs.filter((song) => {
  const passesDifficulty = song.difficulty === selectedDifficulty;
  const passesCategory = song.category === selectedCategory;
  const passesSearch = song.title.toLowerCase().includes(query);
  
  return passesDifficulty && passesCategory && passesSearch;
});

// Sort by rating
songs.sort((a, b) => b.rating - a.rating);
```

---

## 🎨 Icon Library (Lucide React)

```tsx
import { 
  Music,           // General music
  Guitar,          // Guitar icon
  Play,            // Play button
  Star,            // Ratings
  Heart,           // Favorites
  TrendingUp,      // Popularity
  BookOpen,        // Learning
  User,            // Profile
  MessageCircle,   // Chat
  ArrowLeft,       // Navigation
  Sparkles,        // AI/Magic
  Award,           // Achievements
  Target,          // Goals
  Gauge,           // Difficulty meter
} from "lucide-react";
```

---

## ⚡ Performance Tips

1. **Lazy Loading:** Load song tabs/lyrics on demand
2. **Memoization:** Use `useMemo` for filtered lists
3. **Virtualization:** For large song lists (100+)
4. **Image Optimization:** Use WebP format
5. **Code Splitting:** Dynamic imports for routes

```tsx
// Lazy load pages
const TutorialsPage = lazy(() => import('./pages/Tutorials'));

// Memoize filtered songs
const filteredSongs = useMemo(() => {
  return songs.filter(/* filters */);
}, [songs, filters]);
```

---

## 🐛 Debug Checklist

- [ ] Check browser console for errors
- [ ] Verify imports are correct
- [ ] Ensure data types match
- [ ] Check file paths (case-sensitive)
- [ ] Verify Tailwind classes are valid
- [ ] Test on different screen sizes
- [ ] Clear browser cache if styles don't update

---

## 📚 Useful Links

- **React Docs:** https://react.dev
- **TypeScript:** https://www.typescriptlang.org
- **Tailwind CSS:** https://tailwindcss.com
- **Radix UI:** https://www.radix-ui.com
- **Lucide Icons:** https://lucide.dev
- **Tauri:** https://tauri.app

---

**Quick tip:** Use `Cmd/Ctrl + F` to search this document! 🔍
