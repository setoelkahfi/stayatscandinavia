import { useLang } from "../context/LanguageContext";
import { Globe } from "lucide-react";
import { haptics } from "../utils/haptics";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  const toggleLanguage = async () => {
    await haptics.selection();
    setLang(lang === "id" ? "en" : "id");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/80 backdrop-blur-sm shadow-md hover:bg-white transition-all duration-200 transform hover:scale-105"
      aria-label="Toggle language"
    >
      <Globe size={18} className="text-purple-600" />
      <span className="text-sm font-semibold text-gray-700">
        {lang === "id" ? "ID" : "EN"}
      </span>
    </button>
  );
}