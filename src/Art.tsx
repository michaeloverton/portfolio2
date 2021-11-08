import organicLoop from "./assets/art/loop-centerlight.mp4";
import closeOrb from "./assets/art/boxbox-close.mp4";
import farOrb from "./assets/art/boxbox-far.mp4";
import pulseCubes from "./assets/art/cubic-3.mp4";
import triFlow from "./assets/art/triangleundulate.mp4";
import cubeCruise from "./assets/art/cubecruise-mp4.mp4";
import { Video, IntroText, SectionContainer } from "./TextLayout";

const Art: React.FC = () => {
  const borderWidth = "3px";

  return (
    <div>
      <IntroText>
        I love creating surreal worlds and spaces in Blender and Unity. It's
        important to take a break from reality sometimes.
      </IntroText>

      <div className="text-center">
        <SectionContainer borderWidth={borderWidth} top right bottom>
          <Video src={organicLoop} />
        </SectionContainer>

        <SectionContainer borderWidth={borderWidth} left bottom>
          <Video src={pulseCubes} />
        </SectionContainer>

        <SectionContainer borderWidth={borderWidth} right bottom>
          <Video src={farOrb} />
        </SectionContainer>

        <SectionContainer borderWidth={borderWidth} left bottom>
          <Video src={closeOrb} />
        </SectionContainer>

        <SectionContainer borderWidth={borderWidth} right bottom>
          <Video src={triFlow} />
        </SectionContainer>

        <SectionContainer borderWidth={borderWidth} left bottom>
          <Video src={cubeCruise} />
        </SectionContainer>
      </div>
    </div>
  );
};

export default Art;
