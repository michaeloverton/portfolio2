import { useEffect, useState } from "react";
import { Row, Col, Modal, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import {
  ImageRow,
  GameBlock,
  Link,
  Highlight,
  YoutubeVideo,
  TitledImageRow,
  CollapsableGameInfo,
} from "./Layout";
import React from "react";
import "./home.css";
import "./header.css";

// Main images
import is2 from "./assets/games/infinite-silence/is2.png";
import is11 from "./assets/games/infinite-silence/is11.png";
import is6 from "./assets/games/infinite-silence/is6.png";
import isTitle from "./assets/games/infinite-silence/big-title.png";
import ph2 from "./assets/games/phreaker/phreaker2.png";
import ph3 from "./assets/games/phreaker/phreaker3.png";
import ph7 from "./assets/games/phreaker/ph7.png";
import ph8 from "./assets/games/phreaker/phreaker8.png";
import ph5 from "./assets/games/phreaker/phreaker5.png";
import phTitle from "./assets/games/phreaker/phTitle.png";
import oh1 from "./assets/games/clock-out/oh1.png";
import oh7 from "./assets/games/clock-out/oh7.png";
import lmCircles from "./assets/games/light-moves/circles2.png";
import lm1 from "./assets/games/light-moves/circles1.png";
import lm2 from "./assets/games/light-moves/moons1.png";
import lmTri from "./assets/games/light-moves/tri1.png";
import cyb1 from "./assets/games/cyberia/cyberia1.png";
import cyb2 from "./assets/games/cyberia/cyberia2.png";
import cyb3 from "./assets/games/cyberia/cyberia3.png";
import cyb4 from "./assets/games/cyberia/cyberia4.png";

// Object Permanence
import op1 from "./assets/games/object-permanence/op1.png";
import op2 from "./assets/games/object-permanence/op2.png";
import op3 from "./assets/games/object-permanence/op3.png";
import op4 from "./assets/games/object-permanence/op4.png";

// MASS
import m1 from "./assets/games/mass/mass1.png";
import m2 from "./assets/games/mass/mass2.png";
import m3 from "./assets/games/mass/mass3.png";
import m4 from "./assets/games/mass/mass4.png";

// DECAY
import d1 from "./assets/games/decay/decay1.png";
import d2 from "./assets/games/decay/decay2.png";
import d3 from "./assets/games/decay/decay3.png";
import d4 from "./assets/games/decay/decay4.png";

// DOUBLE/STAR
import ds1 from "./assets/games/double-star/ds1.png";
import ds2 from "./assets/games/double-star/ds2.png";
import ds3 from "./assets/games/double-star/ds3.png";
import ds4 from "./assets/games/double-star/ds4.png";
import ds5 from "./assets/games/double-star/ds5.png";

// Thumbnails
import is2Thumb from "./assets/thumbnails/games/is2.png";
import is11Thumb from "./assets/thumbnails/games/is11.png";
import is6Thumb from "./assets/thumbnails/games/is6.png";
import isTitleThumb from "./assets/thumbnails/games/isTitle.png";
import ph2Thumb from "./assets/thumbnails/games/phreaker2.png";
import ph3Thumb from "./assets/thumbnails/games/phreaker3.png";
import ph7Thumb from "./assets/thumbnails/games/ph7.png";
import ph8Thumb from "./assets/thumbnails/games/phreaker8.png";
import ph5Thumb from "./assets/thumbnails/games/phreaker5.png";
import phTitleThumb from "./assets/thumbnails/games/phTitle.png";
import oh1Thumb from "./assets/thumbnails/games/oh1.png";
import oh7Thumb from "./assets/thumbnails/games/oh7.png";
import lmCirclesThumb from "./assets/thumbnails/games/circles2.png";
import lmTriThumb from "./assets/thumbnails/games/tri1.png";

const Home2: React.FC = () => {
  // Scroll to top of page on component load.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  return (
    <div>
      <Modal
        size="xl"
        show={showModal}
        onHide={() => setShowModal(false)}
        animation={false}
      >
        <Image
          onClick={() => setShowModal(false)}
          width={"100%"}
          src={modalImageSrc}
        />
      </Modal>

      <Row
        className="header-stretch mt-2 mb-4"
        style={{
          color: "black",
          textAlign: "left",
          fontFamily: "Arial",
          fontSize: 18,
        }}
      >
        <div
          className="text-end"
          style={{
            textTransform: "uppercase",
          }}
        >
          SOLO WORK
        </div>
      </Row>

      <CollapsableGameInfo
        title="METASTASIS"
        images={[d1, d2, d3, d4]}
        thumbs={[d1, d2, d3, d4]}
        setShowModal={setShowModal}
        setModalImageSrc={setModalImageSrc}
        tech={"UNREAL ENGINE 5, HOUDINI"}
        roles={"ART, ANIMATION, MUSIC"}
        youtubeEmbedLink="https://www.youtube.com/embed/_8Zmd9K7YzM"
      >
        <div>
          <div className="mb-2">
            Metaverse, metahuman, metastasis: humankind careens toward a future
            of ecological collapse through overproduction, resource
            mismanagement, and waste, and these concepts are reflected in
            human-created digital realities. What are the principles of collapse
            in these digital spaces?
          </div>

          <div>
            <Highlight>
              Metastasis was a Boston Cyberarts official selection for Waveforms
              2023
            </Highlight>
            , an art occurrence at the Boston Museum of Science. It was played
            on the OMNI, a domed IMAX screen, on July 13, 2023.
          </div>
        </div>
      </CollapsableGameInfo>

      <CollapsableGameInfo
        title="DOUBLE/STAR"
        images={[ds4, ds2, ds5, ds1]}
        thumbs={[ds4, ds2, ds5, ds1]}
        setShowModal={setShowModal}
        setModalImageSrc={setModalImageSrc}
        roles="ART, SFX, DESIGN, CODE"
        tech="HOUDINI, UNREAL ENGINE 5, FMOD"
        youtubeEmbedLink="https://www.youtube.com/embed/-QjuqbvksTw"
      >
        <div className="mb-2">
          DOUBLE/STAR is an adaptation of Robert Heinlein's book of the same
          name. It is an{" "}
          <Highlight>ambient and eerie sound-based exploration game</Highlight>.
        </div>
      </CollapsableGameInfo>

      <CollapsableGameInfo
        title="MASS"
        images={[m1, m2, m3, m4]}
        thumbs={[m1, m2, m3, m4]}
        setShowModal={setShowModal}
        setModalImageSrc={setModalImageSrc}
        roles="Art, SFX, Music, Design, Code"
        tech="Unity, Blender, FMOD, Ableton Live"
        youtubeEmbedLink="https://www.youtube.com/embed/lagvz8v3sBE"
        itchLink="https://phasein.itch.io/mass"
      >
        <div className="mb-2">
          <Highlight>
            MASS is a Catholicism-inflected body horror music space "game" for
            Windows.
          </Highlight>{" "}
          Traversal of the space allows the player to create interactive music:
          "playing" the experience is "performing" the music.
        </div>
      </CollapsableGameInfo>

      <CollapsableGameInfo
        title="CYBERIA"
        images={[cyb1, cyb2, cyb3, cyb4]}
        thumbs={[cyb1, cyb2, cyb3, cyb4]}
        setShowModal={setShowModal}
        setModalImageSrc={setModalImageSrc}
        roles="Art, SFX, Design, Code"
        tech="Unity, Blender, FMOD, Ableton Live"
        youtubeEmbedLink="https://www.youtube.com/embed/6JNgkxGW4xI"
        itchLink="https://phasein.itch.io/cyberia"
      >
        <div className="mb-2">
          <Highlight>
            CYBERIA is a dream for some and a nightmare for others.
          </Highlight>{" "}
          It is an experiment in "topoanalysis", which is the "study of human
          identity as it relates to the places in people's lives". It is an
          amalgamation of some of my favorite club spaces, reconstructed from
          memory, and connected in a topologically unreal way.{" "}
          <Highlight>It is a club that is also a DOOM map.</Highlight> The space
          is recursive, preventing easy construction of a mental map of the
          environment
        </div>
      </CollapsableGameInfo>

      <CollapsableGameInfo
        title="INFINITE SILENCE"
        images={[is2, is11, is6, isTitle]}
        thumbs={[is2, is11, is6, isTitle]}
        setShowModal={setShowModal}
        setModalImageSrc={setModalImageSrc}
        roles="Art, Design, Music, Code"
        tech="Unity, Blender, Ableton Live"
        youtubeEmbedLink="https://www.youtube.com/embed/1f68IGGgu38"
        itchLink="https://phasein.itch.io/infinite-silence"
      >
        <div className="mb-2">
          Infinite Silence is an interactive EP and experiment in{" "}
          <Highlight>non-linear, player-driven music</Highlight> consisting of
          three interconnected spaces stacked vertically, with each space
          representing a track of the EP.
        </div>
      </CollapsableGameInfo>

      <CollapsableGameInfo
        title="PHREAKER"
        images={[ph2, ph8, ph3, ph5]}
        thumbs={[ph2Thumb, ph8Thumb, ph3Thumb, ph5Thumb]}
        setShowModal={setShowModal}
        setModalImageSrc={setModalImageSrc}
        roles="Art, Design, Code"
        tech="Unity, Blender, Ableton Live, Oculus Quest 2"
        youtubeEmbedLink="https://www.youtube.com/embed/cQt9zGCgR20"
        itchLink="https://phasein.itch.io/phreaker"
      >
        <div className="mb-2">
          Phreaker is a{" "}
          <Highlight>virtual reality cyberpunk grappling hook game</Highlight>{" "}
          targeting the Meta Quest 2. It is currently available as a PCVR demo.
        </div>
      </CollapsableGameInfo>

      <Row
        className="header-stretch mt-4 mb-4"
        style={{
          color: "black",
          textAlign: "left",
          fontFamily: "Arial",
          fontSize: 20,
        }}
      >
        <div
          className="text-end"
          style={{
            paddingRight: 5,
            textTransform: "uppercase",
          }}
        >
          COLLABORATIONS
        </div>
      </Row>

      <CollapsableGameInfo
        title="LIGHT MOVES"
        images={[lmCircles, lmTri, lm1, lm2]}
        thumbs={[lmCirclesThumb, lmTriThumb, lm1, lm2]}
        setShowModal={setShowModal}
        setModalImageSrc={setModalImageSrc}
        roles="Design, Code"
        tech="Unity, Blender, Ableton Live, Oculus Quest 2"
        youtubeEmbedLink="https://www.youtube.com/embed/5f8s7v2FC-s"
      >
        <div className="mb-2">
          Light Moves is a virtual reality art experience created in
          collaboration with visual artist{" "}
          <Link url="http://www.nataljakent.com/" external>
            Natalja Kent
          </Link>{" "}
          for the Meta Quest 2. It was showing at{" "}
          <Link url="https://www.forelandcatskill.com/" external>
            Foreland Art Campus
          </Link>{" "}
          in July 2022.
        </div>
      </CollapsableGameInfo>

      {/* DUMMY ROW TO PREVENT BOTTOM WHITESPACE */}
      <Row className="mb-4"></Row>
    </div>
  );
};

export default Home2;
