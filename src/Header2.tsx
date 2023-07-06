import { Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useIsMobile } from "./MobileProvider";
import { Link } from "./Layout";
import "./header.css";

const Header2: React.FC = () => {
  const { isMobile, width } = useIsMobile();
  const location = useLocation();

  const scalingFontSize = (
    startWidth: number,
    baseSize: number,
    endWidth?: number,
    endSize?: number
  ): number => {
    if (width() > startWidth) {
      return baseSize;
    } else if (endWidth && endSize && width() < endWidth) {
      return endSize;
    }
    return baseSize * (width() / startWidth);
  };

  return (
    <div>
      {/* <Row className="mt-5">
        <Col
          style={{
            // fontSize: scalingFontSize(1020, 20),
            fontSize: 18,
            textAlign: "left",
          }}
        >
          <span
            className="header-stretch"
            style={{ color: "black", pointerEvents: "none" }}
          >
            MICHAEL OVERTON BROWN
          </span>
        </Col>
      </Row> */}

      <Row
        className="header-stretch mt-5"
        style={{
          color: "black",
          textAlign: "left",
          fontFamily: "Arial",
          fontSize: 18,
        }}
      >
        <div
          style={{
            textTransform: "uppercase",
          }}
        >
          MICHAEL OVERTON BROWN
        </div>
      </Row>

      <Row
        style={{
          fontFamily: "Arial",
          fontSize: 28,
          // fontWeight: "bold",
        }}
        className={!isMobile() ? "mb-3" : "mb-2"}
      >
        <Col>
          <span>
            <Link url="/">
              <span
                className={"header-link-stretch"}
                style={location.pathname === "/" ? { color: "black" } : {}}
              >
                WORK
              </span>
            </Link>

            <Link url="/music">
              <span
                className={"header-link-stretch"}
                style={location.pathname === "/music" ? { color: "black" } : {}}
              >
                MUSIC
              </span>
            </Link>

            <Link url="/about">
              <span
                className={"header-link-stretch"}
                style={location.pathname === "/about" ? { color: "black" } : {}}
              >
                ABOUT
              </span>
            </Link>
          </span>
        </Col>
      </Row>

      <Row
        className={!isMobile() ? "mb-4" : "mb-2"}
        style={{ borderTop: `1px solid black` }}
      ></Row>
    </div>
  );
};

export default Header2;
