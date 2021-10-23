import { Row, Col, Image } from "react-bootstrap";
import eva1 from "./assets/images/about/eva1.png";
import profile from "./assets/images/about/profilepic.jpeg";
import cv from "./assets/cv.pdf";
import { ExternalLink, SubSectionHeader, SectionHeader } from "./TextLayout";
import { textStyles } from "./Globals";
import "./Info.css";

const Info: React.FC = () => {
  const borderWidth = "3px";

  return (
    <div className="pt-3">
      <div
        style={{
          borderTop: `${borderWidth} solid`,
          borderLeft: `${borderWidth} solid`,
          borderBottom: `${borderWidth} solid`,
        }}
        className="px-3 pb-5"
      >
        <Row>
          <Col>
            <div className="py-3 text-center">
              <Image src={eva1} width="100%" />
            </div>
          </Col>
        </Row>

        <Row>
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
              <div style={textStyles}>Michael is a technologist.</div>
            </Row>
          </Col>
        </Row>

        {/* SPACER */}
        <div className="spacer"></div>
      </div>
    </div>
  );
};

export default Info;
