import { Row, Col, Image } from "react-bootstrap";
import eva from "./assets/images/about/eva1.png";
import evaSmall from "./assets/images/about/eva1-small.png";
import profile from "./assets/images/about/profilepic.jpeg";
import cv from "./assets/resume-2021.pdf";
import {
  ExternalLink,
  SubSectionHeader,
  SectionContainer,
  SectionInfo,
} from "./TextLayout";
import { textStyles } from "./Globals";
import "./Info.css";
import { useIsMobile } from "./MobileProvider";

const Info: React.FC = () => {
  const borderWidth = "3px";
  const { width } = useIsMobile();

  return (
    <div className="mt-4 pt-3">
      <SectionContainer borderWidth={borderWidth} top left bottom>
        <Row>
          <Col>
            <div className="py-3 text-center">
              <Image src={width() < 900 ? evaSmall : eva} width="100%" />
            </div>
          </Col>
        </Row>

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

        <SectionInfo>
          I'm a technologist with a broad set of skills including programming,
          music, and 3D modeling. If a technology can be used to create, I want
          to create with it. I want to collaborate with fellow experimenters to
          challenge existing technologies and combine disparate forms of media
          in new ways.
        </SectionInfo>

        <Row className="mb-3">
          <Col lg={5}>
            <Image className="profile-pic" src={profile} width="100%" />
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
    </div>
  );
};

export default Info;
