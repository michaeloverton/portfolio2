import { Row, Col, Image } from "react-bootstrap";
import { Link as RouterLink } from "react-router-dom";
import { useIsMobile } from "./MobileProvider";
import "./layout.css";

type ImageRowProps = {
  images: string[];
  thumbs: string[];
  spacing?: boolean;
};

export const ImageRow: React.FC<ImageRowProps> = ({
  images,
  thumbs,
  spacing,
}) => {
  const { isMobile } = useIsMobile();
  const noSpacing = { margin: 0, padding: 0 };

  return (
    <Row>
      {thumbs.map((src) =>
        !isMobile() ? (
          <Col key={src} style={spacing ? {} : noSpacing}>
            <Image src={src} width="100%" />
          </Col>
        ) : (
          <Row key={src} style={spacing ? {} : noSpacing}>
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
  description: React.ReactNode;
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
          <Col className="mt-2" style={{ fontSize: 50 }}>
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
              {link ? (
                <Link fontSize={30} url={link} external>
                  DOWNLOAD ON ITCH.IO
                </Link>
              ) : null}
            </Col>
          </Row>

          <Row className="mt-2 mb-4" style={{ fontSize: 25 }}>
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
  url: string;
  fontSize?: number;
  external?: boolean;
};

export const Link: React.FC<LinkProps> = ({
  children,
  url,
  fontSize,
  external,
}) => {
  const styles: React.CSSProperties = { background: "red" };
  if (fontSize) {
    styles.fontSize = fontSize;
  }

  return external ? (
    <RouterLink
      className="external-link"
      to={{
        pathname: url,
      }}
      target="_blank"
      style={styles}
    >
      {children}
    </RouterLink>
  ) : (
    <RouterLink
      className="external-link"
      to={{
        pathname: url,
      }}
      style={styles}
    >
      {children}
    </RouterLink>
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

type MusicImageProps = {
  src: string;
};

export const MusicImage: React.FC<MusicImageProps> = ({ src }) => {
  const { isMobile } = useIsMobile();

  return <Image width={isMobile() ? "250px" : "200px"} src={src} />;
};
