import "services/firebase";

import { ThemeProvider } from "styled-components";
import { AuthContextProvider } from "contexts/AuthContext";
import Routes from "routes/routes";

function App() {
  return (
    <ThemeProvider theme={{}}>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
