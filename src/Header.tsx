import { Row, Col } from "react-bootstrap";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const onHomePage = location.pathname === "/";

  const bigHeaderStyles = {
    fontSize: 100,
    fontWeight: 600,
    transform: "scale(1, .5)",
  };

  const bigSubHeaderStyles = {
    fontSize: 40,
    fontWeight: 600,
    transform: "scale(1, .4)",
  };

  const smallHeaderStyles = {
    fontSize: 40,
    fontWeight: 600,
    transform: "scale(1, .5)",
  };

  return onHomePage ? (
    <div>
      <Row>
        <Col lg={6} className="border-bottom border-end border-5">
          <div style={bigHeaderStyles}>Michael Overton Brown</div>
          <div style={bigSubHeaderStyles}>technologist person</div>
        </Col>

        <Col className="border-bottom border-start border-5">
          <Nav home={onHomePage} />
        </Col>
      </Row>
    </div>
  ) : (
    <div>
      <Row>
        <Col lg={6} className="border-bottom border-end border-5">
          <div style={smallHeaderStyles}>Michael Overton Brown</div>
        </Col>

        <Col className="border-bottom border-start border-5">
          <Nav home={onHomePage} />
        </Col>
      </Row>
    </div>
  );
};

export default Header;
