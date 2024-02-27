'use client'

import { MdDarkMode } from "react-icons/md";
import { HiSun } from "react-icons/hi";
import { useMainContext } from "@/hooks/useMainContext";
import { useThemeContext } from "@/hooks/useThemeContext";

export default function Toggle() {
  const { setThemeGlobal } = useMainContext();
  const { theme, setTheme } = useThemeContext();

  const eventClick = (): void => {
    const currentTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(currentTheme);
    setThemeGlobal(currentTheme);
  };

  return (
    <div className="curso-pointer text-white">
      {theme === "dark" ? (
        <button onClick={eventClick}>
          <HiSun />
        </button>
      ) : (
          <button onClick={eventClick}>
          <MdDarkMode />
        </button>
      )}
    </div>
  );
}
