import { Row, Col } from "react-bootstrap";

const Footer: React.FC = () => {
  const footerStyles = {
    fontSize: 15,
    color: "#deffdb",
  };

  return (
    <div style={footerStyles} className="mt-3 pb-3">
      <Row>
        <Col>email: m.overtonbrown at gmail.com</Col>
      </Row>
      <Row>
        <Col>© michael brown {new Date().getFullYear()}</Col>
      </Row>
    </div>
  );
};

export default Footer;
