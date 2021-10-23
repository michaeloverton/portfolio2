import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Container } from "react-bootstrap";
import Tech from "./Tech";
import Music from "./Music";
import Art from "./Art";
import Info from "./Info";
import Header from "./Header";
import Footer from "./Footer";
import { MobileProvider } from "./MobileProvider";

function App() {
  return (
    <Router>
      <MobileProvider>
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

              <Route path="/info">
                <Info />
              </Route>
            </Switch>

            <Footer />
          </Container>
        </div>
      </MobileProvider>
    </Router>
  );
}

export default App;
