import { Row, Col, Image } from "react-bootstrap";
import { useIsMobile } from "./MobileProvider";
import "./layout.css";

type ImageRowProps = {
  images: string[];
};

export const ImageRow: React.FC<ImageRowProps> = ({ images }) => {
  const { isMobile } = useIsMobile();

  return (
    <Row>
      {images.map((src) =>
        !isMobile() ? (
          <Col style={{ margin: 0, padding: 0 }}>
            <Image src={src} width="100%" />
          </Col>
        ) : (
          <Row style={{ margin: 0, padding: 0 }}>
            <Image src={src} width="100%" />
          </Row>
        )
      )}
    </Row>
  );
};

type VideoProps = {
  src: string;
  startTime?: string;
};

export const Video: React.FC<VideoProps> = ({ src, startTime }) => {
  const { isMobile } = useIsMobile();

  return (
    <Row>
      <Col style={{ margin: 0, padding: 0 }}>
        <video controls loop width={"100%"}>
          <source
            src={`${src}#t=${startTime ? startTime : "0.001"}`}
            type="video/mp4"
          />
        </video>
      </Col>
    </Row>
  );
};

type GameBlockProps = {
  name: string;
  description: string;
  roles: string;
  link?: string;
};

export const GameBlock: React.FC<GameBlockProps> = ({
  children,
  name,
  description,
  roles,
  link,
}) => {
  const { isMobile } = useIsMobile();

  return (
    <div>
      {isMobile() ? (
        <Row>
          <Col className="mt-2" style={{ fontSize: 32 }}>
            {name}
          </Col>
        </Row>
      ) : null}

      <Row>
        {!isMobile() ? (
          <Col md={1} className="text-right">
            <div className="rotate-title">{name}</div>
          </Col>
        ) : null}

        <Col>
          {children}

          <Row className="mt-3 mb-2" style={{ fontSize: 20 }}>
            <Col md={8}>{description}</Col>
            <Col>
              <Link fontSize={30} url={link}>
                DOWNLOAD ON ITCH.IO
              </Link>
            </Col>
          </Row>

          <Row className="mt-2 mb-4" style={{ fontSize: 30 }}>
            <Col>Roles: {roles}</Col>
          </Row>
        </Col>
      </Row>

      <Row
        className={!isMobile() ? "mb-4" : "mb-2"}
        style={{ borderTop: `4px solid` }}
      ></Row>
    </div>
  );
};

type LinkProps = {
  url?: string;
  fontSize: number;
};

export const Link: React.FC<LinkProps> = ({ children, url, fontSize }) => {
  const { isMobile } = useIsMobile();

  return (
    <span
      className="external-link"
      style={{ fontSize: fontSize, background: "red" }}
    >
      <a
        className="external-link"
        style={{ fontSize: fontSize, background: "red" }}
        href={url}
      >
        {children}
      </a>
    </span>
  );
};

export const BioText: React.FC = ({ children }) => {
  const { isMobile } = useIsMobile();

  return (
    <Row className={!isMobile() ? "my-3 px-4" : "my-3"}>
      <Col style={{ fontSize: 20 }}>{children}</Col>
    </Row>
  );
};

export const Highlight: React.FC = ({ children }) => {
  return <span style={{ background: "red" }}>{children}</span>;
};
