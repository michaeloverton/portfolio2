import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Nav.css";

type Props = {
  home: boolean;
};

const Nav: React.FC<Props> = ({ home }) => {
  const linkStyles = {
    fontSize: 65,
    fontWeight: 500,
    textDecoration: "none",
    color: "white",
  };

  const smallLinkStyles = {
    fontSize: 40,
    fontWeight: 600,
    textDecoration: "none",
    color: "white",
  };

  return home ? (
    <div className="p-5">
      <Row>
        <Col>
          <Link style={linkStyles} to="/tech">
            <div className="link">tech +</div>
          </Link>
        </Col>
      </Row>

      <Row>
        <Col>
          <Link style={linkStyles} to="/music">
            <div className="link">music +</div>
          </Link>
        </Col>
      </Row>

      <Row>
        <Col>
          <Link style={linkStyles} to="/art">
            <div className="link">3d +</div>
          </Link>
        </Col>
      </Row>

      <Row>
        <Col>
          <Link style={linkStyles} to="/about">
            <div className="link">info +</div>
          </Link>
        </Col>
      </Row>
    </div>
  ) : (
    <div className="p-2">
      <Row>
        <Col>
          <Link style={smallLinkStyles} to="/tech">
            <div className="link">tech</div>
          </Link>
        </Col>

        <Col>
          <Link style={smallLinkStyles} to="/music">
            <div className="link">music</div>
          </Link>
        </Col>

        <Col>
          <Link style={smallLinkStyles} to="/art">
            <div className="link">3d</div>
          </Link>
        </Col>

        <Col>
          <Link style={smallLinkStyles} to="/about">
            <div className="link">info</div>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Nav;
