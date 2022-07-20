import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Highlight, MusicImage, Loading, ImageLink } from "./Layout";
import React from "react";
import { useIsMobile } from "./MobileProvider";
import "./home.css";

// Normal images
import event1 from "./assets/music/events/qu.jpg";
import event2 from "./assets/music/events/stingray.jpg";
import event3 from "./assets/music/events/milton.jpg";
import event4 from "./assets/music/events/parker.jpg";
import event5 from "./assets/music/events/shx.jpg";
import tape from "./assets/music/tape.jpeg";
import show1 from "./assets/music/shows/lot1.jpeg";
import show2 from "./assets/music/shows/lot2.png";
import show3 from "./assets/music/shows/lot3.png";
import show4 from "./assets/music/shows/lot4.png";
import srCover from "./assets/music/releases/sr388-cover.png";
import iceCover from "./assets/music/releases/ice-cover.png";

// Thumbnails
import event1Thumb from "./assets/thumbnails/music/qu.jpg";
import event2Thumb from "./assets/thumbnails/music/stingray.jpg";
import event3Thumb from "./assets/thumbnails/music/milton.jpg";
import event4Thumb from "./assets/thumbnails/music/parker.jpg";
import event5Thumb from "./assets/thumbnails/music/shx.jpg";
import tapeThumb from "./assets/thumbnails/music/tape.jpeg";
import show1Thumb from "./assets/thumbnails/music/lot1.jpeg";
import show2Thumb from "./assets/thumbnails/music/lot2.png";
import show3Thumb from "./assets/thumbnails/music/lot3.png";
import show4Thumb from "./assets/thumbnails/music/lot4.png";
import srCoverThumb from "./assets/thumbnails/music/sr388-cover.png";
import iceCoverThumb from "./assets/thumbnails/music/ice-cover.png";

const Music: React.FC = () => {
  const { isMobile } = useIsMobile();
  const [loadedCount, setLoaded] = useState<number>(0);
  const ITEMS_TO_LOAD = 10;

  // Scroll to top of page on component load.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {loadedCount < ITEMS_TO_LOAD ? <Loading /> : null}

      <div className={loadedCount < ITEMS_TO_LOAD ? "d-none" : ""}>
        <div className="mb-4">
          <Row className="mb-4">
            <Col lg={3} style={{ fontSize: 60 }}>
              WITNESS
            </Col>
            <Col className="my-auto" style={{ fontSize: 20 }}>
              Witness is{" "}
              <Highlight>my primary music production and DJ alias,</Highlight>{" "}
              under which I have produced small techno and ambient EPs and
              served as a resident DJ for multiple event series.
            </Col>
          </Row>

          <Row className="mb-4">
            <Col
              lg={3}
              className="text-end"
              style={{ fontSize: isMobile() ? 30 : 35 }}
            >
              RELEASES
            </Col>
            <Col style={{ borderLeft: `4px solid` }}>
              <Row>
                <Col md={6}>
                  <ImageLink thumb={srCoverThumb} imgSrc={srCover} />
                </Col>
                <Col>
                  <iframe
                    title="sr-388"
                    width="100%"
                    height="241px"
                    src="https://bandcamp.com/EmbeddedPlayer/album=717796054/size=large/bgcol=ffffff/linkcol=2ebd35/artwork=small/transparent=true/"
                    seamless
                    onLoad={() => setLoaded(loadedCount + 1)}
                  >
                    <a href="https://witnesswitness.bandcamp.com/album/sr-388">
                      SR-388 by Witness
                    </a>
                  </iframe>
                </Col>
              </Row>

              <Row>
                <Col>
                  <iframe
                    width="100%"
                    height={isMobile() ? "250" : "450"}
                    src="https://www.youtube.com/embed/kcbzfgksK1o"
                    title="YouTube video player"
                    allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    onLoad={() => setLoaded(loadedCount + 1)}
                  ></iframe>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <ImageLink thumb={iceCoverThumb} imgSrc={iceCover} />
                </Col>
                <Col>
                  <iframe
                    title="ice"
                    width="100%"
                    height="241px"
                    src="https://bandcamp.com/EmbeddedPlayer/album=4019230084/size=large/bgcol=ffffff/linkcol=2ebd35/artwork=small/transparent=true/"
                    seamless
                    onLoad={() => setLoaded(loadedCount + 1)}
                  >
                    <a href="https://witnesswitness.bandcamp.com/album/ice">
                      Ice by Witness
                    </a>
                  </iframe>
                </Col>
              </Row>

              <Row>
                <Col>
                  <iframe
                    width="100%"
                    title="soundman theme"
                    height="166"
                    scrolling="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1157137171&color=%2354525d&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"
                    onLoad={() => setLoaded(loadedCount + 1)}
                  ></iframe>
                </Col>
              </Row>

              <Row>
                <Col>
                  <iframe
                    title="music for air conditioners"
                    width="100%"
                    height={isMobile() ? "200" : "350"}
                    scrolling="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1342022017&color=%2354525d&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"
                    onLoad={() => setLoaded(loadedCount + 1)}
                  ></iframe>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col
              lg={3}
              className="text-end"
              style={{ fontSize: isMobile() ? 30 : 35 }}
            >
              MIXES
            </Col>
            <Col style={{ borderLeft: `4px solid` }}>
              <Row>
                <Col>
                  <iframe
                    title="witness-mix"
                    width="100%"
                    height={isMobile() ? "300" : "500"}
                    scrolling="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1335515035&color=%2354525d&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"
                    onLoad={() => setLoaded(loadedCount + 1)}
                  ></iframe>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <Row
          className={!isMobile() ? "mb-4" : "mb-2"}
          style={{ borderTop: `4px solid` }}
        ></Row>

        <div className="mb-4">
          <Row className="mb-4">
            <Col lg={4} style={{ fontSize: 60 }}>
              CHILDHOOD INDUSTRIES
            </Col>
            <Col className="my-auto" style={{ fontSize: 20 }}>
              Childhood Industries was a music project started with a friend and
              fellow DJ, Carl Jannerfeldt, encompassing{" "}
              <Highlight>
                an event series (150-300 people per event), music label, and
                radio show on The Lot Radio.
              </Highlight>{" "}
              It focused on underground techno in Brooklyn, NY.
            </Col>
          </Row>

          <Row className="mb-4">
            <Col
              lg={3}
              className="text-end"
              style={{ fontSize: isMobile() ? 30 : 35 }}
            >
              RADIO
            </Col>
            <Col style={{ borderLeft: `4px solid` }}>
              <Row>
                <Col>
                  <MusicImage thumb={show1Thumb} imgSrc={show1} />

                  <MusicImage thumb={show2Thumb} imgSrc={show2} />

                  <MusicImage thumb={show3Thumb} imgSrc={show3} />

                  <MusicImage thumb={show4Thumb} imgSrc={show4} />
                </Col>
              </Row>

              <Row className="my-2">
                <iframe
                  title="lotmix1"
                  width="90%"
                  height="60"
                  src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&hide_artwork=1&feed=%2Fthelotradio%2Fchildhood-with-mike-parker-karl-ewald-witness-the-lot-radio-10222016%2F"
                  onLoad={() => setLoaded(loadedCount + 1)}
                ></iframe>
              </Row>

              <Row className="my-2">
                <iframe
                  title="lotmix2"
                  width="90%"
                  height="60"
                  src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&hide_artwork=1&feed=%2Fthelotradio%2Fchildhood-with-karl-ewald-witness-the-lot-radio-06232016%2F"
                  onLoad={() => setLoaded(loadedCount + 1)}
                ></iframe>
              </Row>

              <Row className="my-2">
                <iframe
                  title="lotmix3"
                  width="90%"
                  height="60"
                  src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&hide_artwork=1&feed=%2Fthelotradio%2Fchildhood-with-karl-ewald-and-milton-bradley-the-lot-radio-08112016%2F"
                  onLoad={() => setLoaded(loadedCount + 1)}
                ></iframe>
              </Row>

              <Row className="my-2">
                <iframe
                  title="lotmix4"
                  width="90%"
                  height="60"
                  src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&hide_artwork=1&feed=%2Fthelotradio%2Fchildhood-with-uvb-karl-ewald-witness-the-lot-radio-12072016%2F"
                  onLoad={() => setLoaded(loadedCount + 1)}
                ></iframe>
              </Row>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col
              lg={3}
              className="text-end"
              style={{ fontSize: isMobile() ? 30 : 35 }}
            >
              EVENTS
            </Col>
            <Col style={{ borderLeft: `4px solid` }}>
              <Row>
                <Col>
                  <MusicImage thumb={event1Thumb} imgSrc={event1} />

                  <MusicImage thumb={event2Thumb} imgSrc={event2} />

                  <MusicImage thumb={event3Thumb} imgSrc={event3} />

                  <MusicImage thumb={event4Thumb} imgSrc={event4} />

                  <MusicImage thumb={event5Thumb} imgSrc={event5} />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col
              lg={3}
              className="text-end"
              style={{ fontSize: isMobile() ? 30 : 35 }}
            >
              LABEL
            </Col>
            <Col style={{ borderLeft: `4px solid` }}>
              <Row>
                <Col>
                  <MusicImage thumb={tapeThumb} imgSrc={tape} />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <Row
          className={!isMobile() ? "mb-4" : "mb-2"}
          style={{ borderTop: `4px solid` }}
        ></Row>
      </div>
    </div>
  );
};

export default Music;
