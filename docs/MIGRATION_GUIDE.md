# 🎸 Stay at Scandinavia - Migration Guide

## Quick Start

Welcome to Stay at Scandinavia! This guide will help you complete the migration from the old restaurant app to the new guitar learning platform.

---

## 🧹 Cleanup Required

### Files to Delete

The following files are from the old restaurant app and are no longer needed:

```bash
# Remove old type definitions
rm src/types/restaurant.ts

# Remove old data
rm src/data/restaurants.ts

# Remove old components
rm src/components/RestaurantCard.tsx
rm src/components/RestaurantDetailPage.tsx
```

**One-liner to clean everything:**
```bash
rm src/types/restaurant.ts src/data/restaurants.ts src/components/RestaurantCard.tsx src/components/RestaurantDetailPage.tsx
```

---

## ✅ Verification Steps

### 1. Check for Remaining References

Run this command to ensure no files still reference the old restaurant code:

```bash
grep -r "restaurant\|Restaurant" src/ --include="*.ts" --include="*.tsx" --exclude-dir=node_modules
```

Expected result: No matches (or only matches in comments)

### 2. Test Build

```bash
# Install dependencies if needed
pnpm install

# Build the project
pnpm run build
```

### 3. Run Development Server

```bash
pnpm run dev
```

Then visit `http://localhost:5173` and verify:
- ✅ Song library loads correctly
- ✅ Filters work (Difficulty & Genre)
- ✅ Song details page displays properly
- ✅ AI Assistant responds to queries
- ✅ Profile page shows correct information
- ✅ Navigation works smoothly

### 4. Test Tauri Desktop App (Optional)

```bash
pnpm run tauri dev
```

---

## 🎨 Customization Guide

### Update Social Media Links

Edit `src/pages/Profile.tsx` and update the social media URLs:

```tsx
// Line ~40-60
<a href="https://www.youtube.com/@YOUR_CHANNEL">
<a href="https://www.facebook.com/YOUR_PAGE">
<a href="https://www.instagram.com/YOUR_ACCOUNT">
```

### Add More Songs

Edit `src/data/songs.ts` and add new songs following this format:

```typescript
{
  id: 21, // Increment from last song
  title: "Your Song Title",
  artist: "Artist Name",
  difficulty: "Beginner", // or Intermediate, Advanced, Expert
  category: "Rock", // or Pop, Folk, Blues, etc.
  rating: 4.7,
  chords: ["G", "C", "D", "Em"],
  strummingPattern: "D DU UDU",
  capoPosition: 0,
  tuning: "Standard (EADGBE)",
  key: "G",
  tempo: 120,
  description: "Description of the song...",
  duration: "3:45",
  year: 2020,
  playCount: 50000,
  favoriteCount: 3500,
  thumbnail: "🎸",
}
```

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  "guitar-purple": "#9333EA",  // Primary color
  "guitar-blue": "#2563EB",    // Secondary color
  "guitar-indigo": "#4F46E5",  // Accent color
  "guitar-accent": "#8B5CF6",  // Highlight color
  "guitar-light": "#F3E8FF",   // Background tint
}
```

### Update App Name

If you want to change "Stay at Scandinavia" to something else:

1. **Navbar** - `src/components/Navbar.tsx` (line ~37)
2. **Profile** - `src/pages/Profile.tsx` (line ~13)
3. **README** - `README.md` (title)
4. **HTML Title** - `index.html` (line ~13)

---

## 🚀 Deployment

### Build for Production

```bash
# Web build
pnpm run build

# Desktop app build
pnpm run tauri build
```

### Deploy Web Version

The `dist/` folder contains the production build. Deploy to:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop `dist/` folder
- **GitHub Pages**: Push to `gh-pages` branch

### Package Desktop App

After running `pnpm run tauri build`, find installers in:
- macOS: `src-tauri/target/release/bundle/dmg/`
- Windows: `src-tauri/target/release/bundle/msi/`
- Linux: `src-tauri/target/release/bundle/appimage/`

---

## 🔧 Troubleshooting

### Build Errors

**Error: Cannot find module 'restaurant'**
```bash
# Solution: Clean node_modules and reinstall
rm -rf node_modules
pnpm install
```

**Error: Tailwind classes not applying**
```bash
# Solution: Rebuild Tailwind
pnpm run build
```

### Runtime Issues

**Songs not loading**
- Check `src/data/songs.ts` for syntax errors
- Verify import in `src/pages/Home.tsx`

**AI Assistant not responding**
- Check browser console for errors
- Verify `songs` import in `src/pages/WhatsFor.tsx`

**Navigation broken**
- Ensure all routes in `src/App.tsx` are correct
- Check `src/components/Navbar.tsx` paths

---

## 📚 Adding New Features

### Add a New Page

1. Create page component in `src/pages/`:
```tsx
// src/pages/Tutorials.tsx
export default function TutorialsPage() {
  return <div>Tutorials</div>;
}
```

2. Add route in `src/App.tsx`:
```tsx
<Route path="/tutorials" element={
  <AnimatedPage><TutorialsPage /></AnimatedPage>
} />
```

3. Add nav item in `src/components/Navbar.tsx`:
```tsx
{
  path: "/tutorials",
  key: "tutorials",
  label: "Tutorials",
  icon: <BookOpen size={24} />,
}
```

### Add Chord Diagrams

1. Create component `src/components/ChordDiagram.tsx`:
```tsx
export default function ChordDiagram({ chord }) {
  return (
    <div className="chord-diagram">
      {/* SVG chord diagram */}
    </div>
  );
}
```

2. Import in `src/components/SongDetailPage.tsx`
3. Display for each chord

### Add Search Functionality

1. Add search state in `src/pages/Home.tsx`:
```tsx
const [searchQuery, setSearchQuery] = useState("");
```

2. Add search input:
```tsx
<input
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  placeholder="Search songs..."
/>
```

3. Filter songs by query:
```tsx
const filteredSongs = songs.filter(song =>
  song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  song.artist.toLowerCase().includes(searchQuery.toLowerCase())
);
```

---

## 🎯 Best Practices

### Song Data Quality
- ✅ Verify chords are accurate
- ✅ Include proper strumming patterns
- ✅ Add capo positions if needed
- ✅ Set appropriate difficulty levels
- ✅ Write helpful descriptions

### Code Quality
- ✅ Use TypeScript types
- ✅ Keep components small and focused
- ✅ Extract reusable logic
- ✅ Add comments for complex code
- ✅ Format code consistently

### User Experience
- ✅ Test on mobile devices
- ✅ Ensure fast load times
- ✅ Add loading states
- ✅ Handle errors gracefully
- ✅ Provide helpful feedback

---

## 📞 Support

### Resources
- **React Docs**: https://react.dev
- **Tauri Docs**: https://tauri.app
- **Tailwind CSS**: https://tailwindcss.com
- **Lucide Icons**: https://lucide.dev

### Community
- GitHub Issues: Report bugs and request features
- Discussions: Share ideas and get help

---

## 🎸 Next Steps

1. ✅ Delete old restaurant files
2. ✅ Run build to verify everything works
3. ✅ Customize social media links
4. 🔄 Add more songs to the library
5. 🔄 Create video tutorials
6. 🔄 Build community features
7. 🔄 Deploy to production

---

**Happy coding and happy playing!** 🎸🎵

*Last Updated: December 4, 2024*
