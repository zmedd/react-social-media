import LogInPage from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LogInPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
