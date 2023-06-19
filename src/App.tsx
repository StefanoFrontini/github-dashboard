import { useState, useEffect } from "react";
import { Dashboard } from "./pages";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | undefined>(undefined);
  const toggleDarkMode = () => {
    if (isDarkMode) localStorage.setItem("theme", "light");
    else localStorage.setItem("theme", "dark");
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("darkBg", isDarkMode);
    document.documentElement.classList.toggle("whiteBg", !isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
    () => {
      document.documentElement.classList.remove("darkBg");
      document.documentElement.classList.remove("whiteBg");
      document.documentElement.classList.remove("dark");
    };
  }, [isDarkMode]);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  return (
    <div className="bg-slate-100 dark:bg-slate-900">
      <Dashboard isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default App;
