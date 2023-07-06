import { Row, Col } from "react-bootstrap";
import { useIsMobile } from "./MobileProvider";

const Footer: React.FC = () => {
  const { isMobile } = useIsMobile();

  return (
    <div
      style={{ fontSize: 20 }}
      className={`${isMobile() ? "mt-4" : "mt-1"} pb-4`}
    >
      <Row className="mt-2 mb-4" style={{ borderTop: `1px solid black` }}></Row>

      <Row
        className="header-stretch mt-3"
        style={{
          color: "black",
          textAlign: "left",
          fontFamily: "Arial",
          fontSize: 14,
        }}
      >
        <div style={{ paddingRight: 5, textTransform: "uppercase" }}>
          EMAIL: M.OVERTONBROWN@GMAIL.COM
        </div>
      </Row>

      <Row
        className="header-stretch mt-2"
        style={{
          color: "black",
          textAlign: "left",
          fontFamily: "Arial",
          fontSize: 14,
        }}
      >
        <div
          style={{
            paddingRight: 5,
            textTransform: "uppercase",
          }}
        >
          © MICHAEL OVERTON BROWN {new Date().getFullYear()}
        </div>
      </Row>
    </div>
  );
};

export default Footer;
