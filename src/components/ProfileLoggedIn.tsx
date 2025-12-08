import { Youtube, Facebook, Instagram, Trophy } from "lucide-react";
import { haptics } from "../utils/haptics";
import { useLang } from "../context/LanguageContext";
import { useAccount } from "../context/AccountContext";

function ProfileLoggedIn() {
  const { t } = useLang();
  const { user, onLoggedOut } = useAccount();

  const handleLogout = async () => {
    onLoggedOut();
  };

  return (
    <>
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-20 h-20 bg-brand-gradient rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
            🎸
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{user?.name}</h2>
            <p className="text-gray-600">{user?.email}</p>
            <button
              onClick={async () => {
                await haptics.buttonPress();
                await handleLogout();
              }}
              className="w-full bg-white hover:bg-gray-50 active:bg-gray-100 text-gray-700 font-medium rounded-lg px-4 py-3 flex items-center justify-center gap-3 transition-colors border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm"
              aria-label={t.logOut}
            >
              {t.logOut}
            </button>
          </div>
        </div>

        {/* Level Badge */}
        <div className="flex items-center space-x-2 bg-gradient-to-r from-brand-gold/20 to-brand-dark/20 border border-brand-gold/40 p-3 rounded-lg mb-4">
          <Trophy className="text-brand-gold" size={24} />
          <span className="text-brand-dark font-bold text-lg">
            {t.masterGuitarist}
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-gold">1000+</div>
            <div className="text-sm text-gray-600">{t.songs}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-gold">500+</div>
            <div className="text-sm text-gray-600">{t.tutorials}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-gold">4.9</div>
            <div className="text-sm text-gray-600">{t.rating}</div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="space-y-3">
          <a
            href="https://www.youtube.com/@tutorialgitar88"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => haptics.buttonPress()}
            className="flex items-center justify-center space-x-2 bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            <Youtube size={20} />
            <span className="font-medium">{t.visitYoutubeChannel}</span>
          </a>

          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://www.facebook.com/tutorialgitar88"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => haptics.buttonPress()}
              className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Facebook size={20} />
              <span className="font-medium">{t.facebook}</span>
            </a>

            <a
              href="https://www.instagram.com/tutorialgitar88"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => haptics.buttonPress()}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors shadow-md"
            >
              <Instagram size={20} />
              <span className="font-medium">{t.instagram}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileLoggedIn;
