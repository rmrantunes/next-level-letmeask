import "services/firebase";

import { ThemeProvider } from "styled-components";
import { AuthContextProvider } from "contexts/AuthContext";
import Routes from "routes/routes";
import { useThemeMode } from "hooks/useThemeMode";

function App() {
  const { theme } = useThemeMode();

  return (
    <ThemeProvider theme={theme!}>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
