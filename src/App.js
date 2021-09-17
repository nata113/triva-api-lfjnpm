import React  from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import FormUser from "./components/formUser";
import Questions from "./components/Questions"
import TriviaProvider from "./Context/TriviaContext";

function App() {

  return (
    <div className="app">
      <Router>
        <TriviaProvider>
        <Switch>
          <Route path="/" exact>
            <FormUser />
          </Route>
          <Route path="/formUser" exact>
            <FormUser />
          </Route>
          <Route path="/questions/">
            <Questions />
          </Route>
        </Switch>
        </TriviaProvider>
      </Router>
    </div>
  );
}

export default App;
