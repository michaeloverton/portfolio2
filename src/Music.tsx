import { Row, Col, Image } from "react-bootstrap";
import event1 from "./assets/images/events/qu.jpg";
import event2 from "./assets/images/events/stingray.jpg";
import event3 from "./assets/images/events/milton.jpg";
import event4 from "./assets/images/events/parker.jpg";
import event5 from "./assets/images/events/shx.jpg";
import tape from "./assets/images/tape.jpeg";
import show1 from "./assets/images/shows/lot1.jpeg";
import show2 from "./assets/images/shows/lot2.png";
import show3 from "./assets/images/shows/lot3.png";
import show4 from "./assets/images/shows/lot4.png";
import { Link } from "react-router-dom";
import "./Music.css";

const Music: React.FC = () => {
  const imageWidth = "200px";

  const textStyles = {
    fontSize: 30,
    fontWeight: 700,
    transform: "scale(1,.5)",
  };

  const linkStyles = {
    fontSize: 30,
    fontWeight: 600,
    textDecoration: "none",
    color: "white",
  };

  const sectionHeaderStyles = {
    fontSize: 65,
    fontWeight: 600,
    transform: "scale(1, .5)",
  };

  return (
    <div className="pt-3">
      <div className="border-top border-start border-5 px-3 pb-5">
        <Row>
          <Col>
            <div className="border-bottom border-5" style={sectionHeaderStyles}>
              witness
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={3}>
            <div style={textStyles}>
              Witness is Michael's currently cryofrozen DJ moniker.
            </div>
          </Col>

          <Col>
            <Row className="px-3 pb-3">
              <Col lg={4}>
                <Link
                  style={linkStyles}
                  to={{
                    pathname: "https://www.facebook.com/ChildhoodIndustries/",
                  }}
                  target="_blank"
                >
                  <div className="music-link">soundcloud</div>
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
                  <div className="music-link">bandcamp</div>
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
                  <div className="music-link">ra</div>
                </Link>
              </Col>
            </Row>

            <Row>
              <iframe
                width="40%"
                height="20"
                scrolling="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/298323867&color=%2354525d&inverse=true&auto_play=false&show_user=true"
              ></iframe>
            </Row>

            <Row>
              <Col>
                <iframe
                  width="100%"
                  height="450"
                  scrolling="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1335515035%3Fsecret_token%3Ds-PkfNxyj2oXF&color=%2354525d&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"
                ></iframe>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* SPACER */}
        <div className="spacer"></div>
      </div>

      <div className="border-top border-bottom border-end border-5 px-3 pb-4 pt-3">
        <Row>
          <Col>
            <div className="border-bottom border-5" style={sectionHeaderStyles}>
              childhood industries
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={3}>
            <div style={textStyles}>
              Childhood Industries was a label, event series, and radio show on
              The Lot Radio in Brooklyn, NY.
            </div>
          </Col>

          <Col>
            <Row className="px-3 pb-3">
              <Col lg={4}>
                <Link
                  style={linkStyles}
                  to={{
                    pathname: "https://www.facebook.com/ChildhoodIndustries/",
                  }}
                  target="_blank"
                >
                  <div className="music-link">facebook</div>
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
                  <div className="music-link">bandcamp</div>
                </Link>
              </Col>

              <Col lg={4}>
                <Link
                  style={linkStyles}
                  to={{
                    pathname: "https://www.mixcloud.com/ChildhoodIndustries/",
                  }}
                  target="_blank"
                >
                  <div className="music-link">mixcloud</div>
                </Link>
              </Col>
            </Row>

            <Row className="pb-2">
              <Col>
                <iframe
                  width="90%"
                  height="60"
                  src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&hide_artwork=1&feed=%2Fthelotradio%2Fchildhood-with-mike-parker-karl-ewald-witness-the-lot-radio-10222016%2F"
                ></iframe>
              </Col>
            </Row>

            <Row className="pb-2">
              <Col>
                <iframe
                  width="90%"
                  height="60"
                  src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&hide_artwork=1&feed=%2Fthelotradio%2Fchildhood-with-karl-ewald-witness-the-lot-radio-06232016%2F"
                ></iframe>
              </Col>
            </Row>

            <Row className="pb-2">
              <Col>
                <iframe
                  width="90%"
                  height="60"
                  src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&hide_artwork=1&feed=%2Fthelotradio%2Fchildhood-with-karl-ewald-and-milton-bradley-the-lot-radio-08112016%2F"
                ></iframe>
              </Col>
            </Row>

            <Row className="pb-3">
              <Col>
                <iframe
                  width="90%"
                  height="60"
                  src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&hide_artwork=1&feed=%2Fthelotradio%2Fchildhood-with-uvb-karl-ewald-witness-the-lot-radio-12072016%2F"
                ></iframe>
              </Col>
            </Row>

            <Row className="py-2">
              <Col>
                <Image src={event1} width={imageWidth} />
              </Col>
              <Col>
                <Image src={event2} width={imageWidth} />
              </Col>
              <Col>
                <Image src={event3} width={imageWidth} />
              </Col>
            </Row>

            <Row className="py-2">
              <Col>
                <Image src={event4} width={imageWidth} />
              </Col>
              <Col>
                <Image src={event5} width={imageWidth} />
              </Col>
              <Col>
                <Image src={tape} width={imageWidth} />
              </Col>
            </Row>

            <Row className="py-2">
              <Col>
                <Image src={show1} width={imageWidth} />
              </Col>
              <Col>
                <Image src={show2} width={imageWidth} />
              </Col>
              <Col>
                <Image src={show3} width={imageWidth} />
              </Col>
            </Row>

            <Row className="py-2">
              <Col>
                <Image src={show4} width={imageWidth} />
              </Col>
            </Row>
          </Col>
        </Row>

        {/* SPACER */}
        <div className="spacer"></div>
      </div>
    </div>
  );
};

export default Music;
