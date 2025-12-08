# 🎯 i18n Implementation Checklist

This document provides a step-by-step checklist to apply translations throughout the Stay at Scandinavia app.

---

## 📋 Phase 1: Setup (✅ Complete)

- [x] Create translation definitions (`src/utils/i18n.ts`)
- [x] Set up language context (`src/context/LanguageContext.tsx`)
- [x] Create language switcher component (`src/components/LanguageSwitcher.tsx`)
- [x] Set Indonesian as default language
- [x] Add English as secondary language
- [x] Define all 84 translation keys

---

## 📋 Phase 2: Component Updates

### Navbar.tsx

```tsx
// Add at top of component
const { t } = useLang();

// Replace hardcoded strings:
- "🎸 Stay at Scandinavia" → {t.appName}
- "Songs" → {t.songs}
- "Ask AI" → {t.askAI}
- "Profile" → {t.profile}
```

**Checklist:**
- [ ] Import `useLang` hook
- [ ] Replace app name in top bar
- [ ] Replace nav item labels
- [ ] Add language switcher to top bar (optional)

---

### Home.tsx (Songs Page)

```tsx
// Add at top of component
const { t } = useLang();

// Replace strings in:
- Page title: "🎸 Guitar Songs Library" → t.welcome or custom
- Description: Use t.songsDesc
- Filter labels: t.beginner, t.intermediate, t.advanced, t.expert
- Genre labels: t.rock, t.pop, t.folk, etc.
- Results counter: t.showingSongs
- Empty state: t.noSongsFound, t.adjustFilters
```

**Checklist:**
- [ ] Import `useLang` hook
- [ ] Replace page title and description
- [ ] Update difficulty filter labels
- [ ] Update genre filter labels
- [ ] Update results counter text
- [ ] Update empty state messages

---

### SongCard.tsx

```tsx
// Add at top of component
const { t } = useLang();

// Replace strings:
- "plays" → t.plays
- Capo text: `Capo ${position}` → `${t.capo} ${position}`
- Key label: "Key:" → `${t.key}:`
```

**Checklist:**
- [ ] Import `useLang` hook
- [ ] Replace "plays" text
- [ ] Replace "Capo" text
- [ ] Replace "Key" label

---

### SongDetailPage.tsx

```tsx
// Add at top of component
const { t } = useLang();

// Replace strings:
- "Back to Songs" → t.backToSongs
- "Difficulty" → t.difficulty
- "Category" → t.category
- "Key" → t.key
- "Duration" → t.duration
- "Song Details" → t.songDetails
- "Tuning" → t.tuning
- "Capo" → t.capo
- "No Capo" → t.noCapo
- "Fret" → t.fret
- "Tempo" → t.tempo
- "Strumming" → t.strumming
- "Chords Used" → t.chordsUsed
- "Total chords:" → t.totalChords
- "About This Song" → t.aboutThisSong
- "Guitar Tabs" → t.guitarTabs
- "Lyrics & Chords" → t.lyricsAndChords
- "Video Tutorial" → t.videoTutorial
- "Watch on YouTube" → t.watchOnYoutube
- "Practice Tips" → t.practiceTips
- Tip 1 → t.tipSlowly
- Tip 2 → t.tipPattern
- Tip 3 → t.tipMetronome
- Tip 4 → t.tipSections
```

**Checklist:**
- [ ] Import `useLang` hook
- [ ] Replace back button text
- [ ] Update info card labels
- [ ] Update detail table labels
- [ ] Update section headings
- [ ] Update practice tips
- [ ] Test with both languages

---

### WhatsFor.tsx (AI Assistant)

```tsx
// Add at top of component
const { t } = useLang();

// Update initial message:
const [messages, setMessages] = useState<Message[]>([
  {
    id: "1",
    text: t.aiGreeting,
    sender: "assistant",
    timestamp: new Date(),
  },
]);

// Update header:
- "Guitar Learning Assistant" → t.guitarLearningAssistant
- "Ask me anything about guitar!" → t.askMeAnything

// Update quick prompts:
- "Beginner songs for me" → t.quickPrompt1
- "Show rock songs" → t.quickPrompt2
- "Fingerstyle recommendations" → t.quickPrompt3
- "How to practice guitar?" → t.quickPrompt4
- "What are easy chords?" → t.quickPrompt5

// Update placeholder:
- "Ask me about guitar songs..." → t.typeMessage

// Update quick suggestions label:
- "Quick suggestions:" → t.quickSuggestions
```

**Checklist:**
- [ ] Import `useLang` hook
- [ ] Update initial greeting message
- [ ] Update page header
- [ ] Update quick prompt texts
- [ ] Update input placeholder
- [ ] Update quick suggestions label
- [ ] Consider translating AI responses (advanced)

---

### Profile.tsx

```tsx
// Add at top of component
const { t } = useLang();

// Replace strings:
- "About" → t.about
- "What We Offer" → t.whatWeOffer
- "Song Library" → t.songLibrary
- Library description → t.songLibraryDesc
- "Step-by-Step Tutorials" → t.stepByStepTutorials
- Tutorials description → t.tutorialsDesc
- "Pro Tips & Techniques" → t.proTips
- Tips description → t.proTipsDesc
- "Skill Levels" → t.skillLevels
- "Perfect to start" → t.beginnerDesc
- "Level up your skills" → t.intermediateDesc
- "Master techniques" → t.advancedDesc
- "Pro level content" → t.expertDesc
- "Music Genres" → t.musicGenres
- "Join Our Community" → t.joinCommunity
- Community description → t.communityDesc
- "Keep playing, keep learning! 🎸" → t.keepPlaying
```

**Checklist:**
- [ ] Import `useLang` hook
- [ ] Update "About" section heading
- [ ] Update "What We Offer" section
- [ ] Update feature descriptions
- [ ] Update skill level descriptions
- [ ] Update "Music Genres" heading
- [ ] Update community section
- [ ] Update motivational message
- [ ] Add language switcher button (optional)

---

## 📋 Phase 3: Testing

### Manual Testing
- [ ] Load app - should default to Indonesian
- [ ] Switch to English - all text should change
- [ ] Switch back to Indonesian - all text should revert
- [ ] Test on all pages (Songs, Ask AI, Profile)
- [ ] Check mobile responsiveness
- [ ] Verify no text overflow
- [ ] Test with long song titles
- [ ] Verify emoji displays correctly

### Visual Testing
- [ ] Check text alignment
- [ ] Verify button sizes accommodate both languages
- [ ] Check modal/dialog translations
- [ ] Verify tooltips (if any)
- [ ] Check loading states
- [ ] Verify error messages

### Functional Testing
- [ ] Filters work in both languages
- [ ] Search works in both languages
- [ ] Navigation works correctly
- [ ] AI assistant responds appropriately
- [ ] Song details display correctly

---

## 📋 Phase 4: Polish (Optional)

### Language Switcher Placement
- [ ] Add to Navbar (top right)
- [ ] Add to Profile page
- [ ] Add to Settings (if exists)

### Persist Language Choice
```tsx
// In LanguageContext.tsx
const [lang, setLang] = useState<SupportedLanguage>(() => {
  const saved = localStorage.getItem("preferredLanguage");
  return (saved as SupportedLanguage) || "id";
});

useEffect(() => {
  localStorage.setItem("preferredLanguage", lang);
}, [lang]);
```

- [ ] Implement localStorage persistence
- [ ] Test persistence across sessions

### Browser Language Detection
```tsx
const [lang, setLang] = useState<SupportedLanguage>(() => {
  const saved = localStorage.getItem("preferredLanguage");
  if (saved) return saved as SupportedLanguage;
  
  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith("id") ? "id" : "en";
});
```

- [ ] Implement browser language detection
- [ ] Test with different browser languages

---

## 📋 Phase 5: Advanced Features (Future)

### Dynamic AI Responses
- [ ] Translate AI responses based on selected language
- [ ] Update response generation logic in `WhatsFor.tsx`
- [ ] Add Indonesian language detection for user queries
- [ ] Respond in user's selected language

### Date/Time Formatting
- [ ] Format dates according to locale
- [ ] Use Indonesian date format for "id"
- [ ] Use English date format for "en"

### Number Formatting
- [ ] Format numbers with proper separators
- [ ] Indonesian: 1.000,50
- [ ] English: 1,000.50

---

## 🔧 Code Examples

### Basic Component Update

**Before:**
```tsx
export default function MyComponent() {
  return (
    <div>
      <h1>Songs</h1>
      <button>Beginner</button>
    </div>
  );
}
```

**After:**
```tsx
import { useLang } from "../context/LanguageContext";

export default function MyComponent() {
  const { t } = useLang();
  
  return (
    <div>
      <h1>{t.songs}</h1>
      <button>{t.beginner}</button>
    </div>
  );
}
```

### Dynamic Content

**Before:**
```tsx
<p>Showing {count} songs</p>
```

**After:**
```tsx
const { t } = useLang();

<p>{t.showingSongs} {count} {t.song}{count !== 1 ? 's' : ''}</p>
```

### Conditional Rendering

```tsx
const { lang } = useLang();

{lang === "id" ? (
  <p>Konten ini hanya untuk Bahasa Indonesia</p>
) : (
  <p>This content is English only</p>
)}
```

---

## 📊 Progress Tracking

### Files to Update

- [ ] `src/components/Navbar.tsx`
- [ ] `src/pages/Home.tsx`
- [ ] `src/components/SongCard.tsx`
- [ ] `src/components/SongDetailPage.tsx`
- [ ] `src/pages/WhatsFor.tsx`
- [ ] `src/pages/Profile.tsx`

### Optional Files

- [ ] `src/components/AnimatedPage.tsx` (if has text)
- [ ] Error boundaries (if exist)
- [ ] Loading components (if have text)
- [ ] Toast notifications (if exist)

---

## 🚀 Quick Start Commands

```bash
# Verify no TypeScript errors
npm run type-check

# Build to catch any issues
npm run build

# Run dev server to test
npm run dev
```

---

## 📝 Notes

- Indonesian text can be 20-30% longer than English
- Use `flex` layouts instead of fixed widths
- Test with longest translations
- Keep technical terms in English (e.g., "Capo", "Tab")
- Use emojis consistently across languages
- Maintain same tone/formality in both languages

---

## ✅ Final Checklist

- [ ] All 6 main files updated
- [ ] No hardcoded strings remain
- [ ] App defaults to Indonesian
- [ ] Language switcher works
- [ ] Tested on all pages
- [ ] Mobile responsive
- [ ] No console errors
- [ ] TypeScript compiles without errors
- [ ] Build succeeds
- [ ] localStorage persistence (optional)
- [ ] Documentation updated

---

**Ready to go! / Siap untuk digunakan!** 🎸🌍

*Last Updated: December 4, 2024*
