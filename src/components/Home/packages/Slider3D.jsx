import Image from "next/image";
import styles from "./Slider3D.module.css";
import {
  HomePkgsBox,
  HomePkgsInBox,
  SliderContainer,
  Slider,
  SliderItem,
} from "../../mui/HomePkgs";

const Slider3D = () => {
  return (
    <SliderContainer>
      <Slider sx={{ "--quantity": 6 }}>
        <SliderItem sx={{ "--position": 1 }}>
          <Image
            src="/images/dragon_1.jpg"
            alt="img"
            width={400}
            height={600}
          />
        </SliderItem>
        <SliderItem sx={{ "--position": 2 }}>
          <Image
            src="/images/dragon_2.jpg"
            alt="img"
            width={400}
            height={600}
          />
        </SliderItem>
        <SliderItem sx={{ "--position": 3 }}>
          <Image
            src="/images/dragon_3.jpg"
            alt="img"
            width={400}
            height={600}
          />
        </SliderItem>
        <SliderItem sx={{ "--position": 4 }}>
          <Image
            src="/images/dragon_4.jpg"
            alt="img"
            width={400}
            height={600}
          />
        </SliderItem>
        <SliderItem sx={{ "--position": 5 }}>
          <Image
            src="/images/dragon_5.jpg"
            alt="img"
            width={400}
            height={600}
          />
        </SliderItem>
        <SliderItem sx={{ "--position": 6 }}>
          <Image
            src="/images/dragon_6.jpg"
            alt="img"
            width={400}
            height={600}
          />
        </SliderItem>
      </Slider>
    </SliderContainer>
  );
};

export default Slider3D;
