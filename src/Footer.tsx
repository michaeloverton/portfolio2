import { Row, Col } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <div style={{ fontSize: 20 }} className="mt-1 pb-4">
      <Row>
        <Col>
          <span style={{ background: "red" }}>
            {/* email: m.overtonbrown at gmail.com */}
            EMAIL: M.OVERTONBROWN@GMAIL.COM
          </span>
        </Col>
      </Row>
      <Row>
        <Col>
          <span style={{ background: "red" }}>
            © MICHAEL OVERTON BROWN {new Date().getFullYear()}
          </span>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
