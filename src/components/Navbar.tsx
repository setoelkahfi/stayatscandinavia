import { Link, useLocation } from "react-router-dom";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Home, Sparkles, Mail } from "lucide-react";
import { haptics } from "../utils/haptics";
import { useLang } from "../context/LanguageContext";
import { SupportedLanguage } from "../utils/i18n";

interface NavItem {
  path: string;
  key: "songs" | "askAI" | "profile";
  icon: React.JSX.Element;
}

const navItems: NavItem[] = [
  {
    path: "/",
    key: "songs",
    icon: <Home size={24} />,
  },
  {
    path: "/whats-for",
    key: "askAI",
    icon: <Sparkles size={24} />,
  },
  {
    path: "/profile",
    key: "profile",
    icon: <Mail size={24} />,
  },
];

export default function Navbar() {
  const location = useLocation();
  const { t, setLang, lang } = useLang();

  const handleNavClick = async () => {
    await haptics.navigation();
  };

  return (
    <>
      {/* Top bar with app name */}
      <div className="fixed top-0 left-0 w-full bg-sas-gradient text-white shadow-lg z-50 top-nav-safe">
        <div className="max-w-4xl mx-auto flex flex-row justify-center items-center px-4 py-4 w-full">
          <span className="text-2xl font-bold tracking-wide">
            Stay at Scandinavia
          </span>
          <select
            className="ml-4 rounded-lg border border-white/30 px-3 py-1.5 bg-white/20 text-sm text-white cursor-pointer shadow-md hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            value={lang}
            onClick={handleNavClick}
            onChange={(e) => setLang(e.target.value as SupportedLanguage)}
            aria-label="Change language"
          >
            <option value="en" className="text-gray-800">
              🇬🇧 English
            </option>
            <option value="id" className="text-gray-800">
              🇮🇩 Indonesia
            </option>
          </select>
        </div>
      </div>

      {/* Bottom tab navigation */}
      <nav className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-sm border-t border-sas-red/30 shadow-lg z-50 bottom-nav-safe">
        <div className="max-w-4xl mx-auto flex justify-around items-center px-4 py-0 w-full">
          {navItems.map((item) => (
            <Tooltip.Root key={item.path} delayDuration={100}>
              <Tooltip.Trigger asChild>
                <Link
                  to={item.path}
                  onClick={handleNavClick}
                  className={`flex flex-col items-center justify-center gap-1 px-6 py-3 transition-all duration-200
                    ${
                      location.pathname === item.path
                        ? "text-sas-red font-semibold"
                        : "text-gray-500 hover:text-sas-red"
                    }`}
                  style={{ minWidth: 60 }}
                >
                  {item.icon}
                  <span className="text-xs font-medium">{t[item.key]}</span>
                </Link>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content className="text-xs bg-sas-dark text-sas-white px-3 py-1.5 rounded shadow-lg font-medium">
                  {t[item.key]}
                  <Tooltip.Arrow className="fill-sas-dark" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          ))}
        </div>
      </nav>
      {/* Add top and bottom padding to main content to prevent overlap */}
      <div className="h-20" aria-hidden="true"></div>
    </>
  );
}
