import { useCallback, useEffect, useState } from "react";
import { DefaultTheme } from "styled-components";
import { DarkTheme, Theme } from "styles/theme";

type ThemeModes = "light" | "dark";

type UseThemeProps = {
  light: Theme;
  dark?: DarkTheme;
};

function useTheme(props: UseThemeProps) {
  const localStorageThemeMode = window.localStorage.getItem(
    "themeMode"
  ) as ThemeModes | null;

  const [theme, setTheme] = useState<ThemeModes>(
    localStorageThemeMode || "dark"
  );

  const toggleTheme = useCallback(() => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("themeMode", theme);
  }, [theme]);

  return {
    theme: props[theme] as DefaultTheme,
    mode: theme,
    setTheme,
    toggleTheme,
  };
}

export default useTheme;
