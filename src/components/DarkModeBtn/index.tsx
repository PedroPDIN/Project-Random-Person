'use client'

import { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { HiSun } from "react-icons/hi";
import { useMainContext } from "@/hooks/useMainContext";

export default function DarkModeBtn() {
  const [theme, setTheme] = useState<string | null>(localStorage.getItem('theme') !== "light" ? "dark" : "light");
  const { setThemeGlobal } = useMainContext();

  useEffect(() => {
      const root = document.documentElement.classList;
  
      root.remove(theme === "light" ? "dark" : "light");
      root.add(theme as string);
      localStorage.setItem("theme", theme as string);
      setThemeGlobal(theme as string)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme])
  
  return (
    <div className="curso-pointer text-white">
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")}>
          <HiSun />
        </button>
      ) : (
          <button onClick={() => setTheme("light")}>
            <MdDarkMode />
          </button>
      )}
    </div>
  )
}
