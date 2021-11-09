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
import {
  ExternalLink,
  SubSectionHeader,
  SectionHeader,
  SectionContainer,
  IntroText,
  SectionInfo,
} from "./TextLayout";
import "./Music.css";

const Music: React.FC = () => {
  const imageWidth = "200px";
  const borderWidth = "3px";

  return (
    <div>
      <IntroText>
        Music unifies creative expression and technological exploration.
      </IntroText>

      <SectionContainer borderWidth={borderWidth} top left>
        <Row>
          <Col>
            <SectionHeader borderWidth={borderWidth}>witness</SectionHeader>
          </Col>
        </Row>

        <SectionInfo>
          Witness is my primary music production and DJ alias, under which I
          have produced small ambient and techno EPs and served as a resident DJ
          for multiple event series.
        </SectionInfo>

        {/* External links */}
        <Row className="px-2 pb-2">
          <Col xl={4} lg={12}>
            <ExternalLink url="https://soundcloud.com/witnesswitness">
              soundcloud
            </ExternalLink>
          </Col>

          <Col xl={4} lg={12}>
            <ExternalLink url="https://witnesswitness.bandcamp.com/releases">
              bandcamp
            </ExternalLink>
          </Col>

          <Col xl={4} lg={12}>
            <ExternalLink url="https://ra.co/dj/witness">ra</ExternalLink>
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

        <Row className="mb-3">
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

        <Row className="mb-3">
          <Col>
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/kcbzfgksK1o"
              title="YouTube video player"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Col>
        </Row>

        <Row>
          <Col>
            <iframe
              title="music for air conditioners"
              width="100%"
              height="450"
              scrolling="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1342022017&color=%2354525d&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
          </Col>
        </Row>

        {/* Mixes */}
        <Row className="mt-3">
          <Col>
            <SubSectionHeader borderWidth={borderWidth}>mixes</SubSectionHeader>
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
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1335515035&color=%2354525d&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
          </Col>
        </Row>

        {/* SPACER */}
        <div className="spacer"></div>
      </SectionContainer>

      <SectionContainer borderWidth={borderWidth} top right bottom>
        <Row>
          <Col>
            <SectionHeader borderWidth={borderWidth}>
              childhood industries
            </SectionHeader>
          </Col>
        </Row>

        <SectionInfo>
          Childhood Industries was a music project started with a friend,
          encompassing an event series (150-300 people per event), music label,
          and radio show (on The Lot Radio), focusing on underground techno in
          Brooklyn, NY.
        </SectionInfo>

        {/* External links */}
        <Row className="px-2 pb-2">
          <Col xl={4} lg={12}>
            <ExternalLink url="https://www.facebook.com/ChildhoodIndustries/">
              facebook
            </ExternalLink>
          </Col>

          <Col xl={4} lg={12}>
            <ExternalLink url="https://childhoodindustries.bandcamp.com/album/051515-3">
              bandcamp
            </ExternalLink>
          </Col>

          <Col xl={4} lg={12}>
            <ExternalLink url="https://www.mixcloud.com/ChildhoodIndustries/">
              mixcloud
            </ExternalLink>
          </Col>
        </Row>

        {/* Mixes */}
        <Row>
          <Col>
            <SubSectionHeader borderWidth={borderWidth}>radio</SubSectionHeader>
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
            <Image className="modified-image" src={show1} height={imageWidth} />
          </Col>
          <Col>
            <Image className="modified-image" src={show2} height={imageWidth} />
          </Col>
          <Col>
            <Image className="modified-image" src={show3} height={imageWidth} />
          </Col>
        </Row>

        <Row className="py-2">
          <Col>
            <Image className="modified-image" src={show4} height={imageWidth} />
          </Col>
        </Row>

        {/* Events */}
        <Row className="mt-3">
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
        <Row className="mt-3">
          <Col>
            <SubSectionHeader borderWidth={borderWidth}>label</SubSectionHeader>
          </Col>
        </Row>

        <Row>
          <Col>
            <Image className="modified-image" src={tape} height={imageWidth} />
          </Col>
        </Row>

        {/* SPACER */}
        <div className="spacer"></div>
      </SectionContainer>
    </div>
  );
};

export default Music;
