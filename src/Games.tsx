import { Row, Col } from "react-bootstrap";
import {
  ExternalLink,
  SubSectionHeader,
  SectionHeader,
  SectionContainer,
  IntroText,
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
              infinite silence 2
            </SectionHeader>
          </Col>
        </Row>

        {/* <Row>
          <Col className="px-5">
            <div style={textStyles}>
              Infinite Silence 2 is a three level interactive music piece. Each
              level in the large interconnected space represents a piece of
              music, with player traversal triggering changes in the music.
            </div>
          </Col>
        </Row> */}

        <Row>
          <Col lg={3}>
            <div style={textStyles}>
              Infinite Silence 2 is a three level interactive music piece. Each
              level in the large interconnected space represents a piece of
              music, with player traversal triggering changes in the music.
            </div>
          </Col>

          <Col>
            {/* External links */}
            <Row className="px-3 pb-2">
              <Col lg={4}>
                <ExternalLink url="https://www.facebook.com/ChildhoodIndustries/">
                  itch.io
                </ExternalLink>
              </Col>

              <Col lg={4}>
                <ExternalLink url="https://www.facebook.com/ChildhoodIndustries/">
                  github
                </ExternalLink>
              </Col>

              <Col lg={4}>
                <ExternalLink url="https://www.facebook.com/ChildhoodIndustries/">
                  download
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

            <Row>
              <Col>movies?</Col>
            </Row>

            {/* Releases */}
            <Row>
              <Col>
                <SubSectionHeader borderWidth={borderWidth}>
                  images
                </SubSectionHeader>
              </Col>
            </Row>

            <Row>
              <Col>pics?</Col>
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

        {/* <Row>
          <Col className="px-5">
            <div style={textStyles}>
              Phreaker is a virtual reality grappling hook mini-game set in a
              large-scale cyberpunk pseudo-city. The focus of the project is the
              development of the grappling hook movement system and level design
              experimentation, while also developing associated sub-systems:
              enemy weakpoints, health, etc.
            </div>
          </Col>
        </Row> */}

        <Row>
          <Col lg={3}>
            <div style={textStyles}>
              Phreaker is a virtual reality grappling hook mini-game set in a
              large-scale cyberpunk pseudo-city. The focus of the project is the
              development of the grappling hook movement system and level design
              experimentation, while also developing associated sub-systems:
              enemy weakpoints, health, etc.
            </div>
          </Col>

          <Col>
            {/* External links */}
            <Row className="px-3 pb-2">
              <Col lg={4}>
                <ExternalLink url="https://www.facebook.com/ChildhoodIndustries/">
                  itch.io
                </ExternalLink>
              </Col>

              <Col lg={4}>
                <ExternalLink url="https://www.facebook.com/ChildhoodIndustries/">
                  github
                </ExternalLink>
              </Col>

              <Col lg={4}>
                <ExternalLink url="https://www.facebook.com/ChildhoodIndustries/">
                  download
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
              <Col lg={4}>
                <ExternalLink url="http://chimes-club.s3-website-us-west-1.amazonaws.com/">
                  view
                </ExternalLink>
              </Col>

              <Col lg={4}>
                <ExternalLink url="https://www.facebook.com/ChildhoodIndustries/">
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
              <Col lg={4}>
                <ExternalLink url="http://chimes-club.s3-website-us-west-1.amazonaws.com/">
                  view
                </ExternalLink>
              </Col>

              <Col lg={4}>
                <ExternalLink url="https://www.facebook.com/ChildhoodIndustries/">
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
