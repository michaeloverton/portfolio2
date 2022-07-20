import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { ImageRow, Video, Loading, ImageLink } from "./Layout";
import React from "react";
import { useIsMobile } from "./MobileProvider";

// Images
import organicLoop from "./assets/art/videos/loop-centerlight.mp4";
import pulseCubes from "./assets/art/videos/cubic-3.mp4";
import triFlow from "./assets/art/videos/triangleundulate.mp4";
import sphereCutOne from "./assets/art/videos/cyberRelic1.mp4";
import cageFly from "./assets/art/videos/cage-fly.mp4";
import sphereCutTwo from "./assets/art/videos/cyberRelic2.mp4";
import sphereCutRender1 from "./assets/art/images/cyberRelic1-1.jpg";
import sphereCutRender22 from "./assets/art/images/cyberRelic2-2.png";
import orb1 from "./assets/art/images/orb1.jpg";
import orb2 from "./assets/art/images/orb2.png";
import organic3 from "./assets/art/images/organic3.jpg";
import cage from "./assets/art/images/cage.png";
import waves1 from "./assets/art/images/waves1.png";
import waves2 from "./assets/art/images/waves2.png";
import waves3 from "./assets/art/images/waves3.png";

// Thumbnails
import sphereCutRender1Thumb from "./assets/thumbnails/art/cyberRelic1-1.jpg";
import sphereCutRender22Thumb from "./assets/thumbnails/art/cyberRelic2-2.png";
import orb1Thumb from "./assets/thumbnails/art/orb1.jpg";
import orb2Thumb from "./assets/thumbnails/art/orb2.png";
import organic3Thumb from "./assets/thumbnails/art/organic3.jpg";
import cageThumb from "./assets/thumbnails/art/cage.png";
import waves1Thumb from "./assets/thumbnails/art/waves1.png";
import waves2Thumb from "./assets/thumbnails/art/waves2.png";
import waves3Thumb from "./assets/thumbnails/art/waves3.png";

const Art: React.FC = () => {
  const { isMobile } = useIsMobile();
  const [loadedCount, setLoaded] = useState<number>(0);
  const ITEMS_TO_LOAD = 6;

  // Scroll to top of page on component load.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {loadedCount < ITEMS_TO_LOAD ? <Loading /> : null}

      <div className={loadedCount < ITEMS_TO_LOAD ? "d-none" : ""}>
        <Row className={isMobile() ? "mt-3" : ""}>
          <Col md={6} style={{ margin: 0, padding: 0 }}>
            <video
              controls
              loop
              width={"100%"}
              onLoadedData={() => setLoaded(loadedCount + 1)}
            >
              <source src={`${cageFly}#t=3.8`} type="video/mp4" />
            </video>
          </Col>
          <Col md={6} style={{ margin: 0, padding: 0 }}>
            <ImageLink thumb={cageThumb} imgSrc={cage} width="100%" />
          </Col>
        </Row>

        <ImageRow
          images={[waves1, waves2, waves3]}
          thumbs={[waves1Thumb, waves2Thumb, waves3Thumb]}
        />

        <Row>
          <Col md={6} style={{ margin: 0, padding: 0 }}>
            <video
              controls
              loop
              width={"100%"}
              onLoadedData={() => setLoaded(loadedCount + 1)}
            >
              <source src={`${sphereCutOne}#t=0.001`} type="video/mp4" />
            </video>
          </Col>
          <Col md={6} style={{ margin: 0, padding: 0 }}>
            <ImageLink
              thumb={sphereCutRender1Thumb}
              imgSrc={sphereCutRender1}
            />
          </Col>
        </Row>

        <Video
          src={organicLoop}
          startTime="4.7"
          onLoadedFunc={() => setLoaded(loadedCount + 1)}
        />

        <ImageRow images={[organic3]} thumbs={[organic3Thumb]} />

        <Row>
          <Col md={6} style={{ margin: 0, padding: 0 }}>
            <ImageLink
              thumb={sphereCutRender22Thumb}
              imgSrc={sphereCutRender22}
            />
          </Col>
          <Col md={6} style={{ margin: 0, padding: 0 }}>
            <video
              controls
              loop
              width={"100%"}
              onLoadedData={() => setLoaded(loadedCount + 1)}
            >
              <source src={`${sphereCutTwo}#t=0.001`} type="video/mp4" />
            </video>
          </Col>
        </Row>

        <ImageRow images={[orb2, orb1]} thumbs={[orb2Thumb, orb1Thumb]} />

        <Video
          src={pulseCubes}
          onLoadedFunc={() => setLoaded(loadedCount + 1)}
        />

        <Video src={triFlow} onLoadedFunc={() => setLoaded(loadedCount + 1)} />

        <Row
          className={!isMobile() ? "mt-3 mb-4" : "mt-4 mb-2"}
          style={{ borderTop: `4px solid` }}
        ></Row>

        {/* DUMMY ROW TO PREVENT BOTTOM WHITESPACE */}
        <Row></Row>
      </div>
    </div>
  );
};

export default Art;
