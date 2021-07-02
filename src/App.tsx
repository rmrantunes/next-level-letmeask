import "services/firebase";

import { ThemeProvider } from "styled-components";
import { AuthContextProvider } from "contexts/AuthContext";
import GlobalStyle from "styles/GlobalStyle";
import Routes from "routes/routes";
import { useThemeMode } from "hooks/useThemeMode";
import ToggleTheme from "components/ToggleTheme";

function App() {
  const { theme } = useThemeMode();

  return (
    <ThemeProvider theme={theme!}>
      <GlobalStyle />
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
      <ToggleTheme />
    </ThemeProvider>
  );
}

export default App;
