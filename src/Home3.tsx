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
import HyphenField from "./HyphenField";
import BlinkingCursor from "./BlinkingCursor";
import React from "react";
import { useIsMobile } from "./MobileProvider";
import "./home.css";

const Home2: React.FC = () => {
  const { isMobile } = useIsMobile();
  const [displayPhreakerInfo, setDisplayPhreakerInfo] =
    useState<boolean>(false);

  // Scroll to top of page on component load.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Dummy row to prevent whitespace from being at top */}
      <Row></Row>

      <Row className="mt-3 mb-4">
        <Col>
          <span
            style={{
              fontSize: 50,
              textAlign: "left",
            }}
          >
            MICHAEL OVERTON BROWN
          </span>
          <span className="header-cursor"></span>
        </Col>
        {/* <Col style={{ fontSize: 30, textAlign: "right" }}>
          PROJECTS MUSIC 3D ABOUT
        </Col> */}
      </Row>
      <Row>
        <Col style={{ fontSize: 30, textAlign: "right" }}>
          PROJECTS MUSIC 3D ABOUT
        </Col>
      </Row>

      <Row className="mb-5">
        <Col style={{ fontSize: 40 }}>
          {/* <CharacterRepeater char="/" maxChars={2} /> PROJECTS */}
          PROJECTS
        </Col>
      </Row>

      {/* INFINITE SILENCE */}
      <div className="mb-4">
        <Row>
          <Col lg={1} className="text-right">
            <div className="rotate-title">INFINITE SILENCE</div>
          </Col>
          <Col style={{ margin: "0 0 0 30px", padding: 0 }}>
            {/* <Row style={{ fontSize: 60 }}>INFINITE SILENCE</Row> */}
            <Row style={{ fontSize: 17 }} className="mb-3">
              <Col>
                Infinite Silence is an{" "}
                <Emphasis>
                  experiment in non-linear, player-driven music.
                </Emphasis>
                The “game” consists of three interconnected spaces stacked
                vertically, with each space representing a piece of music. The
                player’s interaction with foreboding structures causes musical
                changes, allowing the player to determine the structure and, to
                some extent, the content of the music. The musical systems in
                the game are designed to pique the player’s curiosity, but that
                curiosity ultimately leads to their demise. As the player
                descends,{" "}
                <Emphasis>
                  an implied narrative forms around judgement and surveillance
                  by unknowable forces, mirroring our own experiences of
                  judgement and surveillance on social media platforms by
                  algorithms and anonymous people.
                </Emphasis>{" "}
                The game is an expression of my preoccupation with the
                increasingly unknowable forces dominating our modern
                technological world.
              </Col>
              <Col lg={4}>
                <Row className="mb-3">Roles: Art, Music, Code, Design</Row>
                <Row>ITCH.IO</Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Image src={is2} width="100%" />
              </Col>
            </Row>

            {/* <Row style={{ fontSize: 25 }}>ITCH.IO</Row> */}
          </Col>
          {/* <Col>
            <Row>
              <Image src={is2} width="100%" />
            </Row>
          </Col> */}
        </Row>

        <Row>
          <Col style={{ margin: 0, padding: 0 }}>
            <Image src={is11} width="100%" />
          </Col>
          <Col style={{ margin: 0, padding: 0 }}>
            <Image src={is6} width="100%" />
          </Col>
        </Row>

        <Row>
          <Col style={{ margin: 0, padding: 0 }}>
            <Image src={isTitle} width="100%" />
          </Col>
          <Col style={{ margin: 0, padding: 0 }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/1f68IGGgu38"
              title="Infinite Silence Gameplay"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Col>
        </Row>
      </div>

      <Row style={{ fontSize: 20 }} className="mb-5">
        <Col>
          .................................
          <BlinkingCursor />
        </Col>
      </Row>

      {/* PHREAKER */}
      <div className="mb-4">
        <Row>
          <Col lg={1} className="text-right">
            <div className="rotate-title">PHREAKER</div>
          </Col>
          <Col lg={2} className="mx-3">
            <Row style={{ fontSize: 17 }} className="mb-2">
              Infinite Silence is an experiment in non-linear, player-driven
              music. The “game” consists of three interconnected spaces stacked
              vertically, with each space representing a piece of music. The
              player’s
            </Row>
            <Row style={{ fontSize: 25 }}>ITCH.IO</Row>
          </Col>
          <Col>
            <Row>
              <Image src={ph2} width="100%" />
            </Row>
          </Col>
        </Row>

        <Row>
          <Col style={{ margin: 0, padding: 0 }}>
            <Image src={ph3} width="100%" />
          </Col>
          <Col style={{ margin: 0, padding: 0 }}>
            <Image src={ph8} width="100%" />
          </Col>
        </Row>

        <Row>
          <Col style={{ margin: 0, padding: 0 }}>
            <Image src={ph7} width="100%" />
          </Col>
          <Col style={{ margin: 0, padding: 0 }}>
            <Image src={phTitle} width="100%" />
          </Col>
        </Row>

        <Row>
          <Col style={{ margin: 0, padding: 0 }}>
            <Image src={ph5} width="100%" />
          </Col>
          <Col style={{ margin: 0, padding: 0 }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/cQt9zGCgR20"
              title="Phreaker Trailer"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Col>
        </Row>
      </div>

      <Row style={{ fontSize: 20 }} className="mb-5">
        <Col>
          .................................
          <BlinkingCursor />
        </Col>
      </Row>

      {/* CLOCK OUT */}
      <div className="mb-4">
        <Row>
          <Col lg={1} className="text-right">
            <div className="rotate-title">CLOCK OUT</div>
          </Col>
          <Col lg={2} className="mx-3">
            <Row style={{ fontSize: 17 }} className="mb-2">
              Infinite Silence is an experiment in non-linear, player-driven
              music. The “game” consists of three interconnected spaces stacked
              vertically, with each space representing a piece of music. The
              player’s
            </Row>
            <Row style={{ fontSize: 25 }}>ITCH.IO</Row>
          </Col>
          <Col>
            <Row>
              <Image src={oh1} width="100%" />
            </Row>
          </Col>
        </Row>

        <Row>
          <Col style={{ margin: 0, padding: 0 }}>
            <Image src={oh7} width="100%" />
          </Col>
          <Col style={{ margin: 0, padding: 0 }}>
            <Image src={oh8} width="100%" />
          </Col>
        </Row>

        <Row>
          <Col style={{ margin: 0, padding: 0 }}>
            <Image src={oh6} width="100%" />
          </Col>
          <Col style={{ margin: 0, padding: 0 }}>
            <iframe
              height="100%`"
              width="100%"
              src="https://www.youtube.com/embed/8f6KJlP-cYo"
              title="Clock Out Gameplay"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Col>
        </Row>
      </div>

      <Row style={{ fontSize: 20 }} className="mb-5">
        <Col>
          .................................
          <BlinkingCursor />
        </Col>
      </Row>

      {/* CLOCK OUT */}
      <div className="mb-4">
        <Row>
          <Col lg={1} className="text-right">
            <div className="rotate-title">MISC</div>
          </Col>
          <Col lg={2} className="mx-3">
            <Row style={{ fontSize: 17 }} className="mb-2">
              Infinite Silence is an experiment in non-linear, player-driven
              music. The “game” consists of three interconnected spaces stacked
              vertically, with each space representing a piece of music. The
              player’s
            </Row>
            <Row style={{ fontSize: 25 }}>ITCH.IO</Row>
          </Col>
          <Col>
            <Row>
              <Image src={proc1} width="100%" />
            </Row>
          </Col>
        </Row>

        <Row>
          <Col style={{ margin: 0, padding: 0 }}>
            <Image src={sphereCutRender1} width="100%" />
          </Col>
          <Col style={{ margin: 0, padding: 0 }}>
            <Image src={sphereCutRender2} width="100%" />
          </Col>
        </Row>

        <Row>
          <Col style={{ margin: 0, padding: 0 }}>
            <Image src={sphereCutRender11} width="100%" />
          </Col>
          <Col style={{ margin: 0, padding: 0 }}>
            <Image src={sphereCutRender22} width="100%" />
          </Col>
          <Col style={{ margin: 0, padding: 0 }}>
            <VideoNoSpace src={sphereCutTwo} />
          </Col>
        </Row>

        <Row>
          <Col lg={8} style={{ margin: 0, padding: 0 }}>
            <Image src={organic3} width="100%" />
          </Col>
          <Col style={{ margin: 0, padding: 0 }}>
            <Image src={organic1} width="100%" />
          </Col>
        </Row>
      </div>

      <Row style={{ fontSize: 20 }} className="mb-5">
        <Col>
          .................................
          <BlinkingCursor />
        </Col>
      </Row>

      {/* DUMMY ROW TO PREVENT BOTTOM WHITESPACE */}
      <Row></Row>
    </div>
  );
};

export default Home2;
