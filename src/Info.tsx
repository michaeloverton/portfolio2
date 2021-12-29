import { useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";
import profile from "./assets/images/about/profile-cropped2.jpeg";
import cv from "./assets/resume-dec-2021.pdf";
import {
  ExternalLink,
  SectionContainer,
  Spacer,
  Emphasis,
  MouseHighlight,
} from "./TextLayout";
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
            <div className="py-3 text-center banner profile-pic">
              <Image src={profile} height={isMobile() ? "250px" : "350px"} />
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
              according to this definition: winners and losers, victory and
              failure. However,{" "}
              <Emphasis>
                to understand modern video games in this way, and even to call
                them all “games”, is to tragically diminish the potential of an
                entire artistic medium.
              </Emphasis>
            </div>

            <div className="my-3" style={textStyles}>
              In a world increasingly dominated by complex and insidious
              technological systems, games, as interactive systems themselves,
              are uniquely suited to the examination of these technological
              systems. Unlike Instagram, Facebook, Youtube, or any other major
              technology platform, which obfuscate the mechanics of their
              systems and algorithms, a game can highlight the mechanics of its
              own systems and require a player to interact with them directly.
              In my own work,{" "}
              <Emphasis>
                I want to use the language and interactivity of games to
                interrogate the technological systems that ensnare us and
                explore the attendant emotions as we navigate, participate, and
                even collude with those systems.
              </Emphasis>{" "}
            </div>

            <div className="my-3" style={textStyles}>
              As our society continues to digitize, I believe that games will
              become an ever more relevant medium for this kind of inquiry, and
              I want to create{" "}
              <Emphasis>
                more inclusive, expressive, and experimental independent games
                and experiences,
              </Emphasis>{" "}
              while also putting game engines to use in a broader set of
              contexts, helping others realize their own digital spaces and
              experiences.
            </div>

            <div className="my-3" style={textStyles}>
              Ultimately,{" "}
              <Emphasis>collaboration is my primary objective.</Emphasis> I want
              to create games or experiences with fellow artists, educators,
              technologists and experimenters: the more diverse the field of
              collaborators, the better.
            </div>

            <Row
              className="my-3"
              style={{ fontSize: 40, fontWeight: 800, color: "#deffdb" }}
            >
              <Col>
                <MouseHighlight>-</MouseHighlight>
                <MouseHighlight>Michael</MouseHighlight>
              </Col>
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
