import { useCallback, useState } from "react";
import { DefaultTheme } from "styled-components";
import { DarkTheme, Theme } from "styles/theme";

type ThemeModes = "light" | "dark";

type UseThemeProps = {
  light: Theme;
  dark?: DarkTheme;
};

function useTheme(props: UseThemeProps) {
  const [theme, setTheme] = useState<ThemeModes>("dark");

  const toggleTheme = useCallback(() => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  }, []);

  return {
    theme: props[theme] as DefaultTheme,
    mode: theme,
    setTheme,
    toggleTheme,
  };
}

export default useTheme;
