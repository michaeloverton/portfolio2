import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Games from "./Games";
import Music from "./Music";
import Art from "./Art";
import Info from "./Info";
import Home from "./Home";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";
import Home5 from "./Home5";
import Header from "./Header";
import Footer from "./Footer";
import { MobileProvider } from "./MobileProvider";

function App() {
  return (
    <Router>
      <MobileProvider>
        <div className="App">
          <div className="mx-auto main-column">
            {/* <Container>
            <Row>
              <Col xl={10} lg={11} md={12} sm={12} className="mx-auto"> */}
            {/* <Header /> */}

            <Switch>
              <Route path="/games">
                <Games />
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

              <Route path="/home">
                <Home />
              </Route>

              <Route path="/home2">
                <Home2 />
              </Route>

              <Route path="/home3">
                <Home3 />
              </Route>

              <Route path="/home4">
                <Home4 />
              </Route>

              <Route path="/home5">
                <Home5 />
              </Route>
            </Switch>

            {/* <Footer /> */}
            {/* </Col>
            </Row>
          </Container> */}
          </div>
        </div>
      </MobileProvider>
    </Router>
  );
}

export default App;
