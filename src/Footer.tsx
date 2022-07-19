import { Row, Col } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <div className="mt-1 pb-3">
      <Row>
        <Col>
          <span style={{ background: "red" }}>
            email: m.overtonbrown at gmail.com
          </span>
        </Col>
      </Row>
      <Row>
        <Col>
          <span style={{ background: "red" }}>
            © michael brown {new Date().getFullYear()}
          </span>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
