import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { ImageRow, GameBlock, Link, Highlight } from "./Layout";
import React from "react";
import { useIsMobile } from "./MobileProvider";
import "./home.css";

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

const Home2: React.FC = () => {
  const { isMobile } = useIsMobile();

  // Scroll to top of page on component load.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <GameBlock
        name="INFINITE SILENCE"
        description={
          <>
            Infinite Silence is an interactive EP and experiment in{" "}
            <Highlight>non-linear, player-driven music</Highlight> consisting of
            three interconnected spaces stacked vertically, with each space
            representing a track of the EP.
          </>
        }
        roles="Art, Design, Music, Code"
        link="https://phasein.itch.io/infinite-silence"
      >
        <ImageRow images={[is2, is11]} />

        <ImageRow images={[is6, isTitle]} />

        <Row>
          <Col style={{ margin: 0, padding: 0 }}>
            <iframe
              width="100%"
              height={isMobile() ? 250 : 500}
              src="https://www.youtube.com/embed/1f68IGGgu38"
              title="Infinite Silence Gameplay"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Col>
        </Row>
      </GameBlock>

      <GameBlock
        name="LIGHT MOVES"
        description={
          <>
            Light Moves is a virtual reality art experience created in
            collaboration with visual artist{" "}
            <Link url="http://www.nataljakent.com/" external>
              Natalja Kent
            </Link>{" "}
            for the Meta Quest 2. It was showing at{" "}
            <Link url="https://www.forelandcatskill.com/" external>
              Foreland Art Campus
            </Link>{" "}
            in July 2022.
          </>
        }
        roles="Design, Code"
      >
        <Row>
          <Col style={{ margin: 0, padding: 0 }}>
            <iframe
              width="100%"
              height={isMobile() ? 250 : 500}
              src="https://www.youtube.com/embed/Xa6xdAm_3NE"
              title="Light Moves"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Col>
        </Row>
      </GameBlock>

      <GameBlock
        name="PHREAKER"
        description={
          <>
            Phreaker is a{" "}
            <Highlight>virtual reality cyberpunk grappling hook game</Highlight>{" "}
            targeting the Meta Quest 2. It is currently available as a PCVR
            demo.
          </>
        }
        roles="Art, Design, Code"
        link="https://phasein.itch.io/phreaker"
      >
        <ImageRow images={[ph2, ph8]} />

        <ImageRow images={[ph3, ph5]} />

        <ImageRow images={[ph7, phTitle]} />

        <Row>
          <Col style={{ margin: 0, padding: 0 }}>
            <iframe
              width="100%"
              height={isMobile() ? 300 : 500}
              src="https://www.youtube.com/embed/cQt9zGCgR20"
              title="Phreaker Trailer"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Col>
        </Row>
      </GameBlock>

      <GameBlock
        name="CLOCK OUT"
        description={
          <>
            Clock Out is an{" "}
            <Highlight>
              impossible, infinite office space that the player cannot escape.
              Capitalism is a Möbius strip
            </Highlight>
            : the goal is unattainable and progress is an illusion. It is a PC
            experience and is available as a demo.
          </>
        }
        roles="Art, Design, Code"
        link="https://phasein.itch.io/clock-out"
      >
        <ImageRow images={[oh1, oh7]} />

        <Row>
          <Col style={{ margin: 0, padding: 0 }}>
            <iframe
              width="100%`"
              height={isMobile() ? 300 : 500}
              src="https://www.youtube.com/embed/8f6KJlP-cYo"
              title="Clock Out Gameplay"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Col>
        </Row>
      </GameBlock>

      {/* DUMMY ROW TO PREVENT BOTTOM WHITESPACE */}
      <Row></Row>
    </div>
  );
};

export default Home2;
