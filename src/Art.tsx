import { useEffect } from "react";
import organicLoop from "./assets/art/loop-centerlight.mp4";
import closeOrb from "./assets/art/boxbox-close.mp4";
import farOrb from "./assets/art/boxbox-far.mp4";
import pulseCubes from "./assets/art/cubic-3.mp4";
import triFlow from "./assets/art/triangleundulate.mp4";
import cubeCruise from "./assets/art/cubecruise-mp4.mp4";
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
