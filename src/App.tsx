import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Art from "./3d";
import Work from "./Work";
import About from "./About";
import Music from "./Music";
import Header from "./Header";
import Footer from "./Footer";
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
            style={{ width: width > 800 ? "80%" : "85%" }}
          >
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
