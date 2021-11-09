import { Row, Col } from "react-bootstrap";
import is2 from "./assets/images/games/infinite-silence/is2.png";
import is11 from "./assets/images/games/infinite-silence/is11.png";
import is6 from "./assets/images/games/infinite-silence/is6.png";
import isTitle from "./assets/images/games/infinite-silence/big-title.png";
import ph3 from "./assets/images/games/phreaker/ph3.png";
import ph6 from "./assets/images/games/phreaker/ph6.png";
import ph7 from "./assets/images/games/phreaker/ph7.png";
import phTitle from "./assets/images/games/phreaker/phTitle.png";
import {
  ExternalLink,
  SectionHeader,
  SectionContainer,
  IntroText,
  GameImage,
  SectionInfo,
} from "./TextLayout";

const Games: React.FC = () => {
  const borderWidth = "3px";

  return (
    <div>
      <IntroText>
        Games adapt and grow with new technology, making them uniquely suited to
        be the medium of the future.
      </IntroText>

      <SectionContainer borderWidth={borderWidth} top right>
        <Row>
          <Col>
            <SectionHeader borderWidth={borderWidth}>
              infinite silence
            </SectionHeader>
          </Col>
        </Row>

        <SectionInfo>
          Infinite Silence is an experimental piece of non-linear, interactive
          music. There are three interconnected spaces, each representing a
          piece of music, and player traversal causes musical changes. This is
          an experiment in player-driven music.
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
        <Row className="px-2 pb-2">
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

        <Row className="mb-4">
          <Col>
            <SectionHeader borderWidth={borderWidth} />
          </Col>
        </Row>

        <GameImage src={isTitle} />

        <GameImage src={is2} />

        <GameImage src={is11} />

        <GameImage src={is6} />

        {/* SPACER */}
        <div className="spacer"></div>
      </SectionContainer>

      <SectionContainer borderWidth={borderWidth} top left bottom>
        <Row>
          <Col>
            <SectionHeader borderWidth={borderWidth}>phreaker</SectionHeader>
          </Col>
        </Row>

        <SectionInfo>
          Phreaker is a virtual reality grappling hook game set in a large-scale
          cyberpunk space. More levels are in development, along with gigantic
          enemies, alternate traversal methods, and a "combat" system. The goal
          is to ultimately target the Oculus Quest 2, along with all other wired
          VR platforms.
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
        <Row className="px-2 pb-2">
          <Col lg={6}>
            <ExternalLink url="https://phasein.itch.io/phreaker">
              download
            </ExternalLink>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <SectionHeader borderWidth={borderWidth} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/E6oWN7xVrCM"
              title="YouTube video player"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Col>
        </Row>

        <GameImage src={phTitle} />

        <GameImage src={ph3} />

        <GameImage src={ph6} />

        <GameImage src={ph7} />

        {/* SPACER */}
        <div className="spacer"></div>
      </SectionContainer>

      <SectionContainer borderWidth={borderWidth} right bottom>
        <Row>
          <Col>
            <SectionHeader borderWidth={borderWidth}>clock out</SectionHeader>
          </Col>
        </Row>

        <SectionInfo>
          Clock Out is an office that the player cannot escape. As the player
          traverses rooms of the office, more rooms are randomly generated ahead
          of and behind the player, trapping them. The game is a
          proof-of-concept for a flexible, reusable random generation/connection
          algorithm.
        </SectionInfo>

        {/* External links */}
        <Row className="px-2 pb-2">
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

        <Row className="mb-4">
          <Col>
            <SectionHeader borderWidth={borderWidth} />
          </Col>
        </Row>

        <GameImage src={phTitle} />

        {/* SPACER */}
        <div className="spacer"></div>
      </SectionContainer>
    </div>
  );
};

export default Games;
