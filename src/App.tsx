import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Games from "./Games";
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
            <Row>
              <Col lg={10} sm={12} className="mx-auto">
                <Header />

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
                </Switch>

                <Footer />
              </Col>
            </Row>
          </Container>
        </div>
      </MobileProvider>
    </Router>
  );
}

export default App;
