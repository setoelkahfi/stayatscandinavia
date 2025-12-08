export interface Translation {
  appName: string;
  songs: string;
  askAI: string;
  profile: string;
  welcome: string;
  songsDesc: string;
  guitarLearningAssistant: string;
  askMeAnything: string;
  allLevels: string;
  beginner: string;
  intermediate: string;
  advanced: string;
  expert: string;
  allGenres: string;
  rock: string;
  pop: string;
  folk: string;
  acoustic: string;
  fingerstyle: string;
  indie: string;
  country: string;
  metal: string;
  blues: string;
  jazz: string;
  showingSongs: string;
  song: string;
  noSongsFound: string;
  adjustFilters: string;
  backToSongs: string;
  difficulty: string;
  category: string;
  key: string;
  duration: string;
  songDetails: string;
  tuning: string;
  capo: string;
  noCapo: string;
  fret: string;
  tempo: string;
  strumming: string;
  chordsUsed: string;
  totalChords: string;
  aboutThisSong: string;
  guitarTabs: string;
  lyricsAndChords: string;
  videoTutorial: string;
  watchOnYoutube: string;
  practiceTips: string;
  tipSlowly: string;
  tipPattern: string;
  tipMetronome: string;
  tipSections: string;
  plays: string;
  difficultyLevel: string;
  genre: string;
  about: string;
  whatWeOffer: string;
  songLibrary: string;
  songLibraryDesc: string;
  stepByStepTutorials: string;
  tutorialsDesc: string;
  proTips: string;
  proTipsDesc: string;
  skillLevels: string;
  beginnerDesc: string;
  intermediateDesc: string;
  advancedDesc: string;
  expertDesc: string;
  musicGenres: string;
  joinCommunity: string;
  communityDesc: string;
  keepPlaying: string;
  aiGreeting: string;
  quickSuggestions: string;
  quickPrompt1: string;
  quickPrompt2: string;
  quickPrompt3: string;
  quickPrompt4: string;
  quickPrompt5: string;
  typeMessage: string;
  sending: string;
  rating: string;
  oAuthLoginExplanation: string;
  moreLessons: string;
  googleOAuthLogin: string;
  appleOAuthLogin: string;
  guitarSongsLibrary: string;
  learnFavoriteSongs: string;
  songs_plural: string;
  welcomeAboutText: string;
  // AI Assistant responses
  chordResponseTitle: string;
  chordResponseBasic: string;
  chordResponseQuestion: string;
  practiceResponseTitle: string;
  practiceResponseBeginner: string;
  practiceResponseIntermediate: string;
  practiceResponseAdvanced: string;
  practiceResponseKeyTips: string;
  practiceResponseTip1: string;
  practiceResponseTip2: string;
  practiceResponseTip3: string;
  practiceResponseTip4: string;
  practiceResponseTip5: string;
  practiceResponseRemember: string;
  strummingResponseTitle: string;
  strummingResponseBasicPattern: string;
  strummingResponsePattern1: string;
  strummingResponsePattern2: string;
  strummingResponseProTip: string;
  strummingResponseQuestion: string;
  capoResponseTitle: string;
  capoResponseWhatItDoes: string;
  capoResponseBenefits: string;
  capoResponseBenefit1: string;
  capoResponseBenefit2: string;
  capoResponseBenefit3: string;
  capoResponseBenefit4: string;
  capoResponseExample: string;
  capoResponseCheckOut: string;
  noResultsResponse: string;
  noResultsTryAsking1: string;
  noResultsTryAsking2: string;
  noResultsTryAsking3: string;
  noResultsTryAsking4: string;
  noResultsOrAsk: string;
  recommendPerfect: string;
  recommendGreat: string;
  recommendAwesome: string;
  recommendHere: string;
  tipStart: string;
  tipStartSlow: string;
  tipPracticeDaily: string;
  tipUseMetronome: string;
  tipCheckSongs: string;
  tipTuneGuitar: string;
  wantMore: string;
  and: string;
  // SongCard & SongDetailPage (new keys only)
  more: string;
  capoFret: string;
  kPlays: string;
  released: string;
  na: string;
  bpm: string;
  // ProfileLoggedIn
  masterGuitarist: string;
  tutorials: string;
  visitYoutubeChannel: string;
  facebook: string;
  instagram: string;
  logOut: string;
}

export type SupportedLanguage = "id" | "en";

export const translations: Record<SupportedLanguage, Translation> = {
  id: {
    appName: "🎸 Stay at Scandinavia",
    songs: "Beranda",
    askAI: "Fasilitas",
    profile: "Kontak",
    welcome: "Selamat datang di Stay at Scandinavia!",
    songsDesc: "Pelajari lagu favorit dengan kunci & tab",
    guitarLearningAssistant: "Asisten Belajar Gitar",
    askMeAnything: "Tanya saya tentang gitar!",
    allLevels: "Semua Kamar",
    beginner: "Studio",
    intermediate: "1 Kamar",
    advanced: "2 Kamar",
    expert: "Suite",
    allGenres: "Semua Tipe",
    rock: "Modern",
    pop: "Minimalis",
    folk: "Nordic",
    acoustic: "Hygge",
    fingerstyle: "Premium",
    indie: "Cozy",
    country: "Family",
    metal: "Executive",
    blues: "Classic",
    jazz: "Deluxe",
    showingSongs: "Menampilkan",
    song: "unit",
    noSongsFound: "Tidak ada unit tersedia",
    adjustFilters: "Coba sesuaikan filter pencarian Anda",
    backToSongs: "Kembali ke Daftar Unit",
    difficulty: "Kesulitan",
    category: "Kategori",
    key: "Kunci",
    duration: "Durasi",
    songDetails: "Detail Lagu",
    tuning: "Tuning",
    capo: "Capo",
    noCapo: "Tanpa Capo",
    fret: "Fret",
    tempo: "Tempo",
    strumming: "Strumming",
    chordsUsed: "Kunci yang Digunakan",
    totalChords: "Total kunci:",
    aboutThisSong: "Tentang Lagu Ini",
    guitarTabs: "Tab Gitar",
    lyricsAndChords: "Lirik & Kunci",
    videoTutorial: "Video Tutorial",
    watchOnYoutube: "Tonton di YouTube",
    practiceTips: "Tips Latihan",
    tipSlowly: "Mulai pelan dan fokus pada transisi kunci yang bersih",
    tipPattern:
      "Latih pola strumming secara terpisah sebelum digabung dengan kunci",
    tipMetronome: "Gunakan metronome untuk menjaga tempo yang konsisten",
    tipSections:
      "Bagi lagu menjadi bagian-bagian dan kuasai setiap bagian secara individual",
    plays: "diputar",
    difficultyLevel: "Tingkat Kesulitan",
    genre: "Genre",
    about: "Tentang",
    whatWeOffer: "Yang Kami Tawarkan",
    songLibrary: "Perpustakaan Lagu",
    songLibraryDesc:
      "1000+ lagu populer dengan kunci, tab, dan pola strumming yang akurat",
    stepByStepTutorials: "Tutorial Langkah demi Langkah",
    tutorialsDesc:
      "Tutorial video dan teks terperinci untuk setiap tingkat keahlian",
    proTips: "Tips & Teknik Pro",
    proTipsDesc:
      "Saran ahli untuk meningkatkan permainan dan menguasai teknik baru",
    skillLevels: "Tingkat Keahlian",
    beginnerDesc: "Sempurna untuk memulai",
    intermediateDesc: "Tingkatkan kemampuan Anda",
    advancedDesc: "Kuasai teknik",
    expertDesc: "Konten level profesional",
    musicGenres: "Genre Musik",
    joinCommunity: "Bergabunglah dengan Komunitas Kami",
    communityDesc:
      "Terhubung dengan ribuan penggemar gitar, bagikan kemajuan Anda, dan belajar bersama. Ikuti kami di media sosial untuk tips harian, tutorial, dan inspirasi!",
    keepPlaying: "Terus bermain, terus belajar! 🎸",
    aiGreeting:
      "Halo, gitaris! 🎸 Saya asisten belajar gitar Anda. Tanyakan hal-hal seperti:\n\n• 'Lagu untuk pemula?'\n• 'Tampilkan lagu rock'\n• 'Saya ingin belajar fingerstyle'\n• 'Rekomendasikan lagu menengah'\n\nBagaimana saya bisa membantu Anda hari ini?",
    quickSuggestions: "Saran cepat:",
    quickPrompt1: "Lagu pemula untuk saya",
    quickPrompt2: "Tampilkan lagu rock",
    quickPrompt3: "Rekomendasi fingerstyle",
    quickPrompt4: "Bagaimana latihan gitar?",
    quickPrompt5: "Apa itu kunci mudah?",
    typeMessage: "Tanya saya tentang lagu gitar, kunci, tips...",
    sending: "Mengirim...",
    rating: "Rating",
    oAuthLoginExplanation: "Masuk untuk melihat lebih banyak pelajaran.",
    moreLessons: "Lebih banyak pelajaran",
    googleOAuthLogin: "Masuk dengan Google",
    appleOAuthLogin: "Masuk dengan Apple",
    guitarSongsLibrary: "🎸 Perpustakaan Lagu Gitar",
    learnFavoriteSongs: "Pelajari lagu favorit dengan kunci & tab",
    songs_plural: "lagu",
    welcomeAboutText:
      "Selamat datang di Stay at Scandinavia! Destinasi utama Anda untuk belajar gitar. Kami menyediakan tutorial gitar yang komprehensif, diagram kunci, tab, dan tips untuk gitaris dari semua level - dari pemula hingga pemain tingkat lanjut. Misi kami adalah membuat pembelajaran gitar mudah diakses, menyenangkan, dan efektif untuk semua orang.",
    // AI Assistant responses
    chordResponseTitle:
      "Kunci gitar adalah kombinasi nada yang dimainkan bersama! 🎵",
    chordResponseBasic:
      "Untuk pemula, saya merekomendasikan untuk memulai dengan kunci dasar terbuka ini:\n\n• **C Major** - Salah satu kunci termudah\n• **G Major** - Sangat umum di lagu\n• **D Major** - Bagus untuk transisi\n• **E Minor** - Mudah dimainkan\n• **A Minor** - Suara yang halus",
    chordResponseQuestion:
      "Latih transisi antar kunci ini dengan lancar. Mau saya rekomendasikan lagu mudah menggunakan kunci ini?",
    practiceResponseTitle: "Pertanyaan bagus tentang latihan! 🎯",
    practiceResponseBeginner: "• **Pemula**: 15-30 menit setiap hari",
    practiceResponseIntermediate: "• **Menengah**: 30-60 menit setiap hari",
    practiceResponseAdvanced: "• **Lanjutan**: 1-2 jam setiap hari",
    practiceResponseKeyTips: "**Tips utama:**",
    practiceResponseTip1: "✓ Konsistensi lebih penting - latihan setiap hari!",
    practiceResponseTip2: "✓ Pemanasan dengan pergantian kunci",
    practiceResponseTip3: "✓ Gunakan metronome untuk membangun timing",
    practiceResponseTip4: "✓ Istirahat untuk menghindari ketegangan",
    practiceResponseTip5: "✓ Fokus pada akurasi sebelum kecepatan",
    practiceResponseRemember:
      "Ingat: Kualitas latihan lebih baik dari kuantitas! 🎸",
    strummingResponseTitle:
      "Pola strumming menambah ritme pada permainan Anda! 🎵",
    strummingResponseBasicPattern:
      "**Pola dasar untuk pemula:**\nD = Bawah, U = Atas",
    strummingResponsePattern1:
      "**Pola 1**: D D U U D U\n(Bawah-Bawah-Atas-Atas-Bawah-Atas)",
    strummingResponsePattern2:
      "**Pola 2**: D DU UDU\n(Bawah-Bawah-Atas-Atas-Bawah-Atas)",
    strummingResponseProTip:
      "**Tips pro:** Mulai pelan dengan metronome dan tingkatkan kecepatan secara bertahap. Sebagian besar lagu populer menggunakan variasi dari pola ini!",
    strummingResponseQuestion: "Mau rekomendasi lagu untuk melatih pola ini?",
    capoResponseTitle: "Capo adalah alat yang bagus untuk gitaris! 🎸",
    capoResponseWhatItDoes:
      "**Fungsinya:**\nCapo menjepit fretboard untuk menaikkan nada, memungkinkan Anda memainkan bentuk kunci yang lebih mudah di kunci yang berbeda.",
    capoResponseBenefits: "**Manfaat:**",
    capoResponseBenefit1:
      "✓ Mainkan lagu di kunci asli dengan kunci yang lebih mudah",
    capoResponseBenefit2: "✓ Sesuaikan dengan jangkauan vokal Anda",
    capoResponseBenefit3: "✓ Ciptakan nada yang lebih terang dan berdering",
    capoResponseBenefit4: "✓ Transposisi lagu dengan cepat",
    capoResponseExample:
      "**Contoh:** Wonderwall menggunakan Capo di fret 2 - membuat kunci jauh lebih mudah!",
    capoResponseCheckOut:
      "Banyak lagu di perpustakaan kami menunjukkan posisi capo. Lihat saja!",
    noResultsResponse:
      "Saya ingin membantu Anda menemukan lagu yang sempurna! 🎸",
    noResultsTryAsking1: "• 'Tampilkan lagu pemula'",
    noResultsTryAsking2: "• 'Saya ingin lagu rock'",
    noResultsTryAsking3: "• 'Rekomendasikan lagu fingerstyle'",
    noResultsTryAsking4: "• 'Lagu mudah untuk latihan'",
    noResultsOrAsk:
      "Atau tanyakan tentang teknik gitar, kunci, atau tips latihan!",
    recommendPerfect: "Sempurna! Berikut beberapa lagu",
    recommendGreat: "Pilihan bagus! Berikut beberapa lagu",
    recommendAwesome: "Keren! Lihat lagu",
    recommendHere: "yang luar biasa untuk Anda: 🎸",
    tipStart: "💡 **Tip:**",
    tipStartSlow: "Mulai pelan dan tingkatkan kecepatan secara bertahap!",
    tipPracticeDaily: "Latih transisi kunci setiap hari!",
    tipUseMetronome: "Gunakan metronome untuk tetap tepat waktu!",
    tipCheckSongs: "Lihat detail lengkap lagu di tab Lagu!",
    tipTuneGuitar: "Ingat untuk menyetel gitar Anda sebelum latihan!",
    wantMore: "Mau rekomendasi lagi? Tanya saja! 😊",
    and: "dan",
    // SongCard & SongDetailPage (new keys only)
    more: "lagi",
    capoFret: "Capo",
    kPlays: "diputar",
    released: "Dirilis:",
    na: "N/A",
    bpm: "BPM",
    // ProfileLoggedIn
    masterGuitarist: "Gitaris Master",
    tutorials: "Tutorial",
    visitYoutubeChannel: "Kunjungi Channel YouTube",
    facebook: "Facebook",
    instagram: "Instagram",
    logOut: "Keluar",
  },
  en: {
    appName: "🎸 Stay at Scandinavia",
    songs: "Home",
    askAI: "Amenities",
    profile: "Contact",
    welcome: "Welcome to Stay at Scandinavia!",
    songsDesc: "Learn your favorite songs with chords & tabs",
    guitarLearningAssistant: "Guitar Learning Assistant",
    askMeAnything: "Ask me anything about guitar!",
    allLevels: "All Rooms",
    beginner: "Studio",
    intermediate: "1 Bedroom",
    advanced: "2 Bedroom",
    expert: "Suite",
    allGenres: "All Types",
    rock: "Modern",
    pop: "Minimalist",
    folk: "Nordic",
    acoustic: "Hygge",
    fingerstyle: "Premium",
    indie: "Cozy",
    country: "Family",
    metal: "Executive",
    blues: "Classic",
    jazz: "Deluxe",
    showingSongs: "Showing",
    song: "unit",
    noSongsFound: "No units available",
    adjustFilters: "Try adjusting your search filters",
    backToSongs: "Back to Units",
    difficulty: "Difficulty",
    category: "Category",
    key: "Key",
    duration: "Duration",
    songDetails: "Song Details",
    tuning: "Tuning",
    capo: "Capo",
    noCapo: "No Capo",
    fret: "Fret",
    tempo: "Tempo",
    strumming: "Strumming",
    chordsUsed: "Chords Used",
    totalChords: "Total chords:",
    aboutThisSong: "About This Song",
    guitarTabs: "Guitar Tabs",
    lyricsAndChords: "Lyrics & Chords",
    videoTutorial: "Video Tutorial",
    watchOnYoutube: "Watch on YouTube",
    practiceTips: "Practice Tips",
    tipSlowly: "Start slowly and focus on clean chord transitions",
    tipPattern:
      "Practice the strumming pattern separately before combining with chords",
    tipMetronome: "Use a metronome to maintain consistent tempo",
    tipSections:
      "Break the song into sections and master each part individually",
    plays: "plays",
    difficultyLevel: "Difficulty Level",
    genre: "Genre",
    about: "About",
    whatWeOffer: "What We Offer",
    songLibrary: "Song Library",
    songLibraryDesc:
      "1000+ popular songs with accurate chords, tabs, and strumming patterns",
    stepByStepTutorials: "Step-by-Step Tutorials",
    tutorialsDesc: "Detailed video and text tutorials for every skill level",
    proTips: "Pro Tips & Techniques",
    proTipsDesc:
      "Expert advice to improve your playing and master new techniques",
    skillLevels: "Skill Levels",
    beginnerDesc: "Perfect to start",
    intermediateDesc: "Level up your skills",
    advancedDesc: "Master techniques",
    expertDesc: "Pro level content",
    musicGenres: "Music Genres",
    joinCommunity: "Join Our Community",
    communityDesc:
      "Connect with thousands of guitar enthusiasts, share your progress, and learn together. Follow us on social media for daily tips, tutorials, and inspiration!",
    keepPlaying: "Keep playing, keep learning! 🎸",
    aiGreeting:
      "Hey there, guitarist! 🎸 I'm your guitar learning assistant. Ask me things like:\n\n• 'What songs for beginners?'\n• 'Show me some rock songs'\n• 'I want to learn fingerstyle'\n• 'Recommend intermediate songs'\n\nHow can I help you today?",
    quickSuggestions: "Quick suggestions:",
    quickPrompt1: "Beginner songs for me",
    quickPrompt2: "Show rock songs",
    quickPrompt3: "Fingerstyle recommendations",
    quickPrompt4: "How to practice guitar?",
    quickPrompt5: "What are easy chords?",
    typeMessage: "Ask me about guitar songs, chords, tips...",
    sending: "Sending...",
    rating: "Rating",
    oAuthLoginExplanation: "Masuk untuk melihat lebih banyak pelajaran.",
    moreLessons: "Lebih banyak pelajaran",
    googleOAuthLogin: "Masuk dengan Google",
    appleOAuthLogin: "Masuk dengan Apple",
    guitarSongsLibrary: "🎸 Guitar Songs Library",
    learnFavoriteSongs: "Learn your favorite songs with chords & tabs",
    songs_plural: "songs",
    welcomeAboutText:
      "Welcome to Stay at Scandinavia! Your ultimate destination for learning guitar. We provide comprehensive guitar tutorials, chord charts, tabs, and tips for guitarists of all levels - from complete beginners to advanced players. Our mission is to make guitar learning accessible, fun, and effective for everyone.",
    // AI Assistant responses
    chordResponseTitle:
      "Guitar chords are combinations of notes played together! 🎵",
    chordResponseBasic:
      "For beginners, I recommend starting with these basic open chords:\n\n• **C Major** - One of the easiest chords\n• **G Major** - Very common in songs\n• **D Major** - Great for transitions\n• **E Minor** - Easy to play\n• **A Minor** - Smooth sound",
    chordResponseQuestion:
      "Practice transitioning between these chords smoothly. Want me to recommend some easy songs using these chords?",
    practiceResponseTitle: "Great question about practice! 🎯",
    practiceResponseBeginner: "• **Beginners**: 15-30 minutes daily",
    practiceResponseIntermediate: "• **Intermediate**: 30-60 minutes daily",
    practiceResponseAdvanced: "• **Advanced**: 1-2 hours daily",
    practiceResponseKeyTips: "**Key tips:**",
    practiceResponseTip1: "✓ Consistency beats length - practice daily!",
    practiceResponseTip2: "✓ Warm up with chord changes",
    practiceResponseTip3: "✓ Use a metronome to build timing",
    practiceResponseTip4: "✓ Take breaks to avoid strain",
    practiceResponseTip5: "✓ Focus on accuracy before speed",
    practiceResponseRemember:
      "Remember: Quality practice is better than quantity! 🎸",
    strummingResponseTitle: "Strumming patterns add rhythm to your playing! 🎵",
    strummingResponseBasicPattern:
      "**Basic pattern for beginners:**\nD = Down, U = Up",
    strummingResponsePattern1:
      "**Pattern 1**: D D U U D U\n(Down-Down-Up-Up-Down-Up)",
    strummingResponsePattern2:
      "**Pattern 2**: D DU UDU\n(Down-Down-Up-Up-Down-Up)",
    strummingResponseProTip:
      "**Pro tip:** Start slowly with a metronome and gradually increase speed. Most popular songs use variations of these patterns!",
    strummingResponseQuestion:
      "Want song recommendations to practice these patterns?",
    capoResponseTitle: "A capo is a great tool for guitarists! 🎸",
    capoResponseWhatItDoes:
      "**What it does:**\nIt clamps across the fretboard to raise the pitch, letting you play easier chord shapes in different keys.",
    capoResponseBenefits: "**Benefits:**",
    capoResponseBenefit1: "✓ Play songs in original key with easier chords",
    capoResponseBenefit2: "✓ Match your vocal range",
    capoResponseBenefit3: "✓ Create brighter, ringing tones",
    capoResponseBenefit4: "✓ Transpose songs quickly",
    capoResponseExample:
      "**Example:** Wonderwall uses Capo on 2nd fret - makes the chords much easier!",
    capoResponseCheckOut:
      "Many songs in our library show capo positions. Check them out!",
    noResultsResponse: "I'd love to help you find the perfect songs! 🎸",
    noResultsTryAsking1: "• 'Show me beginner songs'",
    noResultsTryAsking2: "• 'I want rock songs'",
    noResultsTryAsking3: "• 'Recommend fingerstyle pieces'",
    noResultsTryAsking4: "• 'Easy songs for practice'",
    noResultsOrAsk: "Or ask about guitar techniques, chords, or practice tips!",
    recommendPerfect: "Perfect! Here are some awesome",
    recommendGreat: "Great choice! Here are some excellent",
    recommendAwesome: "Awesome! Check out these",
    recommendHere: "for you: 🎸",
    tipStart: "💡 **Tip:**",
    tipStartSlow: "Start slow and build speed gradually!",
    tipPracticeDaily: "Practice chord transitions daily!",
    tipUseMetronome: "Use a metronome to stay in time!",
    tipCheckSongs: "Check out the full song details in the Songs tab!",
    tipTuneGuitar: "Remember to tune your guitar before practicing!",
    wantMore: "Want more recommendations? Just ask! 😊",
    and: "and",
    // SongCard & SongDetailPage (new keys only)
    more: "more",
    capoFret: "Capo",
    kPlays: "plays",
    released: "Released:",
    na: "N/A",
    bpm: "BPM",
    // ProfileLoggedIn
    masterGuitarist: "Master Guitarist",
    tutorials: "Tutorials",
    visitYoutubeChannel: "Visit YouTube Channel",
    facebook: "Facebook",
    instagram: "Instagram",
    logOut: "Log out",
  },
};
