import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Art from "./3d";
import Work from "./Work";
import Work2 from "./Work2";
import About from "./About";
import Music from "./Music";
import Header from "./Header";
import Footer from "./Footer";
import Header2 from "./Header2";
import { MobileProvider } from "./MobileProvider";

function App() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Router>
      <MobileProvider>
        <div className="App">
          <div
            className="mx-auto main-column"
            style={{ width: width > 800 ? "90%" : "95%" }}
          >
            <Header2 />

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

              <Route exact path="/work2">
                <Work2 />
              </Route>

              <Route exact path="/">
                <Work />
              </Route>

              <Redirect from="*" to="/" />
            </Switch>

            <Footer />
          </div>
        </div>
      </MobileProvider>
    </Router>
  );
}

export default App;
