import { Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useIsMobile } from "./MobileProvider";
import { MouseHighlight } from "./TextLayout";
import { Link } from "./Layout";

const Header: React.FC = () => {
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
      <Row></Row>

      <Row className="mt-2">
        <Col
          style={{
            fontSize: scalingFontSize(1020, 85),
            textAlign: "left",
          }}
        >
          <span style={{ textDecoration: "line-through", color: "red" }}>
            <span style={{ color: "white" }}>MICHAEL OVERTON BROWN</span>
          </span>
        </Col>
      </Row>

      <Row style={{ fontSize: 35 }} className={!isMobile() ? "mb-3" : "mb-2"}>
        <Col>
          <span>
            <Link url="/">
              <span
                className={isMobile() ? "" : "px-1"}
                style={location.pathname === "/" ? { color: "black" } : {}}
              >
                WORK
              </span>
            </Link>
            <span className="px-1" />
            <Link url="/music">
              <span
                className={isMobile() ? "" : "px-1"}
                style={location.pathname === "/music" ? { color: "black" } : {}}
              >
                MUSIC
              </span>
            </Link>
            <span className="px-1" />
            <Link url="/3d">
              <span
                className={isMobile() ? "" : "px-1"}
                style={location.pathname === "/3d" ? { color: "black" } : {}}
              >
                3D
              </span>
            </Link>
            <span className="px-1" />
            <Link url="/about">
              <span
                className={isMobile() ? "" : "px-1"}
                style={location.pathname === "/about" ? { color: "black" } : {}}
              >
                ABOUT
              </span>
            </Link>
            <span className="px-1" />
            {!isMobile() ? (
              <span style={{ fontSize: 35, background: "red" }}>
                /////////////////////
              </span>
            ) : null}
          </span>
        </Col>
      </Row>

      <Row
        className={!isMobile() ? "mb-4" : "mb-2"}
        style={{ borderTop: `4px solid` }}
      ></Row>
    </div>
  );
};

export default Header;
