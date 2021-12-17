import { Link } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import {
  mediumBreakPoint,
  linkStyles,
  sectionHeaderStyles,
  subSectionHeaderStyles,
  pageDescriptionStyles,
  textStyles,
  emphStyles,
} from "./Globals";
import { useIsMobile } from "./MobileProvider";
import "./TextLayout.css";

type LinkProps = {
  url: string;
};

export const ExternalLink: React.FC<LinkProps> = ({ url, children }) => {
  return (
    <Link
      style={linkStyles}
      to={{
        pathname: url,
      }}
      target="_blank"
    >
      <div className="external-link">{children}</div>
    </Link>
  );
};

type SubHeaderProps = {
  borderWidth: string;
};

export const SubSectionHeader: React.FC<SubHeaderProps> = ({
  children,
  borderWidth,
}) => {
  return (
    <div
      style={{
        ...{
          borderBottom: `${borderWidth} solid`,
        },
        ...subSectionHeaderStyles,
      }}
    >
      {children}
    </div>
  );
};

type SectionHeaderProps = {
  borderWidth: string;
  rowClass?: string;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  children,
  rowClass,
  borderWidth,
}) => {
  return (
    <Row className={rowClass ? rowClass : ""}>
      <Col>
        <div
          style={{
            ...{
              borderBottom: `${borderWidth} solid`,
            },
            ...sectionHeaderStyles,
          }}
        >
          {children}
        </div>
      </Col>
    </Row>
  );
};

export const IntroText: React.FC = ({ children }) => {
  return (
    <Row className="px-2">
      <Col>
        <div className="px-4 py-4" style={pageDescriptionStyles}>
          {children}
        </div>
      </Col>
    </Row>
  );
};

export const Spacer: React.FC = () => {
  return <div className="spacer"></div>;
};

export const Emphasis: React.FC = ({ children }) => {
  return <span style={emphStyles}>{children}</span>;
};

export const SectionInfo: React.FC = ({ children }) => {
  return (
    <Row>
      <Col className="px-4 py-5">
        <div style={textStyles}>{children}</div>
      </Col>
    </Row>
  );
};

type VideoProps = {
  src: string;
};

export const Video: React.FC<VideoProps> = ({ src }) => {
  return (
    <video className="pt-5 pb-3" controls loop width={"100%"}>
      <source src={`${src}#t=0.001`} type="video/mp4" />
    </video>
  );
};

type GameImageProps = {
  src: string;
};

export const GameImage: React.FC<GameImageProps> = ({ src }) => {
  return (
    <Row className="mb-3">
      <Col>
        <Link
          to={{
            pathname: src,
          }}
          target="_blank"
        >
          <Image src={src} width="100%" />
        </Link>
      </Col>
    </Row>
  );
};

type MusicImageProps = {
  src: string;
};

export const MusicImage: React.FC<MusicImageProps> = ({ src }) => {
  const { width } = useIsMobile();
  const imageWidth = "200px";
  const bigImageWidth = "250px";

  return (
    <Row className="mb-3">
      <Col>
        <Link
          to={{
            pathname: src,
          }}
          target="_blank"
        >
          <Image
            src={src}
            height={width() < mediumBreakPoint ? bigImageWidth : imageWidth}
          />
        </Link>
      </Col>
    </Row>
  );
};

type SectionProps = {
  borderWidth: string;
  right?: boolean;
  left?: boolean;
  top?: boolean;
  bottom?: boolean;
};

export const SectionContainer: React.FC<SectionProps> = ({
  borderWidth,
  right,
  left,
  top,
  bottom,
  children,
}) => {
  const { isMobile } = useIsMobile();

  return (
    <div
      style={{
        borderTop: top ? `${borderWidth} solid` : ``,
        borderRight: right ? `${borderWidth} solid` : ``,
        borderLeft: left ? `${borderWidth} solid` : ``,
        borderBottom: bottom ? `${borderWidth} solid` : ``,
      }}
      className={isMobile() ? "px-2 pb-2" : "px-5 pb-5"}
      // className="px-5 pb-4 pt-3" // this was used in some of the non-top sections.
    >
      {children}
    </div>
  );
};
