import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
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
import React from "react";
import { useIsMobile } from "./MobileProvider";

const Games: React.FC = () => {
  const { isMobile } = useIsMobile();

  // Scroll to top of page on component load.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* <IntroText>
        Games adapt and grow with new technology, making them uniquely suited to
        be the medium of the future.
      </IntroText> */}

      <SectionContainer top right>
        <SectionHeader>phreaker</SectionHeader>

        <SectionInfo>
          Phreaker is a{" "}
          <Emphasis>virtual reality cyberpunk grappling hook game</Emphasis> in
          early development. Both of the player’s hands are equipped with
          grappling hooks, and the player can connect to any surface in order to
          traverse large environments. “Large” is not an exaggeration: the
          environments can be upwards of ten kilometers tall and wide. This size
          is not a problem, as the{" "}
          <Emphasis>
            grappling hooks allow the player to travel extremely quickly, at
            times more than 900 meters per second,
          </Emphasis>{" "}
          depending on the skill of the player. There are currently two levels
          and a tutorial. The current levels are prototypes, experiments to
          understand architecture and aesthetics that are fun to traverse.
        </SectionInfo>

        <Row className="px-2 mb-4">
          <Col>
            <iframe
              title="Phreaker on itch.io"
              src="https://itch.io/embed/1266372?bg_color=0f1117&amp;fg_color=15ff00&amp;link_color=ffe800&amp;border_color=15ff00"
              width="100%"
              height="167"
            >
              <a href="https://phasein.itch.io/phreaker">Phreaker by phasein</a>
            </iframe>
          </Col>
        </Row>

        {/* External links */}
        <Row className="px-2 pb-4">
          <Col lg={6}>
            <ExternalLink url="https://phasein.itch.io/phreaker">
              download
            </ExternalLink>
          </Col>
        </Row>

        <SectionHeader rowClass="mb-4" />

        <Row className="mb-3">
          <Col>
            <iframe
              width="100%"
              height={isMobile() ? "250" : "450"}
              src="https://www.youtube.com/embed/cQt9zGCgR20"
              title="Phreaker Trailer"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <iframe
              width="100%"
              height={isMobile() ? "250" : "450"}
              src="https://www.youtube.com/embed/zc0xHHwv_q0"
              title="Phreaker Extended Gameplay"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Col>
        </Row>

        <GameImage src={phTitle} />

        <GameImage src={ph2} />

        <GameImage src={ph3} />

        <GameImage src={ph7} />

        <GameImage src={phreaker7} />

        <GameImage src={ph8} />

        <GameImage src={ph5} />

        <Spacer />
      </SectionContainer>

      <SectionContainer top left bottom>
        <SectionHeader>infinite silence</SectionHeader>

        <SectionInfo>
          Infinite Silence is an{" "}
          <Emphasis>experiment in non-linear, player-driven music.</Emphasis>
          The “game” consists of three interconnected spaces stacked vertically,
          with each space representing a piece of music. The player’s
          interaction with foreboding structures causes musical changes,
          allowing the player to determine the structure and, to some extent,
          the content of the music. The musical systems in the game are designed
          to pique the player’s curiosity, but that curiosity ultimately leads
          to their demise. As the player descends,{" "}
          <Emphasis>
            an implied narrative forms around judgement and surveillance by
            unknowable forces, mirroring our own experiences of judgement and
            surveillance on social media platforms by algorithms and anonymous
            people.
          </Emphasis>{" "}
          The game is an expression of my preoccupation with the increasingly
          unknowable forces dominating our modern technological world.
        </SectionInfo>

        <Row className="px-2 mb-4">
          <Col>
            <iframe
              title="Infinite Silence on itch.io"
              src="https://itch.io/embed/1266223?bg_color=0f1117&amp;fg_color=15ff00&amp;link_color=fff00c&amp;border_color=15ff00"
              width="100%"
              height="167"
            >
              <a href="https://phasein.itch.io/infinite-silence">
                Infinite Silence by phasein
              </a>
            </iframe>
          </Col>
        </Row>

        {/* External links */}
        <Row className="px-2 pb-4">
          <Col lg={6}>
            <ExternalLink url="https://phasein.itch.io/infinite-silence">
              download
            </ExternalLink>
          </Col>

          <Col lg={6}>
            <ExternalLink url="https://github.com/michaeloverton/rave-cathedral">
              github
            </ExternalLink>
          </Col>
        </Row>

        <SectionHeader rowClass="mb-4" />

        <GameImage src={isTitle} />

        <GameImage src={is2} />

        <GameImage src={is11} />

        <GameImage src={is6} />

        <Row>
          <Col>
            <iframe
              width="100%"
              height={isMobile() ? "250" : "450"}
              src="https://www.youtube.com/embed/1f68IGGgu38"
              title="Infinite Silence Gameplay"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Col>
        </Row>

        <Spacer />
      </SectionContainer>

      <SectionContainer right bottom>
        <SectionHeader>clock out</SectionHeader>

        <SectionInfo>
          Clock Out is an{" "}
          <Emphasis>
            impossible, infinite office space that the player cannot escape.
          </Emphasis>{" "}
          As the player traverses the office, more rooms randomly generate ahead
          of and behind the player, trapping them. The only way to escape is to
          remove yourself from the system by not playing the game. In Clock Out,{" "}
          <Emphasis>
            capitalism is a Möbius strip: the goal is unattainable and progress
            is an illusion.
          </Emphasis>{" "}
          The “game” is a proof-of-concept for a sort of procedural generation
          algorithm.
        </SectionInfo>

        <Row className="px-2 mb-4">
          <Col>
            <iframe
              title="Clock Out on itch.io"
              src="https://itch.io/embed/1273339?bg_color=0f1117&amp;fg_color=15ff00&amp;link_color=fff21b"
              width="100%"
              height="167"
            >
              <a href="https://phasein.itch.io/clock-out">
                Clock Out by phasein
              </a>
            </iframe>
          </Col>
        </Row>

        {/* External links */}
        <Row className="px-2 pb-4">
          <Col lg={6}>
            <ExternalLink url="https://phasein.itch.io/clock-out">
              download
            </ExternalLink>
          </Col>

          <Col lg={6}>
            <ExternalLink url="https://github.com/michaeloverton/office-hell-2">
              github
            </ExternalLink>
          </Col>
        </Row>

        <SectionHeader rowClass="mb-4" />

        <GameImage src={ohTitle} />

        <GameImage src={oh8} />

        <GameImage src={oh1} />

        <GameImage src={oh7} />

        <Row>
          <Col>
            <iframe
              width="100%"
              height={isMobile() ? "250" : "450"}
              src="https://www.youtube.com/embed/8f6KJlP-cYo"
              title="Clock Out Gameplay"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Col>
        </Row>

        <Spacer />
      </SectionContainer>
    </div>
  );
};

export default Games;
