import "services/firebase";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "contexts/AuthContext";
import Home from "pages/Home";
import NewRoom from "pages/NewRoom";
import Room from "pages/Room";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
