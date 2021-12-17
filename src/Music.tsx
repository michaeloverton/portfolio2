import { useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
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
import srCover from "./assets/art/sr388-cover.png";
import iceCover from "./assets/art/ice-cover.png";
import {
  ExternalLink,
  SubSectionHeader,
  SectionHeader,
  SectionContainer,
  SectionInfo,
  MusicImage,
  Spacer,
  Emphasis,
} from "./TextLayout";
import { useIsMobile } from "./MobileProvider";

const Music: React.FC = () => {
  const borderWidth = "3px";
  const { isMobile } = useIsMobile();

  // Scroll to top of page on component load.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* <IntroText>
        Music unifies creative expression and technological exploration.
      </IntroText> */}

      <SectionContainer borderWidth={borderWidth} top left>
        <SectionHeader borderWidth={borderWidth}>witness</SectionHeader>

        <SectionInfo>
          Witness is my primary{" "}
          <Emphasis>music production and DJ alias,</Emphasis> under which I have
          produced small techno and ambient EPs and served as a resident DJ for
          multiple event series.
        </SectionInfo>

        {/* External links */}
        <Row className="px-2 pb-4">
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
        <Row className="mb-4">
          <Col>
            <SubSectionHeader borderWidth={borderWidth}>
              releases
            </SubSectionHeader>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={5}>
            <Link
              to={{
                pathname: srCover,
              }}
              target="_blank"
            >
              <Image src={srCover} width="100%" />
            </Link>
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

        <Row className="mb-5">
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

        <Row className="mb-5">
          <Col lg={5}>
            <Link
              to={{
                pathname: iceCover,
              }}
              target="_blank"
            >
              <Image src={iceCover} width="100%" />
            </Link>
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

        <Row className="mb-5">
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
              height={isMobile() ? "300" : "450"}
              scrolling="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1342022017&color=%2354525d&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
          </Col>
        </Row>

        {/* Mixes */}
        <Row className="mt-3 mb-4">
          <Col>
            <SubSectionHeader borderWidth={borderWidth}>mixes</SubSectionHeader>
          </Col>
        </Row>

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

        <Spacer />
      </SectionContainer>

      <SectionContainer borderWidth={borderWidth} top right bottom>
        <SectionHeader borderWidth={borderWidth}>
          childhood industries
        </SectionHeader>

        <SectionInfo>
          Childhood Industries was a music project started with a friend and
          fellow DJ, Carl Jannerfeldt, encompassing an{" "}
          <Emphasis>
            event series (150-300 people per event), music label, and radio show
            on The Lot Radio.
          </Emphasis>{" "}
          It focused on underground techno in Brooklyn, NY.
        </SectionInfo>

        {/* External links */}
        <Row className="px-2 pb-4">
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
        <Row className="mb-4">
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

        <Row className="mb-4">
          <Col>
            <SubSectionHeader borderWidth={borderWidth}></SubSectionHeader>
          </Col>
        </Row>

        <Row className="py-2">
          <Col>
            <MusicImage src={show1} />
          </Col>

          <Col>
            <MusicImage src={show2} />
          </Col>

          <Col>
            <MusicImage src={show3} />
          </Col>

          <Col>
            <MusicImage src={show4} />
          </Col>
        </Row>

        {/* Events */}
        <Row className="mt-3 mb-4">
          <Col>
            <SubSectionHeader borderWidth={borderWidth}>
              events
            </SubSectionHeader>
          </Col>
        </Row>

        <Row className="py-2">
          <Col>
            <MusicImage src={event1} />
          </Col>

          <Col>
            <MusicImage src={event2} />
          </Col>

          <Col>
            <MusicImage src={event3} />
          </Col>

          <Col>
            <MusicImage src={event4} />
          </Col>

          <Col>
            <MusicImage src={event5} />
          </Col>
        </Row>

        {/* Label */}
        <Row className="mt-3 mb-4">
          <Col>
            <SubSectionHeader borderWidth={borderWidth}>label</SubSectionHeader>
          </Col>
        </Row>

        <Row className="py-2">
          <Col>
            <MusicImage src={tape} />
          </Col>
        </Row>

        <Spacer />
      </SectionContainer>
    </div>
  );
};

export default Music;
