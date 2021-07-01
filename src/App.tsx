import "services/firebase";

import { ThemeProvider } from "styled-components";
import { AuthContextProvider } from "contexts/AuthContext";
import Routes from "routes/routes";

import theme from "styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
