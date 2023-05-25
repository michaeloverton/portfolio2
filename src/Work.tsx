import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { ImageRow, GameBlock, Link, Highlight, YoutubeVideo } from "./Layout";
import React from "react";
import "./home.css";

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

  return (
    <div>
      <GameBlock
        name="DECAY"
        description={
          <>
            DECAY is an experimental animation created using Houdini and Unreal
            Engine 5.{" "}
            <Highlight>
              It is a contemplation on the decay of digital spaces.
            </Highlight>{" "}
            What happens to these spaces when they are forgotten? What rules
            does digital decay follow?
          </>
        }
        roles="Art, Animation"
        tech="Houdini, Unreal Engine 5"
      >
        <ImageRow images={[d1, d2]} thumbs={[d1, d2]} />

        <ImageRow images={[d3, d4]} thumbs={[d3, d4]} />

        <YoutubeVideo
          url="https://www.youtube.com/embed/jClLf0MC9nE"
          title="DECAY"
        />
      </GameBlock>

      <GameBlock
        name="DOUBLE/STAR"
        description={
          <>
            DOUBLE/STAR is an adaptation of Robert Heinlein's book of the same
            name. It is an{" "}
            <Highlight>
              ambient and eerie sound-based exploration game
            </Highlight>
            .
          </>
        }
        roles="Art, SFX, Design, Code"
        tech="Houdini, Unreal Engine 5, FMOD"
      >
        <ImageRow images={[ds4, ds2]} thumbs={[ds4, ds2]} />

        <ImageRow images={[ds5, ds1]} thumbs={[ds5, ds1]} />

        <YoutubeVideo
          url="https://www.youtube.com/embed/-QjuqbvksTw"
          title="DOUBLE/STAR"
        />
      </GameBlock>

      <GameBlock
        name="MASS"
        description={
          <>
            <Highlight>
              MASS is a Catholicism-inflected body horror music space "game" for
              Windows.
            </Highlight>{" "}
            Traversal of the space allows the player to create interactive
            music: "playing" the experience is "performing" the music.
          </>
        }
        roles="Art, SFX, Music, Design, Code"
        tech="Unity, Blender, FMOD, Ableton Live"
        link="https://phasein.itch.io/mass"
      >
        <ImageRow images={[m1, m2]} thumbs={[m1, m2]} />

        <ImageRow images={[m3, m4]} thumbs={[m3, m4]} />

        <YoutubeVideo
          url="https://www.youtube.com/embed/lagvz8v3sBE"
          title="MASS"
        />
      </GameBlock>

      <GameBlock
        name="OBJECT PERMANENCE"
        description={
          <>
            When I was four, my house burned down.{" "}
            <Highlight>OBJECT PERMANENCE is an experiment on myself</Highlight>:
            can I remember that house? Are my memories real? How does it feel to
            recreate and enter a traumatic memory? I can tell you: it feels
            weird.
          </>
        }
        roles="Art, Design, Code"
        tech="Unity, Blender, FMOD"
        link="https://phasein.itch.io/object-permanence"
      >
        <ImageRow images={[op1, op2]} thumbs={[op1, op2]} />

        <ImageRow images={[op3, op4]} thumbs={[op3, op4]} />

        <YoutubeVideo
          url="https://www.youtube.com/embed/tH9ruh9ACOg"
          title="OBJECT PERMANENCE"
        />
      </GameBlock>

      <GameBlock
        name="CYBERIA"
        description={
          <>
            <Highlight>
              CYBERIA is a dream for some and a nightmare for others.
            </Highlight>{" "}
            It is an experiment in "topoanalysis", which is the "study of human
            identity as it relates to the places in people's lives". It is an
            amalgamation of some of my favorite club spaces, reconstructed from
            memory, and connected in a topologically unreal way.{" "}
            <Highlight>It is a club that is also a DOOM map.</Highlight> The
            space is recursive, preventing easy construction of a mental map of
            the environment.
          </>
        }
        roles="Art, SFX, Design, Code"
        tech="Unity, Blender, FMOD, Ableton Live"
        link="https://phasein.itch.io/cyberia"
      >
        <ImageRow images={[cyb1, cyb2]} thumbs={[cyb1, cyb2]} />

        <ImageRow images={[cyb3, cyb4]} thumbs={[cyb3, cyb4]} />

        <YoutubeVideo
          url="https://www.youtube.com/embed/6JNgkxGW4xI"
          title="CYBERIA Teaser"
        />
      </GameBlock>

      <GameBlock
        name="INFINITE SILENCE"
        description={
          <>
            Infinite Silence is an interactive EP and experiment in{" "}
            <Highlight>non-linear, player-driven music</Highlight> consisting of
            three interconnected spaces stacked vertically, with each space
            representing a track of the EP.
          </>
        }
        roles="Art, Design, Music, Code"
        tech="Unity, Blender, Ableton Live"
        link="https://phasein.itch.io/infinite-silence"
      >
        <ImageRow images={[is2, is11]} thumbs={[is2Thumb, is11Thumb]} />

        <ImageRow images={[is6, isTitle]} thumbs={[is6Thumb, isTitleThumb]} />

        <YoutubeVideo
          url="https://www.youtube.com/embed/1f68IGGgu38"
          title="Infinite Silence Gameplay"
        />
      </GameBlock>

      <GameBlock
        name="PHREAKER"
        description={
          <>
            Phreaker is a{" "}
            <Highlight>virtual reality cyberpunk grappling hook game</Highlight>{" "}
            targeting the Meta Quest 2. It is currently available as a PCVR
            demo.
          </>
        }
        roles="Art, Design, Code"
        tech="Unity, Blender, Ableton Live, Oculus Quest 2"
        link="https://phasein.itch.io/phreaker"
      >
        <ImageRow images={[ph2, ph8]} thumbs={[ph2Thumb, ph8Thumb]} />

        <ImageRow images={[ph3, ph5]} thumbs={[ph3Thumb, ph5Thumb]} />

        <ImageRow images={[ph7, phTitle]} thumbs={[ph7Thumb, phTitleThumb]} />

        <YoutubeVideo
          url="https://www.youtube.com/embed/cQt9zGCgR20"
          title="Phreaker Trailer"
        />
      </GameBlock>

      <GameBlock
        name="LIGHT MOVES"
        description={
          <>
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
          </>
        }
        roles="Design, Code"
        tech="Unity, Blender, Ableton Live, Oculus Quest 2"
      >
        <YoutubeVideo
          url="https://www.youtube.com/embed/5f8s7v2FC-s"
          title="Light Moves 1"
        />

        <ImageRow
          images={[lmCircles, lmTri]}
          thumbs={[lmCirclesThumb, lmTriThumb]}
        />

        <YoutubeVideo
          url="https://www.youtube.com/embed/Xa6xdAm_3NE"
          title="Light Moves 2"
        />
      </GameBlock>

      <GameBlock
        name="CLOCK OUT"
        description={
          <>
            Clock Out is an{" "}
            <Highlight>
              impossible, infinite office space that the player cannot escape.
              Capitalism is a Möbius strip:
            </Highlight>{" "}
            the goal is unattainable and progress is an illusion. It is a PC
            experience and is available as a demo.
          </>
        }
        roles="Art, Design, Code"
        tech="Unity"
        link="https://phasein.itch.io/clock-out"
      >
        <ImageRow images={[oh1, oh7]} thumbs={[oh1Thumb, oh7Thumb]} />

        <YoutubeVideo
          url="https://www.youtube.com/embed/8f6KJlP-cYo"
          title="Clock Out Gameplay"
        />
      </GameBlock>

      {/* DUMMY ROW TO PREVENT BOTTOM WHITESPACE */}
      <Row></Row>
    </div>
  );
};

export default Home2;
