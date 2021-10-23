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
import { ExternalLink, SubSectionHeader, SectionHeader } from "./TextLayout";
import { textStyles } from "./Globals";
import "./Music.css";

const Music: React.FC = () => {
  const imageWidth = "200px";
  const borderWidth = "3px";

  return (
    <div className="pt-3">
      <div
        style={{
          borderTop: `${borderWidth} solid`,
          borderLeft: `${borderWidth} solid`,
        }}
        className="px-3 pb-5"
      >
        <Row>
          <Col>
            <SectionHeader borderWidth={borderWidth}>witness</SectionHeader>
          </Col>
        </Row>

        <Row>
          <Col lg={3}>
            <div style={textStyles}>
              Witness is Michael's currently cryofrozen DJ moniker.
            </div>
          </Col>

          <Col>
            {/* External links */}
            <Row className="px-3 pb-2">
              <Col lg={4}>
                <ExternalLink url="https://soundcloud.com/witnesswitness">
                  soundcloud
                </ExternalLink>
              </Col>

              <Col lg={4}>
                <ExternalLink url="https://soundcloud.com/witnesswitness">
                  bandcamp
                </ExternalLink>
              </Col>

              <Col lg={4}>
                <ExternalLink url="https://ra.co/dj/witness">ra</ExternalLink>
              </Col>
            </Row>

            {/* Mixes */}
            <Row>
              <Col>
                <SubSectionHeader borderWidth={borderWidth}>
                  mixes
                </SubSectionHeader>
              </Col>
            </Row>

            <Row>
              <Col>
                <iframe
                  title="witness-mix"
                  width="100%"
                  height="500"
                  scrolling="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1335515035%3Fsecret_token%3Ds-PkfNxyj2oXF&color=%2354525d&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"
                ></iframe>
              </Col>
            </Row>

            {/* Releases */}
            <Row>
              <Col>
                <SubSectionHeader borderWidth={borderWidth}>
                  releases
                </SubSectionHeader>
              </Col>
            </Row>

            <Row>
              <Col>
                <iframe
                  title="witness-release"
                  width="100%"
                  height="400"
                  scrolling="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/284337507%3Fsecret_token%3Ds-cfFiV&color=%2354525d&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"
                ></iframe>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* SPACER */}
        <div className="spacer"></div>
      </div>

      <div
        style={{
          borderTop: `${borderWidth} solid`,
          borderRight: `${borderWidth} solid`,
          borderBottom: `${borderWidth} solid`,
        }}
        className="px-3 pb-4 pt-3"
      >
        <Row>
          <Col>
            <SectionHeader borderWidth={borderWidth}>
              childhood industries
            </SectionHeader>
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
            {/* External links */}
            <Row className="px-3 pb-2">
              <Col lg={4}>
                <ExternalLink url="https://www.facebook.com/ChildhoodIndustries/">
                  facebook
                </ExternalLink>
              </Col>

              <Col lg={4}>
                <ExternalLink url="https://childhoodindustries.bandcamp.com/album/051515-3">
                  bandcamp
                </ExternalLink>
              </Col>

              <Col lg={4}>
                <ExternalLink url="https://www.mixcloud.com/ChildhoodIndustries/">
                  mixcloud
                </ExternalLink>
              </Col>
            </Row>

            {/* Mixes */}
            <Row>
              <Col>
                <SubSectionHeader borderWidth={borderWidth}>
                  radio
                </SubSectionHeader>
              </Col>
            </Row>

            <Row className="pb-2">
              <Col>
                <iframe
                  title="lotmix1"
                  width="90%"
                  height="60"
                  src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&hide_artwork=1&feed=%2Fthelotradio%2Fchildhood-with-mike-parker-karl-ewald-witness-the-lot-radio-10222016%2F"
                ></iframe>
              </Col>
            </Row>

            <Row className="pb-2">
              <Col>
                <iframe
                  title="lotmix2"
                  width="90%"
                  height="60"
                  src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&hide_artwork=1&feed=%2Fthelotradio%2Fchildhood-with-karl-ewald-witness-the-lot-radio-06232016%2F"
                ></iframe>
              </Col>
            </Row>

            <Row className="pb-2">
              <Col>
                <iframe
                  title="lotmix3"
                  width="90%"
                  height="60"
                  src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&hide_artwork=1&feed=%2Fthelotradio%2Fchildhood-with-karl-ewald-and-milton-bradley-the-lot-radio-08112016%2F"
                ></iframe>
              </Col>
            </Row>

            <Row className="pb-3">
              <Col>
                <iframe
                  title="lotmix4"
                  width="90%"
                  height="60"
                  src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&hide_artwork=1&feed=%2Fthelotradio%2Fchildhood-with-uvb-karl-ewald-witness-the-lot-radio-12072016%2F"
                ></iframe>
              </Col>
            </Row>

            <Row className="py-2">
              <Col>
                <Image
                  className="modified-image"
                  src={show1}
                  height={imageWidth}
                />
              </Col>
              <Col>
                <Image
                  className="modified-image"
                  src={show2}
                  height={imageWidth}
                />
              </Col>
              <Col>
                <Image
                  className="modified-image"
                  src={show3}
                  height={imageWidth}
                />
              </Col>
            </Row>

            <Row className="py-2">
              <Col>
                <Image
                  className="modified-image"
                  src={show4}
                  height={imageWidth}
                />
              </Col>
            </Row>

            {/* Events */}
            <Row>
              <Col>
                <SubSectionHeader borderWidth={borderWidth}>
                  events
                </SubSectionHeader>
              </Col>
            </Row>

            <Row className="py-2">
              <Col>
                <Image
                  className="modified-image"
                  src={event1}
                  height={imageWidth}
                />
              </Col>
              <Col>
                <Image
                  className="modified-image"
                  src={event2}
                  height={imageWidth}
                />
              </Col>
              <Col>
                <Image
                  className="modified-image"
                  src={event3}
                  height={imageWidth}
                />
              </Col>
            </Row>

            <Row className="py-2">
              <Col>
                <Image
                  className="modified-image"
                  src={event4}
                  height={imageWidth}
                />
              </Col>
              <Col>
                <Image
                  className="modified-image"
                  src={event5}
                  height={imageWidth}
                />
              </Col>
            </Row>

            {/* Label */}
            <Row>
              <Col>
                <SubSectionHeader borderWidth={borderWidth}>
                  label
                </SubSectionHeader>
              </Col>
            </Row>

            <Row>
              <Col>
                <Image
                  className="modified-image"
                  src={tape}
                  height={imageWidth}
                />
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
