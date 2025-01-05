"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  PropsWithChildren
} from "react";

type ThemeContextValue = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  toggleTheme: () => { },
});

export const useThemeContext = () => {
  if (!ThemeContext) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return useContext(ThemeContext);
};

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">(localStorage.getItem("theme") as "light" | "dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
