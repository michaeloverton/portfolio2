import { Row, Col } from "react-bootstrap";
import organicLoop from "./assets/art/loop-centerlight.mp4";
import closeOrb from "./assets/art/boxbox-close.mp4";
import farOrb from "./assets/art/boxbox-far.mp4";
import pulseCubes from "./assets/art/cubic-3.mp4";
import triFlow from "./assets/art/triangleundulate.mp4";
import cubeCruise from "./assets/art/cubecruise-mp4.mp4";
import { Video } from "./TextLayout";

const Art: React.FC = () => {
  const borderWidth = "3px";

  return (
    <div className="pt-3 text-center">
      {/* <Row>
        <Col>
          <div style={textStyles}>I should put some text here</div>
        </Col>
      </Row> */}

      <Row
        style={{
          borderTop: `${borderWidth} solid`,
          borderRight: `${borderWidth} solid`,
          borderBottom: `${borderWidth} solid`,
        }}
      >
        <Col>
          <Video src={organicLoop} />
        </Col>
      </Row>

      <Row
        style={{
          borderLeft: `${borderWidth} solid`,
          borderBottom: `${borderWidth} solid`,
        }}
      >
        <Col>
          <Video src={pulseCubes} />
        </Col>
      </Row>

      <Row
        style={{
          borderRight: `${borderWidth} solid`,
          borderBottom: `${borderWidth} solid`,
        }}
      >
        <Col>
          <Video src={farOrb} />
        </Col>
      </Row>

      <Row
        style={{
          borderLeft: `${borderWidth} solid`,
          borderBottom: `${borderWidth} solid`,
        }}
      >
        <Col>
          <Video src={closeOrb} />
        </Col>
      </Row>

      <Row
        style={{
          borderRight: `${borderWidth} solid`,
          borderBottom: `${borderWidth} solid`,
        }}
      >
        <Col>
          <Video src={triFlow} />
        </Col>
      </Row>

      <Row
        style={{
          borderLeft: `${borderWidth} solid`,
          borderBottom: `${borderWidth} solid`,
        }}
      >
        <Col>
          <Video src={cubeCruise} />
        </Col>
      </Row>
    </div>
  );
};

export default Art;
