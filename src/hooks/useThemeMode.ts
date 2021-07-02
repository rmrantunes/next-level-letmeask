import { useContext } from "react";
import { ThemeModeContext } from "contexts/ThemeModeContext";

export function useThemeMode() {
  const themeMode = useContext(ThemeModeContext);
  return themeMode;
}
