import "services/firebase";

import { AuthContextProvider } from "contexts/AuthContext";
import Routes from "routes/routes";

function App() {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
}

export default App;
