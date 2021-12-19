import { useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";
import eva from "./assets/images/about/eva1.png";
import cv from "./assets/resume-dec-2021.pdf";
import { ExternalLink, SectionContainer, Spacer, Emphasis } from "./TextLayout";
import { textStyles } from "./Globals";
import "./Info.css";
import { useIsMobile } from "./MobileProvider";

const Info: React.FC = () => {
  const { isMobile } = useIsMobile();

  // Scroll to top of page on component load.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <SectionContainer top left bottom>
        <Row>
          <Col>
            <div className="py-3 text-center banner">
              <Image src={eva} height={isMobile() ? "250px" : "350px"} />
            </div>
          </Col>
        </Row>

        <Row className="mb-3">
          {/* {width() < largeBreakPoint ? null : (
            <Col md={12} lg={5} className="my-auto">
              <Image className="profile-pic" src={profile} width="100%" />
            </Col>
          )} */}
          <Col className="mx-3">
            <Row>
              <Col>
                <Row className="px-3 pb-2">
                  <Col>
                    <ExternalLink url={cv}>cv</ExternalLink>
                  </Col>

                  <Col>
                    <ExternalLink url="https://github.com/michaeloverton">
                      github
                    </ExternalLink>
                  </Col>
                </Row>
              </Col>
            </Row>

            <div className="my-3" style={textStyles}>
              One definition of “game” is “any activity undertaken or regarded
              as a contest involving rivalry, strategy, or struggle”. Most other
              definitions are similar, giving the impression that a game is a
              competition. I believe that many people understand “video games”
              according to this definition. There are winners and losers,
              victory and failure. You can “win”. However,{" "}
              <Emphasis>
                to understand modern video games in this way, and to call them
                all “games”, is to tragically diminish the potential of an
                entire medium.
              </Emphasis>{" "}
              In Animal Crossing: New Horizons, you express yourself by
              cultivating an island. In Fortnite, you can watch a fully digital
              concert. In VRChat, you simply socialize with others in a digital
              space. These are not “games” in the traditional sense. They are
              closer to “digital experiences”, and they’re incredibly exciting
              to me because they are beginning to show the potential of the
              medium. And we’ve only scratched the surface.
            </div>

            <div className="my-3" style={textStyles}>
              In a world so increasingly technological and digitized, I believe
              that{" "}
              <Emphasis>
                the need and appetite for digital spaces and experiences will
                only grow and that the gap between “mainstream culture” and
                “gaming culture” will diminish.
              </Emphasis>{" "}
              I’m interested in creating more inclusive and experimental
              independent games and experiences, without hardcore gameplay loops
              or stress. I’m especially interested in the intersection of games
              and music: I want to create spaces for the expression of
              creativity in a middle ground between human and computer. I want
              players to ask,{" "}
              <Emphasis>“Did I create this or did the computer?”</Emphasis>{" "}
              Beyond independent game development, I also want to put game
              engines to use in a broader set of contexts, helping others
              realize their digital spaces.
            </div>

            <div className="my-3" style={textStyles}>
              Ultimately,{" "}
              <Emphasis>collaboration is my primary objective.</Emphasis> I want
              to create games or experiences with fellow artists, educators,
              technologists and experimenters: the more diverse the field of
              collaborators, the better. I believe that my broad skill set will
              allow me to be an effective teammate at any point in the creative
              pipeline.
            </div>

            <Row
              className="my-3"
              style={{ fontSize: 40, fontWeight: 800, color: "#deffdb" }}
            >
              <Col>-Michael</Col>
            </Row>
          </Col>
        </Row>

        <Spacer />
      </SectionContainer>

      {/* <SectionContainer borderWidth={borderWidth} right bottom>
        <Row>
          <Col lg={6}>
            <SubSectionHeader borderWidth={borderWidth}>
              this site
            </SubSectionHeader>
          </Col>
        </Row>

        <Row className="px-3 pb-2">
          <Col lg={3}>
            <ExternalLink url="https://github.com/michaeloverton/portfolio2">
              github
            </ExternalLink>
          </Col>
        </Row>

        <Row>
          <Col>
            <div style={textStyles}>
              I wrote and designed this site using React with modified Bootstrap
              styling.
            </div>
          </Col>
        </Row>

        <Spacer />
      </SectionContainer> */}
    </div>
  );
};

export default Info;
