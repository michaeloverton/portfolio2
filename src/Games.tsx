import { Row, Col } from "react-bootstrap";
import is2 from "./assets/images/games/infinite-silence/is2.png";
import is11 from "./assets/images/games/infinite-silence/is11.png";
import is6 from "./assets/images/games/infinite-silence/is6.png";
import isTitle from "./assets/images/games/infinite-silence/big-title.png";
import ph3 from "./assets/images/games/phreaker/ph3.png";
import ph6 from "./assets/images/games/phreaker/ph6.png";
import ph7 from "./assets/images/games/phreaker/ph7.png";
import {
  ExternalLink,
  SubSectionHeader,
  SectionHeader,
  SectionContainer,
  IntroText,
  GameImage,
} from "./TextLayout";
import { textStyles } from "./Globals";

const Games: React.FC = () => {
  const borderWidth = "3px";

  return (
    <div>
      <IntroText>
        To me, games are an unmatched art form, a form containing all others.
        The way they adapt and grow with new technology makes them uniquely
        suited to be the medium of the future.
      </IntroText>

      <SectionContainer borderWidth={borderWidth} top right>
        <Row>
          <Col>
            <SectionHeader borderWidth={borderWidth}>
              infinite silence
            </SectionHeader>
          </Col>
        </Row>

        <Row>
          <Col className="px-3">
            <div style={textStyles}>
              Infinite Silence 2 is a three level interactive music piece. Each
              level in the large interconnected space represents a piece of
              music, with player traversal triggering changes in the music.
            </div>
          </Col>
        </Row>

        <Row>
          {/* <Col lg={3}>
            <div style={textStyles}>
              Infinite Silence is a three level interactive music piece. Each
              level in the large interconnected space represents a piece of
              music, with player traversal triggering changes in the music.
            </div>
          </Col> */}

          <Col>
            <Row className="px-2 pb-2">
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

            {/* <Row className="px-2 pb-2">
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
            </Row> */}

            {/* Mixes */}
            {/* <Row>
              <Col>
                <SubSectionHeader borderWidth={borderWidth}>
                  videos
                </SubSectionHeader>
              </Col>
            </Row> */}

            {/* <Row>
              <Col>movies?</Col>
            </Row> */}

            {/* Releases */}
            {/* <Row>
              <Col>
                <SubSectionHeader borderWidth={borderWidth}>
                  images
                </SubSectionHeader>
              </Col>
            </Row> */}

            <Row>
              <Col>
                <GameImage src={isTitle} />

                <GameImage src={is2} />

                <GameImage src={is11} />

                <GameImage src={is6} />
              </Col>
            </Row>
          </Col>
        </Row>

        {/* SPACER */}
        <div className="spacer"></div>
      </SectionContainer>

      <SectionContainer borderWidth={borderWidth} top left bottom>
        <Row>
          <Col>
            <SectionHeader borderWidth={borderWidth}>phreaker</SectionHeader>
          </Col>
        </Row>

        <Row>
          <Col className="px-5">
            <div style={textStyles}>
              Phreaker is a virtual reality grappling hook mini-game set in a
              large-scale cyberpunk pseudo-city. The focus of the project is the
              development of the grappling hook movement system and level design
              experimentation, while also developing associated sub-systems:
              enemy weakpoints, health, etc.
            </div>
          </Col>
        </Row>

        <Row>
          {/* <Col lg={3}>
            <div style={textStyles}>
              Phreaker is a virtual reality grappling hook mini-game set in a
              large-scale cyberpunk pseudo-city. The focus of the project is the
              development of the grappling hook movement system and level design
              experimentation, while also developing associated sub-systems:
              enemy weakpoints, health, etc.
            </div>
          </Col> */}

          <Col>
            {/* External links */}
            <Row className="px-3 pb-2">
              <Col lg={6}>
                <ExternalLink url="https://phasein.itch.io/phreaker">
                  download
                </ExternalLink>
              </Col>

              <Col lg={6}>
                <ExternalLink url="https://github.com/michaeloverton/vr-towers">
                  github
                </ExternalLink>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col>
                <SectionHeader borderWidth={borderWidth} />
              </Col>
            </Row>

            {/* Mixes */}
            {/* <Row>
              <Col>
                <SubSectionHeader borderWidth={borderWidth}>
                  videos
                </SubSectionHeader>
              </Col>
            </Row>

            <Row className="pb-2">
              <Col>movies?</Col>
            </Row> */}

            {/* <Row>
              <Col>
                <SubSectionHeader borderWidth={borderWidth}>
                  images
                </SubSectionHeader>
              </Col>
            </Row>

            <Row className="pb-2">
              <Col>images?</Col>
            </Row> */}

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

            <Row>
              <Col>
                <GameImage src={ph3} />

                <GameImage src={ph6} />

                <GameImage src={ph7} />
              </Col>
            </Row>
          </Col>
        </Row>

        {/* SPACER */}
        <div className="spacer"></div>
      </SectionContainer>

      <SectionContainer borderWidth={borderWidth} right bottom>
        <Row>
          <Col>
            <SectionHeader borderWidth={borderWidth}>clock out</SectionHeader>
          </Col>
        </Row>

        <Row>
          <Col lg={3}>
            <div style={textStyles}>
              Clock Out is an office that the player cannot escape. As the
              player traverses rooms of the office, more rooms are randomly
              generated ahead of and behind the player, trapping them. The
              purpose of the game was the development of a flexible, reusable
              random generation room connection algorithm.
            </div>
          </Col>

          <Col>
            {/* External links */}
            <Row className="px-3 pb-2">
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

            {/* Mixes */}
            <Row>
              <Col>
                <SubSectionHeader borderWidth={borderWidth}>
                  videos
                </SubSectionHeader>
              </Col>
            </Row>

            <Row className="pb-2">
              <Col>movies?</Col>
            </Row>

            <Row>
              <Col>
                <SubSectionHeader borderWidth={borderWidth}>
                  images
                </SubSectionHeader>
              </Col>
            </Row>

            <Row className="pb-2">
              <Col>images?</Col>
            </Row>
          </Col>
        </Row>

        {/* SPACER */}
        <div className="spacer"></div>
      </SectionContainer>

      <SectionContainer borderWidth={borderWidth} left bottom>
        <Row>
          <Col>
            <SectionHeader borderWidth={borderWidth}>
              chimes dot club
            </SectionHeader>
          </Col>
        </Row>

        <Row>
          <Col lg={3}>
            <div style={textStyles}>
              chimes.club is a pure JavaScript music generator, with “chime”
              collisions randomly triggering simple chords, with satisfying
              results. The project’s goal was to test the possibilities of the
              cannon.js JavaScript physics engine.
            </div>
          </Col>

          <Col>
            {/* External links */}
            <Row className="px-3 pb-2">
              <Col lg={6}>
                <ExternalLink url="http://chimes-club.s3-website-us-west-1.amazonaws.com/">
                  view
                </ExternalLink>
              </Col>

              <Col lg={6}>
                <ExternalLink url="https://github.com/michaeloverton/chimes.club">
                  github
                </ExternalLink>
              </Col>
            </Row>

            {/* Mixes */}
            <Row>
              <Col>
                <SubSectionHeader borderWidth={borderWidth}>
                  videos
                </SubSectionHeader>
              </Col>
            </Row>

            <Row className="pb-2">
              <Col>movies?</Col>
            </Row>

            <Row>
              <Col>
                <SubSectionHeader borderWidth={borderWidth}>
                  images
                </SubSectionHeader>
              </Col>
            </Row>

            <Row className="pb-2">
              <Col>images?</Col>
            </Row>
          </Col>
        </Row>

        {/* SPACER */}
        <div className="spacer"></div>
      </SectionContainer>
    </div>
  );
};

export default Games;
