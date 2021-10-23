import { Row, Col } from "react-bootstrap";
import { ExternalLink, SubSectionHeader, SectionHeader } from "./TextLayout";
import { textStyles } from "./Globals";

const Tech: React.FC = () => {
  const borderWidth = "3px";

  return (
    <div className="pt-3">
      <div
        style={{
          borderTop: `${borderWidth} solid`,
          borderRight: `${borderWidth} solid`,
        }}
        className="px-3 pb-5"
      >
        <Row>
          <Col>
            <SectionHeader borderWidth={borderWidth}>
              infinite silence 2
            </SectionHeader>
          </Col>
        </Row>

        <Row>
          <Col lg={3}>
            <div style={textStyles}>
              Infinite Silence 2 is a 3 track interactive EP. All art, design,
              and programming was done by Michael.
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
      </div>

      <div
        style={{
          borderTop: `${borderWidth} solid`,
          borderLeft: `${borderWidth} solid`,
          borderBottom: `${borderWidth} solid`,
        }}
        className="px-3 pb-4 pt-3"
      >
        <Row>
          <Col>
            <SectionHeader borderWidth={borderWidth}>grapple</SectionHeader>
          </Col>
        </Row>

        <Row>
          <Col lg={3}>
            <div style={textStyles}>GRAPPLE TEMP NAME is a demo.</div>
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
      </div>
    </div>
  );
};

export default Tech;
