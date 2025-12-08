import { Routes, Route, useLocation } from "react-router-dom";
import * as Tooltip from "@radix-ui/react-tooltip";
import Navbar from "./components/Navbar";
import AnimatedPage from "./components/AnimatedPage";
import HomePage from "./pages/Home";
import ProfilePage from "./pages/Profile";
import WhatsForPage from "./pages/WhatsFor";
import { AccountProvider } from "./context/AccountContext";

export default function App() {
  const location = useLocation();
  return (
    <Tooltip.Provider>
      <div className="bg-sas-gradient-light min-h-screen w-full font-sans relative safe-area">
        <Navbar />
        <main className="pt-safe-top pb-4 bottom-nav-safe max-w-2xl mx-auto px-4">
          <AccountProvider>
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <AnimatedPage>
                    <HomePage />
                  </AnimatedPage>
                }
              />
              <Route
                path="/whats-for"
                element={
                  <AnimatedPage>
                    <WhatsForPage />
                  </AnimatedPage>
                }
              />
              <Route
                path="/profile"
                element={
                  <AnimatedPage>
                    <ProfilePage />
                  </AnimatedPage>
                }
              />
            </Routes>
          </AccountProvider>
        </main>
      </div>
    </Tooltip.Provider>
  );
}
