import React, { useState } from "react";
import LogInPage from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterPage from "./pages/Register";
import NewsfeedPage from "./pages/Newsfeed";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(undefined);

  function handleLogIn(user) {
    setUser(user);
    setLoggedIn(true);
  }

  function handleLogOut() {
    setLoggedIn(false);
    setUser(undefined);
  }

  console.log(loggedIn, user);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LogInPage loggedIn={loggedIn} handleLogIn={handleLogIn} />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/newsfeed">
          <NewsfeedPage
            loggedIn={loggedIn}
            handleLogOut={handleLogOut}
            user={user}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
