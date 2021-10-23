import { Row, Col } from "react-bootstrap";

const Tech: React.FC = () => {
  const sectionHeaderStyles = {
    fontSize: 65,
    fontWeight: 600,
    transform: "scale(1, .5)",
  };

  const textStyles = {
    fontSize: 50,
    fontWeight: 700,
    transform: "scale(1,.5)",
  };

  return (
    <div className="pt-3">
      <Row>
        <Col>
          <div style={textStyles}>I should put some text here</div>
        </Col>
      </Row>

      <div className="border-top border-bottom border-end border-5 px-2">
        <Row>
          <Col lg={7}>
            <div
              className="border-bottom border-end border-5"
              style={sectionHeaderStyles}
            >
              infinite silence
            </div>
          </Col>
        </Row>

        <Row>
          <Col>description</Col>
        </Row>
      </div>

      <div className=" border-bottom border-start border-5 px-2">
        <Row>
          <Col lg={7}>
            <div
              className="border-bottom border-end border-5"
              style={sectionHeaderStyles}
            >
              grapple
            </div>
          </Col>
        </Row>

        <Row>
          <Col>description</Col>
        </Row>
      </div>

      <div className="border-bottom border-end border-5 px-2">
        <Row>
          <Col lg={7}>
            <div
              className="border-bottom border-end border-5"
              style={sectionHeaderStyles}
            >
              clock out
            </div>
          </Col>
        </Row>

        <Row>
          <Col>description</Col>
        </Row>
      </div>
    </div>
  );
};

export default Tech;
