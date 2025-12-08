# 🌍 Internationalization (i18n) Guide

## Overview

Stay at Scandinavia supports multiple languages with **Indonesian (Bahasa Indonesia)** as the default language and **English** as the secondary language.

---

## 📋 Supported Languages

| Code | Language | Status |
|------|----------|--------|
| `id` | Indonesian (Bahasa Indonesia) | ✅ Default |
| `en` | English | ✅ Available |

---

## 🚀 Quick Start

### Using Translations in Components

```tsx
import { useLang } from "../context/LanguageContext";

function MyComponent() {
  const { t, lang, setLang } = useLang();
  
  return (
    <div>
      <h1>{t.appName}</h1>
      <p>{t.welcome}</p>
      <button onClick={() => setLang(lang === "id" ? "en" : "id")}>
        Switch Language
      </button>
    </div>
  );
}
```

### Adding Language Switcher

```tsx
import LanguageSwitcher from "../components/LanguageSwitcher";

function Navbar() {
  return (
    <nav>
      {/* Other nav items */}
      <LanguageSwitcher />
    </nav>
  );
}
```

---

## 📁 File Structure

```
src/
├── utils/
│   └── i18n.ts                    # Translation definitions
├── context/
│   └── LanguageContext.tsx        # Language state management
└── components/
    └── LanguageSwitcher.tsx       # Language toggle component
```

---

## 🔧 Implementation Details

### 1. Translation Interface (`i18n.ts`)

All translation keys are defined in the `Translation` interface:

```typescript
export interface Translation {
  appName: string;
  songs: string;
  askAI: string;
  profile: string;
  // ... more keys
}
```

### 2. Translation Object

Translations are organized by language code:

```typescript
export const translations: Record<SupportedLanguage, Translation> = {
  id: {
    appName: "🎸 Stay at Scandinavia",
    songs: "Lagu",
    askAI: "Tanya AI",
    // ... Indonesian translations
  },
  en: {
    appName: "🎸 Stay at Scandinavia",
    songs: "Songs",
    askAI: "Ask AI",
    // ... English translations
  },
};
```

### 3. Language Context

The `LanguageProvider` wraps your app and provides translation functions:

```tsx
<LanguageProvider>
  <App />
</LanguageProvider>
```

### 4. Using Translations

Access translations via the `useLang` hook:

```tsx
const { t, lang, setLang } = useLang();

// t: Translation object with all keys
// lang: Current language code ("id" or "en")
// setLang: Function to change language
```

---

## 📝 Adding New Translation Keys

### Step 1: Update Interface

Add the new key to the `Translation` interface in `i18n.ts`:

```typescript
export interface Translation {
  // ... existing keys
  newKey: string;
}
```

### Step 2: Add Translations

Add translations for all supported languages:

```typescript
export const translations: Record<SupportedLanguage, Translation> = {
  id: {
    // ... existing translations
    newKey: "Teks dalam Bahasa Indonesia",
  },
  en: {
    // ... existing translations
    newKey: "Text in English",
  },
};
```

### Step 3: Use in Components

```tsx
const { t } = useLang();
return <p>{t.newKey}</p>;
```

---

## 🎯 Translation Guidelines

### Indonesian (Bahasa Indonesia)

1. **Use formal language** for instructional content
2. **Keep it natural** - translate meaning, not word-for-word
3. **Use music terminology** appropriately:
   - Guitar → Gitar
   - Chord → Kunci
   - Strumming → Strumming (keep English for technical terms)
   - Capo → Capo
   - Tab → Tab

### English

1. **Keep it simple and clear**
2. **Use standard music terminology**
3. **Be consistent** with industry terms

---

## 📋 Common Patterns

### Pluralization

Since the interface uses strings, handle plurals in the component:

```tsx
const { t } = useLang();
const count = songs.length;

return (
  <p>
    {t.showingSongs} {count} {count === 1 ? t.song : `${t.song}s`}
  </p>
);

// Indonesian version would need similar logic:
// "Menampilkan 5 lagu" (plural is same in Indonesian)
```

### Dynamic Content

For content with variables, use template literals:

```typescript
// In component
const { t } = useLang();
const message = `${t.showing} ${count} ${t.songs}`;
```

Or split into separate keys:

```typescript
// In i18n.ts
id: {
  showing: "Menampilkan",
  songs: "lagu",
}

// In component
const message = `${t.showing} ${count} ${t.songs}`;
```

---

## 🎨 UI Best Practices

### 1. Text Length Considerations

Indonesian text can be 20-30% longer than English. Design with flexibility:

```css
/* Good: Flexible width */
.button {
  padding: 0.5rem 1rem;
  min-width: 100px;
}

/* Bad: Fixed width that may truncate */
.button {
  width: 80px;
}
```

### 2. Language Switcher Placement

Recommended locations:
- Top right of navbar
- Settings/Profile page
- Footer

```tsx
// Example: In Navbar
<div className="flex items-center space-x-4">
  <NavigationItems />
  <LanguageSwitcher />
</div>
```

### 3. Storing Language Preference

Save to localStorage:

```tsx
export function LanguageProvider({ children }: LanguageProviderProps) {
  const [lang, setLang] = useState<SupportedLanguage>(() => {
    const saved = localStorage.getItem("language");
    return (saved as SupportedLanguage) || "id";
  });

  const handleSetLang = (newLang: SupportedLanguage) => {
    setLang(newLang);
    localStorage.setItem("language", newLang);
  };

  // ...
}
```

---

## 🔍 Complete Translation Keys Reference

### Navigation
- `appName` - App title
- `songs` - Songs tab
- `askAI` - AI assistant tab
- `profile` - Profile tab

### Home Page
- `welcome` - Welcome message
- `songsDesc` - Songs page description
- `allLevels` - All difficulty levels filter
- `beginner` / `intermediate` / `advanced` / `expert` - Difficulty levels
- `allGenres` - All genres filter
- `rock` / `pop` / `folk` / `acoustic` / `fingerstyle` / `indie` / `country` / `metal` / `blues` / `jazz` - Music genres

### Song Details
- `backToSongs` - Back button text
- `difficulty` - Difficulty label
- `category` - Category label
- `key` - Musical key label
- `duration` - Duration label
- `songDetails` - Section title
- `tuning` - Tuning info
- `capo` / `noCapo` / `fret` - Capo information
- `tempo` - Tempo (BPM)
- `strumming` - Strumming pattern
- `chordsUsed` - Chords section title
- `totalChords` - Total chords count
- `aboutThisSong` - About section
- `guitarTabs` - Tabs section
- `lyricsAndChords` - Lyrics section
- `videoTutorial` - Video section
- `watchOnYoutube` - YouTube button

### Practice Tips
- `practiceTips` - Section title
- `tipSlowly` - Tip 1: Practice slowly
- `tipPattern` - Tip 2: Practice strumming separately
- `tipMetronome` - Tip 3: Use metronome
- `tipSections` - Tip 4: Break into sections

### AI Assistant
- `guitarLearningAssistant` - Page title
- `askMeAnything` - Subtitle
- `aiGreeting` - Initial greeting message
- `quickSuggestions` - Quick prompts label
- `quickPrompt1` through `quickPrompt5` - Preset prompts
- `typeMessage` - Input placeholder

### Profile Page
- `about` - About section
- `whatWeOffer` - Features section
- `songLibrary` / `songLibraryDesc` - Library feature
- `stepByStepTutorials` / `tutorialsDesc` - Tutorials feature
- `proTips` / `proTipsDesc` - Tips feature
- `skillLevels` - Skill levels section
- `beginnerDesc` through `expertDesc` - Level descriptions
- `musicGenres` - Genres section
- `joinCommunity` - Community section
- `communityDesc` - Community description
- `keepPlaying` - Motivational message

### Misc
- `showingSongs` - Results counter prefix
- `song` - Singular song
- `noSongsFound` - Empty state title
- `adjustFilters` - Empty state message
- `plays` - Play count suffix
- `rating` - Rating label
- `sending` - Loading state

---

## 🧪 Testing Translations

### Manual Testing Checklist

- [ ] Switch between Indonesian and English
- [ ] Check all pages render correctly
- [ ] Verify text fits in UI elements
- [ ] Test on mobile devices (narrow screens)
- [ ] Verify special characters display correctly
- [ ] Check pluralization works
- [ ] Ensure emoji icons display properly

### Automated Testing

```tsx
// Example test
import { render, screen } from "@testing-library/react";
import { LanguageProvider } from "./context/LanguageContext";

test("displays Indonesian text by default", () => {
  render(
    <LanguageProvider>
      <MyComponent />
    </LanguageProvider>
  );
  
  expect(screen.getByText("Lagu")).toBeInTheDocument();
});

test("switches to English", () => {
  const { getByRole } = render(
    <LanguageProvider>
      <LanguageSwitcher />
      <MyComponent />
    </LanguageProvider>
  );
  
  fireEvent.click(getByRole("button"));
  expect(screen.getByText("Songs")).toBeInTheDocument();
});
```

---

## 🌏 Adding More Languages

To add a new language (e.g., Spanish):

### 1. Update Type Definition

```typescript
export type SupportedLanguage = "id" | "en" | "es";
```

### 2. Add Translations

```typescript
export const translations: Record<SupportedLanguage, Translation> = {
  id: { /* ... */ },
  en: { /* ... */ },
  es: {
    appName: "🎸 Stay at Scandinavia",
    songs: "Canciones",
    askAI: "Preguntar IA",
    // ... all other keys in Spanish
  },
};
```

### 3. Update Language Switcher

```tsx
export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  
  const languages = [
    { code: "id", label: "ID" },
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
  ];
  
  return (
    <select value={lang} onChange={(e) => setLang(e.target.value)}>
      {languages.map(l => (
        <option key={l.code} value={l.code}>{l.label}</option>
      ))}
    </select>
  );
}
```

---

## 🐛 Troubleshooting

### Missing Translation Keys

**Error:** `Property 'newKey' does not exist on type 'Translation'`

**Solution:** Add the key to the `Translation` interface and all language objects.

### Wrong Language on Load

**Issue:** App loads in English instead of Indonesian

**Solution:** Check `LanguageContext.tsx` default value:
```typescript
const [lang, setLang] = useState<SupportedLanguage>("id"); // Should be "id"
```

### Text Overflow

**Issue:** Indonesian text gets cut off

**Solution:** Use flexible layouts:
```css
.text-container {
  white-space: normal;
  overflow-wrap: break-word;
}
```

---

## 📚 Resources

- **Indonesian Translation Guide**: [Pedoman Umum Ejaan Bahasa Indonesia (PUEBI)](https://puebi.js.org/)
- **Music Terminology**: Keep technical terms in English or widely-accepted forms
- **UI Translation Best Practices**: [i18n Best Practices](https://www.i18next.com/principles/best-practices)

---

## ✅ Checklist for Contributors

When adding new features:

- [ ] Add translation keys to `Translation` interface
- [ ] Provide Indonesian translation (default)
- [ ] Provide English translation
- [ ] Test with both languages
- [ ] Ensure text fits in UI
- [ ] Update this guide if needed

---

**Happy translating! / Selamat menerjemahkan!** 🌍🎸

*Last Updated: December 4, 2024*
