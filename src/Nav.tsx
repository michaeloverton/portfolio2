import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useIsMobile } from "./MobileProvider";
import "./Nav.css";

type Props = {
  home: boolean;
};

const Nav: React.FC<Props> = ({ home }) => {
  const { isMobile } = useIsMobile();

  const linkStyles = {
    fontSize: 65,
    fontWeight: 600,
    textDecoration: "none",
    color: "#15ff00", // this color must match App.css
  };

  const smallLinkStyles = {
    fontSize: 40,
    fontWeight: 600,
    textDecoration: "none",
    color: "#15ff00", // this color must match App.css
  };

  return home ? (
    <div className="p-5">
      <Row>
        <Col>
          <Link style={linkStyles} to="/games">
            <div className="link">games</div>
          </Link>
        </Col>
      </Row>

      <Row>
        <Col>
          <Link style={linkStyles} to="/music">
            <div className="link">music</div>
          </Link>
        </Col>
      </Row>

      <Row>
        <Col>
          <Link style={linkStyles} to="/art">
            <div className="link">3D</div>
          </Link>
        </Col>
      </Row>

      <Row>
        <Col>
          <Link style={linkStyles} to="/info">
            <div className="link">info</div>
          </Link>
        </Col>
      </Row>
    </div>
  ) : (
    <div className="p-2">
      {!isMobile() ? (
        <Row>
          <Col>
            <Link style={smallLinkStyles} to="/games">
              <div className="link">games</div>
            </Link>
          </Col>

          <Col>
            <Link style={smallLinkStyles} to="/music">
              <div className="link">music</div>
            </Link>
          </Col>

          <Col>
            <Link style={smallLinkStyles} to="/art">
              <div className="link">3D</div>
            </Link>
          </Col>

          <Col>
            <Link style={smallLinkStyles} to="/info">
              <div className="link">info</div>
            </Link>
          </Col>
        </Row>
      ) : (
        <div>
          <Row>
            <Col>
              <Link style={smallLinkStyles} to="/games">
                <div className="link">games</div>
              </Link>
            </Col>

            <Col>
              <Link style={smallLinkStyles} to="/music">
                <div className="link">music</div>
              </Link>
            </Col>
          </Row>

          <Row>
            <Col>
              <Link style={smallLinkStyles} to="/art">
                <div className="link">3D</div>
              </Link>
            </Col>

            <Col>
              <Link style={smallLinkStyles} to="/info">
                <div className="link">info</div>
              </Link>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default Nav;
