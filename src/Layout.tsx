import { Row, Col, Image, Collapse } from "react-bootstrap";
import { Link as RouterLink } from "react-router-dom";
import { useIsMobile } from "./MobileProvider";
import { ReactChild, ReactChildren, useEffect, useState } from "react";
import "./layout.css";
import "./header.css";

type CollapsableGameInfoProps = {
  title: string;
  images: string[];
  thumbs: string[];
  spacing?: boolean;
  tech: string;
  roles: string;
  youtubeEmbedLink: string;
  itchLink?: string;
  setShowModal: Function;
  setModalImageSrc: Function;
  children: ReactChild;
};

export function CollapsableGameInfo(props: CollapsableGameInfoProps) {
  const { isMobile } = useIsMobile();
  const noSpacing = { margin: 0, padding: 0 };
  const {
    title,
    images,
    thumbs,
    spacing,
    setShowModal,
    setModalImageSrc,
    tech,
    roles,
    youtubeEmbedLink,
    itchLink,
    children,
  } = props;

  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <Row style={{ position: "relative" }}>
        <Col lg={2} style={{ marginRight: 0, paddingRight: 0 }}>
          <Row
            className="header-stretch"
            style={{
              color: "black",
              textAlign: "left",
            }}
          >
            <div style={{ paddingRight: 5 }}>{title}</div>
          </Row>

          <Row>
            <div
              className="text-start"
              style={{
                fontFamily: "Arial",
                fontSize: 26,
              }}
            >
              <div
                className="header-link-stretch expand-button"
                style={{ background: "#b4fc04" }}
                onClick={() => setExpanded(!expanded)}
              >
                EXPAND
              </div>
            </div>
          </Row>
        </Col>

        {thumbs.map((thumbSrc, index) =>
          !isMobile() ? (
            <Col key={thumbSrc} style={spacing ? {} : noSpacing}>
              <Image
                className="image-link"
                src={thumbSrc}
                width={"100%"}
                onClick={() => {
                  setModalImageSrc(images[index]);
                  setShowModal(true);
                }}
              />
            </Col>
          ) : (
            <Row key={thumbSrc} style={spacing ? {} : noSpacing}>
              <ImageLink thumb={thumbSrc} imgSrc={images[index]} />
            </Row>
          )
        )}
      </Row>

      <Collapse in={expanded}>
        <div>
          <Row className="mt-3 mb-3">
            <Col
              className=" mr-3"
              style={{
                color: "black",
                textAlign: "left",
                fontFamily: "Arial",
                fontSize: 12,
              }}
            >
              <div className="mx-auto" style={{ width: "85%" }}>
                <Row
                  className="mt-2 mb-4"
                  style={{ borderTop: `1px solid black` }}
                ></Row>

                {children}

                <Row
                  className="mt-4 mb-3"
                  style={{ borderTop: `1px solid black` }}
                ></Row>

                <Row
                  className="header-stretch mt-4"
                  style={{
                    color: "black",
                    textAlign: "right",
                    fontFamily: "Arial",
                    fontSize: 14,
                  }}
                >
                  <div style={{ paddingRight: 5, textTransform: "uppercase" }}>
                    TECH: {tech}
                  </div>
                </Row>

                <Row
                  className="header-stretch mt-3"
                  style={{
                    color: "black",
                    textAlign: "right",
                    fontFamily: "Arial",
                    fontSize: 14,
                  }}
                >
                  <div style={{ paddingRight: 5, textTransform: "uppercase" }}>
                    ROLES: {roles}
                  </div>
                </Row>

                {itchLink && (
                  <Row
                    className="header-stretch mt-3"
                    style={{
                      color: "black",
                      textAlign: "right",
                      fontFamily: "Arial",
                      fontSize: 14,
                    }}
                  >
                    <div
                      style={{
                        paddingRight: 5,
                        textTransform: "uppercase",
                      }}
                    >
                      <RouterLink
                        className="external-link"
                        style={{ background: "#b4fc04", paddingLeft: "20px" }}
                        to={{
                          pathname: itchLink,
                        }}
                        target="_blank"
                      >
                        DOWNLOAD
                      </RouterLink>
                    </div>
                  </Row>
                )}
              </div>
            </Col>

            <Col>
              <YoutubeVideo
                url={youtubeEmbedLink}
                title={title}
                desktopHeight={300}
              />
            </Col>
          </Row>

          <Row
            className={"mb-3"}
            style={{ borderTop: `1px solid black` }}
          ></Row>
        </div>
      </Collapse>
    </div>
  );
}

type TitledImageRowProps = {
  title: string;
  images: string[];
  thumbs: string[];
  spacing?: boolean;
  onClick?: Function;
};

export const TitledImageRow: React.FC<TitledImageRowProps> = ({
  title,
  images,
  thumbs,
  spacing,
  onClick,
}) => {
  const { isMobile } = useIsMobile();
  const noSpacing = { margin: 0, padding: 0 };

  return (
    <Row style={{ position: "relative" }}>
      <Col lg={2} style={{ marginRight: 0, paddingRight: 0 }}>
        <Row
          className="header-stretch"
          style={{
            color: "black",
            textAlign: "left",
          }}
        >
          <div style={{ paddingRight: 5 }}>{title}</div>
        </Row>

        <Row>
          <div
            className="text-start"
            style={{
              fontFamily: "Arial",
              fontSize: 26,
            }}
          >
            <div
              className="header-link-stretch expand-button"
              style={{ background: "#b4fc04" }}
              onClick={onClick ? () => onClick() : () => {}}
            >
              EXPAND
            </div>
          </div>
        </Row>
      </Col>

      {thumbs.map((thumbSrc, index) =>
        !isMobile() ? (
          <Col key={thumbSrc} style={spacing ? {} : noSpacing}>
            <ImageLink thumb={thumbSrc} imgSrc={images[index]} />
          </Col>
        ) : (
          <Row key={thumbSrc} style={spacing ? {} : noSpacing}>
            <ImageLink thumb={thumbSrc} imgSrc={images[index]} />
          </Row>
        )
      )}
    </Row>
  );
};

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
      {thumbs.map((thumbSrc, index) =>
        !isMobile() ? (
          <Col key={thumbSrc} style={spacing ? {} : noSpacing}>
            <ImageLink thumb={thumbSrc} imgSrc={images[index]} />
          </Col>
        ) : (
          <Row key={thumbSrc} style={spacing ? {} : noSpacing}>
            <ImageLink thumb={thumbSrc} imgSrc={images[index]} />
          </Row>
        )
      )}
    </Row>
  );
};

type VideoProps = {
  src: string;
  startTime?: string;
  onLoadedFunc?: Function;
};

export const Video: React.FC<VideoProps> = ({
  src,
  startTime,
  onLoadedFunc,
}) => {
  return (
    <Row>
      <Col style={{ margin: 0, padding: 0 }}>
        {onLoadedFunc ? (
          <video
            controls
            loop
            width={"100%"}
            onLoadedData={() => onLoadedFunc()}
          >
            <source
              src={`${src}#t=${startTime ? startTime : "0.001"}`}
              type="video/mp4"
            />
          </video>
        ) : (
          <video controls loop width={"100%"}>
            <source
              src={`${src}#t=${startTime ? startTime : "0.001"}`}
              type="video/mp4"
            />
          </video>
        )}
      </Col>
    </Row>
  );
};

type GameBlockProps = {
  name: string;
  description: React.ReactNode;
  roles: string;
  tech: string;
  link?: string;
};

export const GameBlock: React.FC<GameBlockProps> = ({
  children,
  name,
  description,
  roles,
  tech,
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

          {!isMobile() ? (
            <div>
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

              <Row className="mt-3" style={{ fontSize: 25 }}>
                <Col>
                  <Highlight>Roles:</Highlight> {roles}
                </Col>
              </Row>

              <Row className="mb-4" style={{ fontSize: 25 }}>
                <Col>
                  <Highlight>Tech:</Highlight> {tech}
                </Col>
              </Row>
            </div>
          ) : (
            <div>
              <Row className="mt-3 mb-2" style={{ fontSize: 20 }}>
                <Col>{description}</Col>
              </Row>

              <Row className="mt-3" style={{ fontSize: 25 }}>
                <Col>
                  <Highlight>Roles:</Highlight> {roles}
                </Col>
              </Row>

              <Row className="mb-3" style={{ fontSize: 25 }}>
                <Col>
                  <Highlight>Tech:</Highlight> {tech}
                </Col>
              </Row>

              <Row className="mt-2 mb-4" style={{ fontSize: 20 }}>
                <Col>
                  {link ? (
                    <Link fontSize={30} url={link} external>
                      DOWNLOAD ON ITCH.IO
                    </Link>
                  ) : null}
                </Col>
              </Row>
            </div>
          )}
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
  const styles: React.CSSProperties = { background: "#b4fc04" };
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

type ImageLinkProps = {
  thumb: string;
  imgSrc: string;
  width?: string;
};

export const ImageLink: React.FC<ImageLinkProps> = ({
  imgSrc,
  thumb,
  width,
}) => {
  return (
    <RouterLink
      className="image-link"
      to={{
        pathname: imgSrc,
      }}
      target="_blank"
    >
      <Image src={thumb} width={width ? width : "100%"} />
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
  return (
    <span style={{ background: "#b4fc04", fontWeight: "bold" }}>
      {children}
    </span>
  );
};

type MusicImageProps = {
  thumb: string;
  imgSrc: string;
};

export const MusicImage: React.FC<MusicImageProps> = ({ thumb, imgSrc }) => {
  const { isMobile } = useIsMobile();

  return (
    <ImageLink
      width={isMobile() ? "250px" : "200px"}
      thumb={thumb}
      imgSrc={imgSrc}
    />
  );
};

export const Loading: React.FC = () => {
  const { isMobile } = useIsMobile();

  return (
    <div>
      <Row style={{ fontSize: 60 }}>
        <Col>
          LOADING
          <CharacterRepeater char="." maxChars={10} />
        </Col>
      </Row>

      <Row
        className={!isMobile() ? "mb-4" : "mb-2"}
        style={{ borderTop: `4px solid` }}
      ></Row>
    </div>
  );
};

type CharacterRepeaterProps = {
  char: string;
  maxChars: number;
};

export const CharacterRepeater: React.FC<CharacterRepeaterProps> = ({
  char,
  maxChars,
}) => {
  const [chars, setChars] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      chars.length >= maxChars ? setChars("") : setChars(chars + char);
    }, 200);

    return () => clearInterval(interval);
  }, [chars, char, maxChars]);

  return <span>{chars}</span>;
};

type YoutubeVideoProps = {
  url: string;
  title: string;
  desktopHeight?: number;
  mobileHeight?: number;
};

export const YoutubeVideo: React.FC<YoutubeVideoProps> = ({
  url,
  title,
  desktopHeight,
  mobileHeight,
}) => {
  const { isMobile } = useIsMobile();

  return (
    <Row>
      <Col style={{ margin: 0, padding: isMobile() ? "" : 0 }}>
        <iframe
          width="95%"
          height={
            isMobile()
              ? mobileHeight
                ? mobileHeight
                : 250
              : desktopHeight
              ? desktopHeight
              : 500
          }
          src={url}
          title={title}
          allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </Col>
    </Row>
  );
};
