import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  textStyles,
  linkStyles,
  sectionHeaderStyles,
  subSectionHeaderStyles,
} from "./Globals";

// const Tech: React.FC = () => {
//   const sectionHeaderStyles = {
//     fontSize: 65,
//     fontWeight: 600,
//     transform: "scale(1, .5)",
//   };

//   const textStyles = {
//     fontSize: 50,
//     fontWeight: 700,
//     transform: "scale(1,.5)",
//   };

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
            <div
              style={{
                ...{
                  borderBottom: `${borderWidth} solid`,
                },
                ...sectionHeaderStyles,
              }}
            >
              infinite silence 2
            </div>
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
                <Link
                  style={linkStyles}
                  to={{
                    pathname: "https://www.facebook.com/ChildhoodIndustries/",
                  }}
                  target="_blank"
                >
                  <div className="music-link">itch.io</div>
                </Link>
              </Col>

              <Col lg={4}>
                <Link
                  style={linkStyles}
                  to={{
                    pathname:
                      "https://childhoodindustries.bandcamp.com/album/051515-3",
                  }}
                  target="_blank"
                >
                  <div className="music-link">github</div>
                </Link>
              </Col>

              <Col lg={4}>
                <Link
                  style={linkStyles}
                  to={{
                    pathname: "https://ra.co/dj/witness",
                  }}
                  target="_blank"
                >
                  <div className="music-link">download</div>
                </Link>
              </Col>
            </Row>

            {/* Mixes */}
            <Row>
              <Col>
                <div
                  style={{
                    ...{
                      borderBottom: `${borderWidth} solid`,
                    },
                    ...subSectionHeaderStyles,
                  }}
                >
                  mixes
                </div>
              </Col>
            </Row>

            <Row>
              <Col>movies?</Col>
            </Row>

            {/* Releases */}
            <Row>
              <Col>
                <div
                  style={{
                    ...{
                      borderBottom: `${borderWidth} solid`,
                    },
                    ...subSectionHeaderStyles,
                  }}
                >
                  releases
                </div>
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
            <div
              style={{
                ...{
                  borderBottom: `${borderWidth} solid`,
                },
                ...sectionHeaderStyles,
              }}
            >
              grapple
            </div>
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
                <Link
                  style={linkStyles}
                  to={{
                    pathname: "https://www.itch.io",
                  }}
                  target="_blank"
                >
                  <div className="music-link">itch.io</div>
                </Link>
              </Col>

              <Col lg={4}>
                <Link
                  style={linkStyles}
                  to={{
                    pathname: "https://www.itch.io",
                  }}
                  target="_blank"
                >
                  <div className="music-link">github</div>
                </Link>
              </Col>

              <Col lg={4}>
                <Link
                  style={linkStyles}
                  to={{
                    pathname:
                      "https://childhoodindustries.bandcamp.com/album/051515-3",
                  }}
                  target="_blank"
                >
                  <div className="music-link">download</div>
                </Link>
              </Col>
            </Row>

            {/* Mixes */}
            <Row>
              <Col>
                <div
                  style={{
                    ...{
                      borderBottom: `${borderWidth} solid`,
                    },
                    ...subSectionHeaderStyles,
                  }}
                >
                  radio
                </div>
              </Col>
            </Row>

            <Row className="pb-2">
              <Col>movies?</Col>
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
