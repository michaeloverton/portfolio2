import { useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";
import React from "react";
import { useIsMobile } from "./MobileProvider";
import profile from "./assets/about/profile-cropped2.jpeg";
import { BioText, Highlight, Link } from "./Layout";
import resume from "./assets/about/resume-2022.pdf";
import "./about.css";

const About: React.FC = () => {
  const { isMobile } = useIsMobile();

  // Scroll to top of page on component load.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Row>
        <Col>
          <div className="text-center banner profile-pic">
            <Image src={profile} height={isMobile() ? "250px" : "350px"} />
          </div>
        </Col>
      </Row>

      {!isMobile() ? (
        <Row className="text-left px-5 mt-3 mb-4" style={{ fontSize: 30 }}>
          <Col>
            <Link url={resume} external>
              RESUME
            </Link>

            <span className="px-1" />

            <Link url="https://github.com/michaeloverton" external>
              GITHUB
            </Link>

            <span className="px-1" />

            <Link url="https://www.instagram.com/michaelovertonbrown" external>
              INSTAGRAM
            </Link>

            <span className="px-1" />

            <Link url="https://phasein.itch.io" external>
              ITCH.IO
            </Link>

            <span className="px-1" />

            <Link url="mailto:m.overtonbrown@gmail.com" external>
              EMAIL
            </Link>
          </Col>
        </Row>
      ) : (
        <div style={{ fontSize: 25 }}>
          <Row className="text-left mt-3 mb-2">
            <Col>
              <Link url={resume} external>
                RESUME
              </Link>

              <span className="px-1" />

              <Link url="https://github.com/michaeloverton" external>
                GITHUB
              </Link>

              <span className="px-1" />

              <Link
                url="https://www.instagram.com/michaelovertonbrown"
                external
              >
                INSTAGRAM
              </Link>
            </Col>
          </Row>

          <Row className="text-left mt-1 mb-3">
            <Col>
              <Link url="https://phasein.itch.io" external>
                ITCH.IO
              </Link>

              <span className="px-1" />

              <Link url="mailto:m.overtonbrown@gmail.com" external>
                EMAIL
              </Link>
            </Col>
          </Row>
        </div>
      )}

      <BioText>
        One definition of “game” is “any activity undertaken or regarded as a
        contest involving rivalry, strategy, or struggle”. Most other
        definitions are similar, giving the impression that a game is a
        competition. I believe that many people understand “video games”
        according to this definition: winners and losers, victory and failure.
        However,{" "}
        <Highlight>
          to understand modern video games in this way, and even to call them
          all “games”, is to tragically diminish the potential of an entire
          artistic medium.
        </Highlight>
      </BioText>

      <BioText>
        In a world increasingly dominated by complex and insidious technological
        systems, games, as interactive systems themselves, are uniquely suited
        to the examination of these technological systems. Unlike Instagram,
        Facebook, Youtube, or any other major technology platform, which
        obfuscate the mechanics of their systems and algorithms, a game can
        highlight the mechanics of its own systems and require a player to
        interact with them directly. In my own work,{" "}
        <Highlight>
          I want to use the language and interactivity of games to interrogate
          the technological systems that ensnare us and explore the attendant
          emotions as we navigate, participate, and even collude with those
          systems.
        </Highlight>
      </BioText>

      <BioText>
        As our society continues to digitize, I believe that games will become
        an ever more relevant medium for this kind of inquiry, and I want to
        create{" "}
        <Highlight>
          more inclusive, expressive, and experimental independent games and
          experiences
        </Highlight>
        , while also putting game engines to use in a broader set of contexts,
        helping others realize their own digital spaces and experiences.
      </BioText>

      <BioText>
        Ultimately, <Highlight>collaboration is my primary objective</Highlight>
        . I want to create games or experiences with fellow artists, educators,
        technologists and experimenters: the more diverse the field of
        collaborators, the better.
      </BioText>

      <Row
        className={!isMobile() ? "mt-5 mb-4" : "mt-5 mb-2"}
        style={{ borderTop: `4px solid` }}
      ></Row>

      {/* DUMMY ROW TO PREVENT BOTTOM WHITESPACE */}
      <Row></Row>
    </div>
  );
};

export default About;
