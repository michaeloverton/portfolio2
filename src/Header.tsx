import { Row, Col } from "react-bootstrap";
import Nav from "./Nav";
import { useLocation } from "react-router-dom";
import { useIsMobile } from "./MobileProvider";

const Header: React.FC = () => {
  const borderWidth = "3px";
  const location = useLocation();
  const onHomePage = location.pathname === "/";
  const { isMobile } = useIsMobile();

  const bigHeaderStyles = {
    fontSize: isMobile() ? 90 : 100,
    fontWeight: 900,
  };

  const bigSubHeaderStyles = {
    fontSize: 40,
    fontWeight: 600,
  };

  const smallHeaderStyles = {
    fontSize: isMobile() ? 30 : 50,
    fontWeight: 900,
    transformOrigin: "left",
  };

  return onHomePage ? (
    <div>
      <Row>
        <Col
          lg={6}
          style={{
            borderBottom: `${borderWidth} solid`,
            borderRight: `${borderWidth} solid`,
          }}
        >
          <div style={bigHeaderStyles}>Michael Overton Brown</div>
          <div style={bigSubHeaderStyles}>techno-human</div>
        </Col>

        <Col
          style={{
            borderBottom: `${borderWidth} solid`,
            borderLeft: `${borderWidth} solid`,
          }}
        >
          <Nav home={onHomePage} />
        </Col>
      </Row>
    </div>
  ) : (
    <div>
      <Row>
        <Col
          style={{
            borderBottom: `${borderWidth} solid`,
            borderLeft: `${borderWidth} solid`,
          }}
        >
          <div style={smallHeaderStyles}>Michael Overton Brown</div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col
          style={{
            borderBottom: `${borderWidth} solid`,
            borderRight: `${borderWidth} solid`,
          }}
        >
          <Nav home={onHomePage} />
        </Col>
      </Row>
    </div>
  );
};

export default Header;
