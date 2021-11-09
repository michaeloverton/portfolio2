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
    transform: "scale(1, .4)",
  };

  const bigSubHeaderStyles = {
    fontSize: 40,
    fontWeight: 600,
    transform: "scale(1, .4)",
  };

  const smallHeaderStyles = {
    fontSize: isMobile() ? 30 : 40,
    fontWeight: 900,
    transform: "scale(1, .5)",
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
            // paddingLeft: "5%",
          }}
        >
          <div style={smallHeaderStyles}>Michael Overton Brown</div>
          {/* {!isMobile() ? (
            <div style={smallHeaderStyles}>Michael Overton Brown</div>
          ) : (
            <div>
              <div style={smallHeaderStyles}>Michael</div>
              <div style={smallHeaderStyles}>Overton</div>
              <div style={smallHeaderStyles}>Brown</div>
            </div>
          )} */}
        </Col>
      </Row>
      <Row>
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
