import { useEffect, useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
// Game assets
import is2 from "./assets/games/infinite-silence/is2.png";
import is11 from "./assets/games/infinite-silence/is11.png";
import is6 from "./assets/games/infinite-silence/is6.png";
import isTitle from "./assets/games/infinite-silence/big-title.png";
import ph2 from "./assets/games/phreaker/phreaker2.png";
import ph3 from "./assets/games/phreaker/phreaker3.png";
import ph7 from "./assets/games/phreaker/ph7.png";
import ph8 from "./assets/games/phreaker/phreaker8.png";
import ph5 from "./assets/games/phreaker/phreaker5.png";
import phTitle from "./assets/games/phreaker/phTitle.png";
import oh1 from "./assets/games/clock-out/oh1.png";
import oh7 from "./assets/games/clock-out/oh7.png";
import oh8 from "./assets/games/clock-out/oh8.png";
import oh6 from "./assets/games/clock-out/oh6.png";

// 3D assets
import proc1 from "./assets/art/images/procedure1.png";
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
import cageFly from "./assets/art/videos/cage-fly.mp4";
import cage from "./assets/art/images/cage.png";
import waves1 from "./assets/art/images/waves1.png";
import waves2 from "./assets/art/images/waves2.png";
import waves3 from "./assets/art/images/waves3.png";

// Misc
import { VideoNoSpace, SimpleLinkImage, CharacterRepeater } from "./TextLayout";
import {
  ExternalLink,
  SectionHeader,
  SectionContainer,
  Spacer,
  GameImage,
  SectionInfo,
  Emphasis,
} from "./TextLayout";

import { ImageRow, GameBlock, Video } from "./Layout";

import HyphenField from "./HyphenField";
import BlinkingCursor from "./BlinkingCursor";
import React from "react";
import { useIsMobile } from "./MobileProvider";
import "./home.css";

const Art: React.FC = () => {
  const { isMobile } = useIsMobile();

  // Scroll to top of page on component load.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* <Video src={cageFly} /> */}

      <Row>
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
        <Col style={{ margin: 0, padding: 0 }}>
          <video controls loop width={"100%"}>
            <source src={`${sphereCutOne}#t=0.001`} type="video/mp4" />
          </video>
        </Col>
        <Col style={{ margin: 0, padding: 0 }}>
          <Image src={sphereCutRender1} width="100%" />
        </Col>
      </Row>

      <Video src={organicLoop} startTime="4.7" />

      <ImageRow images={[organic3]} />

      <Row>
        <Col style={{ margin: 0, padding: 0 }}>
          <Image src={sphereCutRender22} width="100%" />
        </Col>
        <Col style={{ margin: 0, padding: 0 }}>
          <video controls loop width={"100%"}>
            <source src={`${sphereCutTwo}#t=0.001`} type="video/mp4" />
          </video>
        </Col>
      </Row>

      <ImageRow images={[orb2, orb1]} />

      <Video src={pulseCubes} />

      <Video src={triFlow} />

      <Row
        className={!isMobile() ? "mt-3 mb-4" : "mt-2 mb-2"}
        style={{ borderTop: `4px solid` }}
      ></Row>

      {/* DUMMY ROW TO PREVENT BOTTOM WHITESPACE */}
      <Row></Row>
    </div>
  );
};

export default Art;
