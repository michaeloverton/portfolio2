import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Container } from "react-bootstrap";
import Tech from "./Tech";
import Music from "./Music";
import Art from "./Art";
import Header from "./Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <Header />

          <Switch>
            <Route path="/tech">
              <Tech />
            </Route>

            <Route path="/music">
              <Music />
            </Route>

            <Route path="/art">
              <Art />
            </Route>
          </Switch>

          {/* <Footer /> */}
        </Container>
      </div>
    </Router>
  );
}

export default App;
