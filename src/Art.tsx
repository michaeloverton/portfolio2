import { useEffect } from "react";
import organicLoop from "./assets/art/videos/loop-centerlight.mp4";
import closeOrb from "./assets/art/videos/boxbox-close.mp4";
import farOrb from "./assets/art/videos/boxbox-far.mp4";
import pulseCubes from "./assets/art/videos/cubic-3.mp4";
import triFlow from "./assets/art/videos/triangleundulate.mp4";
import cubeCruise from "./assets/art/videos/cubecruise-mp4.mp4";
import { Video, SectionContainer } from "./TextLayout";

const Art: React.FC = () => {
  // Scroll to top of page on component load.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* <IntroText>
        Creating surreal 3D worlds, unrestrained by reality, is extremely
        liberating.
      </IntroText> */}

      <div className="text-center">
        <SectionContainer top right bottom>
          <Video src={organicLoop} />
        </SectionContainer>

        <SectionContainer left bottom>
          <Video src={pulseCubes} />
        </SectionContainer>

        <SectionContainer right bottom>
          <Video src={farOrb} />
        </SectionContainer>

        <SectionContainer left bottom>
          <Video src={closeOrb} />
        </SectionContainer>

        <SectionContainer right bottom>
          <Video src={triFlow} />
        </SectionContainer>

        <SectionContainer left bottom>
          <Video src={cubeCruise} />
        </SectionContainer>
      </div>
    </div>
  );
};

export default Art;
