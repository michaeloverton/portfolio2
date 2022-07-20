import { useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";

// 3D assets
import organicLoop from "./assets/art/videos/loop-centerlight.mp4";
import pulseCubes from "./assets/art/videos/cubic-3.mp4";
import triFlow from "./assets/art/videos/triangleundulate.mp4";
import sphereCutOne from "./assets/art/videos/cyberRelic1.mp4";
import sphereCutRender1 from "./assets/art/images/cyberRelic1-1.jpg";
import sphereCutTwo from "./assets/art/videos/cyberRelic2.mp4";
import sphereCutRender22 from "./assets/art/images/cyberRelic2-2.png";
import orb1 from "./assets/art/images/orb1.jpg";
import orb2 from "./assets/art/images/orb2.png";
import organic3 from "./assets/art/images/organic3.jpg";
import cageFly from "./assets/art/videos/cage-fly.mp4";
import cage from "./assets/art/images/cage.png";
import waves1 from "./assets/art/images/waves1.png";
import waves2 from "./assets/art/images/waves2.png";
import waves3 from "./assets/art/images/waves3.png";

import { ImageRow, Video } from "./Layout";
import React from "react";
import { useIsMobile } from "./MobileProvider";

const Art: React.FC = () => {
  const { isMobile } = useIsMobile();

  // Scroll to top of page on component load.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Row className={isMobile() ? "mt-3" : ""}>
        <Col md={6} style={{ margin: 0, padding: 0 }}>
          <video controls loop width={"100%"}>
            <source src={`${cageFly}#t=3.8`} type="video/mp4" />
          </video>
        </Col>
        <Col md={6} style={{ margin: 0, padding: 0 }}>
          <Image src={cage} width="100%" />
        </Col>
      </Row>

      <ImageRow images={[waves1, waves2, waves3]} />

      <Row>
        <Col md={6} style={{ margin: 0, padding: 0 }}>
          <video controls loop width={"100%"}>
            <source src={`${sphereCutOne}#t=0.001`} type="video/mp4" />
          </video>
        </Col>
        <Col md={6} style={{ margin: 0, padding: 0 }}>
          <Image src={sphereCutRender1} width="100%" />
        </Col>
      </Row>

      <Video src={organicLoop} startTime="4.7" />

      <ImageRow images={[organic3]} />

      <Row>
        <Col md={6} style={{ margin: 0, padding: 0 }}>
          <Image src={sphereCutRender22} width="100%" />
        </Col>
        <Col md={6} style={{ margin: 0, padding: 0 }}>
          <video controls loop width={"100%"}>
            <source src={`${sphereCutTwo}#t=0.001`} type="video/mp4" />
          </video>
        </Col>
      </Row>

      <ImageRow images={[orb2, orb1]} />

      <Video src={pulseCubes} />

      <Video src={triFlow} />

      <Row
        className={!isMobile() ? "mt-3 mb-4" : "mt-4 mb-2"}
        style={{ borderTop: `4px solid` }}
      ></Row>

      {/* DUMMY ROW TO PREVENT BOTTOM WHITESPACE */}
      <Row></Row>
    </div>
  );
};

export default Art;
