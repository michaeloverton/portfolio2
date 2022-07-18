import { useEffect, useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import is2 from "./assets/games/infinite-silence/is2.png";
import is11 from "./assets/games/infinite-silence/is11.png";
import is6 from "./assets/games/infinite-silence/is6.png";
import isTitle from "./assets/games/infinite-silence/big-title.png";
import ph2 from "./assets/games/phreaker/phreaker2.png";
import ph3 from "./assets/games/phreaker/phreaker3.png";
import ph7 from "./assets/games/phreaker/ph7.png";
import ph8 from "./assets/games/phreaker/phreaker8.png";
import phreaker7 from "./assets/games/phreaker/phreaker7.png";
import ph5 from "./assets/games/phreaker/phreaker5.png";
import phTitle from "./assets/games/phreaker/phTitle.png";
import oh1 from "./assets/games/clock-out/oh1.png";
import oh7 from "./assets/games/clock-out/oh7.png";
import oh8 from "./assets/games/clock-out/oh8.png";
import ohTitle from "./assets/games/clock-out/ohTitle.png";
import {
  ExternalLink,
  SectionHeader,
  SectionContainer,
  Spacer,
  GameImage,
  SectionInfo,
  Emphasis,
} from "./TextLayout";
import HyphenField from "./HyphenField";
import React from "react";
import { useIsMobile } from "./MobileProvider";
import "./home.css";

const Home: React.FC = () => {
  const { isMobile } = useIsMobile();
  const [displayPhreakerInfo, setDisplayPhreakerInfo] =
    useState<boolean>(false);

  // Scroll to top of page on component load.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <header style={{ fontSize: 70, textAlign: "center" }}>
        MICHAEL OVERTON BROWN
      </header>

      <HyphenField />

      <nav className="mx-auto mb-4" style={{ fontSize: 30, width: "50%" }}>
        <Row>
          <Col className="text-center">GAMES</Col>
          <Col className="text-center">3D</Col>
          <Col className="text-center">MUSIC</Col>
          <Col className="text-center">ABOUT</Col>
        </Row>
        <Row>
          <Col className="text-center">-------------------------------</Col>
        </Row>
      </nav>

      {/* INFINITE SILENCE */}
      <Row className="mb-3">
        <Col lg={1} className="text-right rotate-title">
          INFINITE SILENCE
        </Col>
        <Col>
          <Row>
            <Image src={is2} width="100%" />
          </Row>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Row>
            <Image src={is11} width="100%" />
          </Row>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Row>
            <Image src={is6} width="100%" />
          </Row>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Row>
            <Image src={isTitle} width="100%" />
          </Row>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <iframe
            height="300"
            width="100%"
            // height={isMobile() ? "250" : "450"}
            src="https://www.youtube.com/embed/8f6KJlP-cYo"
            title="Clock Out Gameplay"
            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </Col>
      </Row>

      {/* PHREAKER */}

      <Row className="mb-4">
        <Col lg={1} className="text-right">
          <div className="rotate-title">PHREAKER</div>
          <div
            className="my-auto text-center mt-5"
            onClick={() => setDisplayPhreakerInfo(true)}
          >
            MORE INFO
          </div>
        </Col>
        <Col>
          <Row>
            <Image
              className={displayPhreakerInfo ? "image-blackened" : "visible"}
              src={ph2}
              width="100%"
            />
            <div
              style={{ position: "absolute", width: "50%", fontSize: 20 }}
              className={displayPhreakerInfo ? "visible" : "invisible d-none"}
            >
              Phreaker is a{" "}
              <Emphasis>virtual reality cyberpunk grappling hook game</Emphasis>{" "}
              in early development. Both of the player’s hands are equipped with
              grappling hooks, and the player can connect to any surface in
              order to traverse large environments. “Large” is not an
              exaggeration: the environments can be upwards of ten kilometers
              tall and wide. This size is not a problem, as the{" "}
              <Emphasis>
                grappling hooks allow the player to travel extremely quickly, at
                times more than 900 meters per second,
              </Emphasis>{" "}
              depending on the skill of the player. There are currently two
              levels and a tutorial. The current levels are prototypes,
              experiments to understand architecture and aesthetics that are fun
              to traverse.
            </div>
          </Row>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Row>
            <Image src={ph3} width="100%" />
          </Row>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Row>
            <Image src={ph8} width="100%" />
          </Row>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Row>
            <Image src={ph5} width="100%" />
          </Row>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <iframe
            width="100%"
            height="400px"
            src="https://www.youtube.com/embed/cQt9zGCgR20"
            title="Phreaker Trailer"
            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </Col>
      </Row>

      <HyphenField />

      {/* CLOCK OUT */}
      <Row className="mb-3">
        <Col lg={1} className="text-right rotate-title">
          CLOCK OUT
        </Col>
        <Col>
          <Row>
            <Image src={oh1} width="100%" />
          </Row>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Row>
            <Image src={oh7} width="100%" />
          </Row>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Row>
            <Image src={oh8} width="100%" />
          </Row>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <iframe
            height="300"
            width="100%"
            // height={isMobile() ? "250" : "450"}
            src="https://www.youtube.com/embed/8f6KJlP-cYo"
            title="Clock Out Gameplay"
            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
