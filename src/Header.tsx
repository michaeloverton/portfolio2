import { Row, Col } from "react-bootstrap";
import Nav from "./Nav";
import { useLocation } from "react-router-dom";
import { useIsMobile } from "./MobileProvider";
import { MouseHighlight } from "./TextLayout";

const Header: React.FC = () => {
  const borderWidth = "4px";
  const homePageBorderWidth = "6px";
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
            borderBottom: `${homePageBorderWidth} solid`,
            borderRight: `${homePageBorderWidth} solid`,
          }}
        >
          <div style={bigHeaderStyles}>
            <div>
              <MouseHighlight>Michael</MouseHighlight>{" "}
            </div>
            <div>
              <MouseHighlight>Overton</MouseHighlight>{" "}
            </div>
            <div>
              <MouseHighlight>Brown</MouseHighlight>
            </div>
          </div>
          <div style={bigSubHeaderStyles}>
            <MouseHighlight>techno</MouseHighlight>
            <MouseHighlight>-</MouseHighlight>
            <MouseHighlight>human</MouseHighlight>
          </div>
        </Col>

        <Col
          style={
            isMobile()
              ? {
                  borderBottom: `${homePageBorderWidth} solid`,
                  borderLeft: `${homePageBorderWidth} solid`,
                }
              : {}
          }
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
          <div style={smallHeaderStyles}>
            <MouseHighlight>Michael</MouseHighlight>{" "}
            <MouseHighlight>Overton</MouseHighlight>{" "}
            <MouseHighlight>Brown</MouseHighlight>
          </div>
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
