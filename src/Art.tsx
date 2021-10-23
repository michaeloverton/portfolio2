import { Row, Col } from "react-bootstrap";
import organicLoop from "./assets/art/loop-centerlight.mp4";
import closeOrb from "./assets/art/boxbox-close.mp4";
import farOrb from "./assets/art/boxbox-far.mp4";
import pulseCubes from "./assets/art/cubic-3.mp4";
import triFlow from "./assets/art/triangleundulate.mp4";
import cubeCruise from "./assets/art/cubecruise-mp4.mp4";

const Art: React.FC = () => {
  const textStyles = {
    fontSize: 50,
    fontWeight: 700,
    transform: "scale(1,.5)",
    textAlign: "left",
  };

  return (
    <div className="pt-3 text-center">
      {/* <Row>
        <Col>
          <div style={textStyles}>I should put some text here</div>
        </Col>
      </Row> */}

      <Row className="border-top border-bottom border-end border-5">
        <Col>
          <video className="p-3" controls loop width={800}>
            <source src={organicLoop} type="video/mp4" />
          </video>
        </Col>
      </Row>

      <Row className="border-bottom border-start border-5">
        <Col>
          <video className="p-3" controls loop width={800}>
            <source src={pulseCubes} type="video/mp4" />
          </video>
        </Col>
      </Row>

      <Row className="border-bottom border-end border-5">
        <Col>
          <video className="p-3" controls loop width={800}>
            <source src={farOrb} type="video/mp4" />
          </video>
        </Col>
      </Row>

      <Row className="border-bottom border-start border-5">
        <Col>
          <video className="p-3" controls loop width={800}>
            <source src={closeOrb} type="video/mp4" />
          </video>
        </Col>
      </Row>

      <Row className="border-bottom border-end border-5">
        <Col>
          <video className="p-3" controls loop width={800}>
            <source src={triFlow} type="video/mp4" />
          </video>
        </Col>
      </Row>

      <Row className="border-bottom border-start border-5">
        <Col>
          <video className="p-3" controls loop width={800}>
            <source src={cubeCruise} type="video/mp4" />
          </video>
        </Col>
      </Row>
    </div>
  );
};

export default Art;
