import { createContext, FC } from "react";
import useTheme from "hooks/useTheme";
import lightTheme, { darkTheme } from "styles/theme";

export type ThemeModeContextValue = ReturnType<typeof useTheme>;

export const ThemeModeContext = createContext({} as ThemeModeContextValue);

export const ThemeModeProvider: FC = (props) => {
  const theme = useTheme({
    light: lightTheme,
    dark: darkTheme,
  });

  return (
    <ThemeModeContext.Provider value={{ ...theme }}>
      {props.children}
    </ThemeModeContext.Provider>
  );
};
