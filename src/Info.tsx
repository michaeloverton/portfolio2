import { Row, Col, Image } from "react-bootstrap";
import eva1 from "./assets/images/about/eva1.png";
import profile from "./assets/images/about/profilepic.jpeg";
import cv from "./assets/resume-2021.pdf";
import { ExternalLink, SubSectionHeader, SectionContainer } from "./TextLayout";
import { textStyles } from "./Globals";
import "./Info.css";

const Info: React.FC = () => {
  const borderWidth = "3px";

  return (
    <div className="mt-4 pt-3">
      <SectionContainer borderWidth={borderWidth} top left bottom>
        <Row>
          <Col>
            <div className="py-3 text-center">
              <Image src={eva1} width="100%" />
            </div>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col lg={5}>
            <Image className="profile-pic" src={profile} width="100%" />
          </Col>

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
            <Row>
              <Col>
                <div style={textStyles}>I'm a technologist.</div>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* SPACER */}
        <div className="spacer"></div>
      </SectionContainer>

      <SectionContainer borderWidth={borderWidth} right bottom>
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

        {/* SPACER */}
        <div className="spacer"></div>
      </SectionContainer>

      {/* <SectionContainer borderWidth={borderWidth} left bottom>
        <Row>
          <Col lg={6}>
            <SubSectionHeader borderWidth={borderWidth}>
              the ocean
            </SubSectionHeader>
          </Col>
        </Row>

        <Row>
          <Col>
            <div style={textStyles}>
              I can't reasonably make a website and not include my fascination
              with surfing and diving. The ocean is an endless source of
              inspiration for me.
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <iframe
              width="90%"
              height={isMobile() ? "200px" : "500px"}
              src="https://www.youtube.com/embed/DJcHI-Ec5Ko"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
        </Row>

        <div className="spacer"></div>
      </SectionContainer> */}
    </div>
  );
};

export default Info;
