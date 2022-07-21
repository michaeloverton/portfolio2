import { Row, Col } from "react-bootstrap";
import { useIsMobile } from "./MobileProvider";

const Footer: React.FC = () => {
  const { isMobile } = useIsMobile();

  return (
    <div
      style={{ fontSize: 20 }}
      className={`${isMobile() ? "mt-4" : "mt-1"} pb-4`}
    >
      <Row>
        <Col>
          <span style={{ background: "red" }}>
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
