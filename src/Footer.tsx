import { Row, Col } from "react-bootstrap";

const Footer: React.FC = () => {
  const footerStyles = {
    fontWeight: 700,
    fontSize: 15,
    transform: "scale(1, .7)",
  };
  return (
    <div style={footerStyles} className="mt-3 pb-3">
      <Row>
        <Col>email: m.overtonbrown at gmail.com</Col>
      </Row>
      <Row>
        <Col>© michael brown 2021</Col>
      </Row>
    </div>
  );
};

export default Footer;
