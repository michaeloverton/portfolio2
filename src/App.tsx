import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Art from "./3d";
import Work from "./Home5";
import About from "./About";
import Music from "./Music2";
import Header from "./Header";
import Footer from "./Footer";
import { MobileProvider } from "./MobileProvider";

function App() {
  return (
    <Router>
      <MobileProvider>
        <div className="App">
          <div className="mx-auto main-column">
            <Header />

            <Switch>
              <Route path="/music">
                <Music />
              </Route>

              <Route path="/about">
                <About />
              </Route>

              <Route path="/3d">
                <Art />
              </Route>

              <Route path="/">
                <Work />
              </Route>
            </Switch>

            <Footer />
          </div>
        </div>
      </MobileProvider>
    </Router>
  );
}

export default App;
