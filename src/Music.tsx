import { useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Highlight, MusicImage } from "./Layout";
import React from "react";
import { useIsMobile } from "./MobileProvider";
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
import "./home.css";

const Music: React.FC = () => {
  const { isMobile } = useIsMobile();

  // Scroll to top of page on component load.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="mb-4">
        <Row className="mb-4">
          <Col lg={3} style={{ fontSize: 60 }}>
            WITNESS
          </Col>
          <Col className="my-auto" style={{ fontSize: 20 }}>
            Witness is{" "}
            <Highlight>my primary music production and DJ alias,</Highlight>{" "}
            under which I have produced small techno and ambient EPs and served
            as a resident DJ for multiple event series.
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
                <Image src={srCover} width="100%" />
              </Col>
              <Col>
                <iframe
                  title="sr-388"
                  width="100%"
                  height="241px"
                  src="https://bandcamp.com/EmbeddedPlayer/album=717796054/size=large/bgcol=ffffff/linkcol=2ebd35/artwork=small/transparent=true/"
                  seamless
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
                ></iframe>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Image src={iceCover} width="100%" />
              </Col>
              <Col>
                <iframe
                  title="ice"
                  width="100%"
                  height="241px"
                  src="https://bandcamp.com/EmbeddedPlayer/album=4019230084/size=large/bgcol=ffffff/linkcol=2ebd35/artwork=small/transparent=true/"
                  seamless
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
              an event series (150-300 people per event), music label, and radio
              show on The Lot Radio.
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
                <MusicImage src={show1} />

                <MusicImage src={show2} />

                <MusicImage src={show3} />

                <MusicImage src={show4} />
              </Col>
            </Row>

            <Row className="my-2">
              <iframe
                title="lotmix1"
                width="90%"
                height="60"
                src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&hide_artwork=1&feed=%2Fthelotradio%2Fchildhood-with-mike-parker-karl-ewald-witness-the-lot-radio-10222016%2F"
              ></iframe>
            </Row>

            <Row className="my-2">
              <iframe
                title="lotmix2"
                width="90%"
                height="60"
                src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&hide_artwork=1&feed=%2Fthelotradio%2Fchildhood-with-karl-ewald-witness-the-lot-radio-06232016%2F"
              ></iframe>
            </Row>

            <Row className="my-2">
              <iframe
                title="lotmix3"
                width="90%"
                height="60"
                src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&hide_artwork=1&feed=%2Fthelotradio%2Fchildhood-with-karl-ewald-and-milton-bradley-the-lot-radio-08112016%2F"
              ></iframe>
            </Row>

            <Row className="my-2">
              <iframe
                title="lotmix4"
                width="90%"
                height="60"
                src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&hide_artwork=1&feed=%2Fthelotradio%2Fchildhood-with-uvb-karl-ewald-witness-the-lot-radio-12072016%2F"
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
                <MusicImage src={event1} />

                <MusicImage src={event2} />

                <MusicImage src={event3} />

                <MusicImage src={event4} />

                <MusicImage src={event5} />
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
                <MusicImage src={tape} />
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
  );
};

export default Music;
