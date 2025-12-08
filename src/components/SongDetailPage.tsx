import {
  ArrowLeft,
  Music,
  Star,
  TrendingUp,
  Heart,
  Play,
  BookOpen,
  Gauge,
} from "lucide-react";
import { Song } from "../types/song";
import { haptics } from "../utils/haptics";
import { useLang } from "../context/LanguageContext";

interface SongDetailPageProps {
  song: Song;
  onBack: () => void;
}

const difficultyColors = {
  Beginner: "bg-green-100 text-green-700 border-green-300",
  Intermediate: "bg-yellow-100 text-yellow-700 border-yellow-300",
  Advanced: "bg-orange-100 text-orange-700 border-orange-300",
  Expert: "bg-red-100 text-red-700 border-red-300",
};

export default function SongDetailPage({ song, onBack }: SongDetailPageProps) {
  const { t } = useLang();

  const handleBack = async () => {
    await haptics.navigation();
    onBack();
  };

  return (
    <div className="space-y-6 pb-safe-bottom">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="flex items-center space-x-2 text-white bg-brand-gold hover:bg-brand-gold-dark font-medium transition-colors px-4 py-2 rounded-lg shadow-md"
      >
        <ArrowLeft size={20} />
        <span>{t.backToSongs}</span>
      </button>

      {/* Hero Section */}
      <div className="bg-brand-gradient rounded-lg shadow-lg p-6 text-white glow">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{song.title}</h1>
            <p className="text-xl text-purple-100">{song.artist}</p>
            {song.year && (
              <p className="text-sm text-white/80 mt-1">
                {t.released} {song.year}
              </p>
            )}
          </div>
          <div className="text-5xl ml-4">{song.thumbnail}</div>
        </div>

        {/* Stats Row */}
        <div className="flex items-center justify-between pt-4 border-t border-white/30">
          <div className="flex items-center space-x-1">
            <Star className="fill-brand-gold text-brand-gold" size={20} />
            <span className="font-bold text-lg">{song.rating}</span>
            <span className="text-white/80">/5</span>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <TrendingUp size={16} />
              <span>{(song.playCount / 1000).toFixed(0)}k</span>
            </div>
            <div className="flex items-center space-x-1">
              <Heart size={16} />
              <span>{(song.favoriteCount / 1000).toFixed(1)}k</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Gauge size={18} className="text-brand-gold" />
            <span className="text-sm text-gray-600">{t.difficulty}</span>
          </div>
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${difficultyColors[song.difficulty]}`}
          >
            {song.difficulty}
          </span>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Music size={18} className="text-brand-gold" />
            <span className="text-sm text-gray-600">{t.category}</span>
          </div>
          <span className="font-bold text-gray-800">{song.category}</span>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center space-x-2 mb-2">
            <BookOpen size={18} className="text-brand-gold" />
            <span className="text-sm text-gray-600">{t.key}</span>
          </div>
          <span className="font-bold text-gray-800">{song.key}</span>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Play size={18} className="text-brand-gold" />
            <span className="text-sm text-gray-600">{t.duration}</span>
          </div>
          <span className="font-bold text-gray-800">
            {song.duration || t.na}
          </span>
        </div>
      </div>

      {/* Song Details */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          {t.songDetails}
        </h2>

        <div className="space-y-3">
          {song.tuning && (
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">{t.tuning}</span>
              <span className="font-semibold text-gray-800">{song.tuning}</span>
            </div>
          )}

          {song.capoPosition !== undefined && (
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">{t.capo}</span>
              <span className="font-semibold text-gray-800">
                {song.capoPosition === 0
                  ? t.noCapo
                  : `${t.fret} ${song.capoPosition}`}
              </span>
            </div>
          )}

          {song.tempo && (
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">{t.tempo}</span>
              <span className="font-semibold text-gray-800">
                {song.tempo} {t.bpm}
              </span>
            </div>
          )}

          {song.strummingPattern && (
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">{t.strumming}</span>
              <span className="font-mono text-sm font-bold text-brand-dark bg-brand-gold/20 border border-brand-gold/40 px-3 py-1 rounded">
                {song.strummingPattern}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Chords Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">{t.chordsUsed}</h2>
        <div className="flex flex-wrap gap-3">
          {song.chords.map((chord, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-brand-gold/20 to-brand-dark/20 border-2 border-brand-gold rounded-lg p-4 min-w-[80px] text-center transform hover:scale-105 transition-transform"
            >
              <span className="text-2xl font-bold text-brand-dark font-mono">
                {chord}
              </span>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-4">
          {t.totalChords} {song.chords.length}
        </p>
      </div>

      {/* Description */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          {t.aboutThisSong}
        </h2>
        <p className="text-gray-700 leading-relaxed">{song.description}</p>
      </div>

      {/* Tabs Section (if available) */}
      {song.tabs && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            {t.guitarTabs}
          </h2>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
            <pre className="font-mono text-sm whitespace-pre">{song.tabs}</pre>
          </div>
        </div>
      )}

      {/* Lyrics Section (if available) */}
      {song.lyrics && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            {t.lyricsAndChords}
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="font-mono text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
              {song.lyrics}
            </pre>
          </div>
        </div>
      )}

      {/* Video Link (if available) */}
      {song.videoUrl && (
        <div className="bg-brand-gradient rounded-lg shadow-md p-6 text-white glow">
          <h2 className="text-xl font-bold mb-3">{t.videoTutorial}</h2>
          <a
            href={song.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => haptics.buttonPress()}
            className="inline-flex items-center space-x-2 bg-white text-brand-dark px-6 py-3 rounded-lg font-semibold hover:bg-brand-gold/20 transition-colors"
          >
            <Play size={20} />
            <span>{t.watchOnYoutube}</span>
          </a>
        </div>
      )}

      {/* Practice Tips */}
      <div className="bg-gradient-to-br from-brand-gold/20 to-brand-gold/30 rounded-lg shadow-md p-6 border-2 border-brand-gold">
        <h2 className="text-xl font-bold text-brand-dark mb-3">
          {t.practiceTips}
        </h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start space-x-2">
            <span className="text-brand-gold-dark font-bold">•</span>
            <span>{t.tipSlowly}</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-brand-gold-dark font-bold">•</span>
            <span>{t.tipPattern}</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-brand-gold-dark font-bold">•</span>
            <span>{t.tipMetronome}</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-brand-gold-dark font-bold">•</span>
            <span>{t.tipSections}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
