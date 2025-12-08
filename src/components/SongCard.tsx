import { Music, Star, TrendingUp, Heart } from "lucide-react";
import { Song } from "../types/song";
import { useLang } from "../context/LanguageContext";

interface SongCardProps {
  song: Song;
  onClick: () => void;
}

const difficultyColors = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-yellow-100 text-yellow-700",
  Advanced: "bg-orange-100 text-orange-700",
  Expert: "bg-red-100 text-red-700",
};

export default function SongCard({ song, onClick }: SongCardProps) {
  const { t } = useLang();

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] overflow-hidden"
    >
      <div className="p-5">
        {/* Header with Title and Artist */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-gray-800 truncate">
              {song.title}
            </h3>
            <p className="text-gray-600 text-sm truncate">{song.artist}</p>
          </div>
          <div className="ml-3 text-3xl flex-shrink-0">{song.thumbnail}</div>
        </div>

        {/* Rating and Difficulty */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1">
            <Star className="text-brand-gold fill-brand-gold" size={16} />
            <span className="font-semibold text-gray-800">{song.rating}</span>
            <span className="text-gray-500 text-sm">/5</span>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[song.difficulty]}`}
          >
            {song.difficulty}
          </span>
        </div>

        {/* Chords Preview */}
        <div className="mb-3">
          <div className="flex flex-wrap gap-1.5">
            {song.chords.slice(0, 5).map((chord, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gradient-to-r from-brand-gold/20 to-brand-dark/20 text-brand-dark border border-brand-gold/30 rounded text-xs font-mono font-bold"
              >
                {chord}
              </span>
            ))}
            {song.chords.length > 5 && (
              <span className="px-2 py-1 text-gray-500 text-xs">
                +{song.chords.length - 5} {t.more}
              </span>
            )}
          </div>
        </div>

        {/* Category and Key */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <div className="flex items-center space-x-1">
            <Music size={14} />
            <span>{song.category}</span>
          </div>
          <div className="flex items-center space-x-3">
            {song.capoPosition !== undefined && song.capoPosition > 0 && (
              <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                {t.capoFret} {song.capoPosition}
              </span>
            )}
            <span className="font-semibold">
              {t.key}: {song.key}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <TrendingUp size={14} />
              <span>
                {(song.playCount / 1000).toFixed(0)}k {t.kPlays}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <Heart size={14} />
              <span>{(song.favoriteCount / 1000).toFixed(1)}k</span>
            </div>
          </div>
          {song.duration && (
            <span className="text-xs text-gray-500">{song.duration}</span>
          )}
        </div>
      </div>
    </div>
  );
}
