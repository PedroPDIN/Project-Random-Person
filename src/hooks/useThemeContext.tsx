'use client'

import React, {
  ReactNode,
  createContext,
  useEffect,
  useState,
  useContext
} from "react";
import { useMainContext } from "./useMainContext";
import { IThemeContext } from "@/interfaces/IThemeContext";

const getInitialTheme = (): string => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia(`(prefers-color-scheme: dark)`);
    if (userMedia.matches) {
      return 'dark';
    };
  };

  return 'light';
};

const ThemeContext = createContext({} as IThemeContext);

export const ThemeProvider = ({
  initialTheme,
  children
}: {
  initialTheme?: string,
  children: ReactNode
}) => {
  const [theme, setTheme] = useState<string>(getInitialTheme);
  const { setThemeGlobal } = useMainContext();

  const rawSetTheme = (rawTheme: string) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === 'dark';
    setThemeGlobal(rawTheme);

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(rawTheme);

    localStorage.setItem("color-theme", rawTheme);
  }

  if (initialTheme) {
    rawSetTheme(initialTheme);
  };

  useEffect(() => {
    rawSetTheme(theme)
  }, [theme]);

  const contextValue = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): IThemeContext => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("error context theme.");
  };
  return context;
};
