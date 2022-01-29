import { useEffect } from "react";
import organicLoop from "./assets/art/videos/loop-centerlight.mp4";
import closeOrb from "./assets/art/videos/boxbox-close.mp4";
import farOrb from "./assets/art/videos/boxbox-far.mp4";
import pulseCubes from "./assets/art/videos/cubic-3.mp4";
import triFlow from "./assets/art/videos/triangleundulate.mp4";
import cubeCruise from "./assets/art/videos/cubecruise-mp4.mp4";
import sphereCutOne from "./assets/art/videos/cyberRelic1.mp4";
import sphereCutRender1 from "./assets/art/images/cyberRelic1-1.jpg";
import sphereCutRender2 from "./assets/art/images/cyberRelic1-2.jpg";
import sphereCutTwo from "./assets/art/videos/cyberRelic2.mp4";
import sphereCutRender11 from "./assets/art/images/cyberRelic2-1.png";
import sphereCutRender22 from "./assets/art/images/cyberRelic2-2.png";
import orb1 from "./assets/art/images/orb1.jpg";
import orb2 from "./assets/art/images/orb2.png";
import organic1 from "./assets/art/images/organic1.jpg";
import organic2 from "./assets/art/images/organic2.jpg";
import organic3 from "./assets/art/images/organic3.jpg";
import { Row, Col } from "react-bootstrap";
import { Video, SectionContainer, SimpleLinkImage } from "./TextLayout";
import { useIsMobile } from "./MobileProvider";

const Art: React.FC = () => {
  const { isMobile } = useIsMobile();

  // Scroll to top of page on component load.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* <IntroText>
        Creating surreal 3D worlds, unrestrained by reality, is extremely
        liberating.
      </IntroText> */}

      <div className="text-center">
        <SectionContainer top right bottom>
          <Row>
            <Col>
              <Video src={organicLoop} />
            </Col>
          </Row>

          {isMobile() ? (
            <Row className="mb-4">
              <Col>
                <SimpleLinkImage src={organic1} />
              </Col>
            </Row>
          ) : null}

          <Row className="mb-4">
            {!isMobile() ? (
              <Col>
                <SimpleLinkImage src={organic1} />
              </Col>
            ) : null}

            <Col>
              <SimpleLinkImage src={organic2} />
            </Col>
          </Row>

          <Row className={`${isMobile() ? "mb-4" : null}`}>
            <Col>
              <SimpleLinkImage src={organic3} />
            </Col>
          </Row>
        </SectionContainer>

        <SectionContainer left bottom>
          <Row>
            <Col>
              <Video src={sphereCutOne} />
            </Col>
          </Row>

          {isMobile() ? (
            <Row className="mb-4">
              <Col>
                <SimpleLinkImage src={sphereCutRender1} />
              </Col>
            </Row>
          ) : null}

          <Row className={`${isMobile() ? "mb-4" : null}`}>
            {!isMobile() ? (
              <Col>
                <SimpleLinkImage src={sphereCutRender1} />
              </Col>
            ) : null}

            <Col>
              <SimpleLinkImage src={sphereCutRender2} />
            </Col>
          </Row>
        </SectionContainer>

        <SectionContainer right bottom>
          <Row>
            <Col>
              <Video src={sphereCutTwo} />
            </Col>
          </Row>

          {isMobile() ? (
            <Row className="mb-4">
              <Col>
                <SimpleLinkImage src={sphereCutRender22} />
              </Col>
            </Row>
          ) : null}

          <Row className={`${isMobile() ? "mb-4" : null}`}>
            {!isMobile() ? (
              <Col>
                <SimpleLinkImage src={sphereCutRender22} />
              </Col>
            ) : null}

            <Col>
              <SimpleLinkImage src={sphereCutRender11} />
            </Col>
          </Row>
        </SectionContainer>

        <SectionContainer left bottom>
          <Row>
            <Col>
              <Video src={closeOrb} />
            </Col>
          </Row>

          {isMobile() ? (
            <Row className="mb-4">
              <Col>
                <SimpleLinkImage src={orb2} />
              </Col>
            </Row>
          ) : null}

          <Row className="mb-4">
            <Col>
              <SimpleLinkImage src={orb1} />
            </Col>

            {!isMobile() ? (
              <Col>
                <SimpleLinkImage src={orb2} />
              </Col>
            ) : null}
          </Row>

          <Row className="mb-4">
            <Col>
              <video controls loop width={"100%"}>
                <source src={`${farOrb}#t=0.001`} type="video/mp4" />
              </video>
            </Col>
          </Row>
        </SectionContainer>

        <SectionContainer right bottom>
          <Video src={pulseCubes} />
        </SectionContainer>

        <SectionContainer left bottom>
          <Video src={triFlow} />
        </SectionContainer>

        <SectionContainer right bottom>
          <Video src={cubeCruise} />
        </SectionContainer>
      </div>
    </div>
  );
};

export default Art;
