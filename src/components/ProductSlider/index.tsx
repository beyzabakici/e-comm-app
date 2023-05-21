import React, { useEffect, useState } from "react";
import { screenWidth } from "../../utils";
import { Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import styles from "./styles";

type Props = {
  images: string[];
};

const ProductSlider: React.FC<Props> = ({ images }) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  return (
    <Carousel
      layout={"default"}
      data={images}
      renderItem={({ item }) => (
        <Image style={styles.image} source={{ uri: item }} />
      )}
      sliderWidth={screenWidth}
      itemWidth={screenWidth}
      dotsLength={20}
      activeDotIndex={activeSlide}
      onSnapToItem={(index) => setActiveSlide(index)}
      containerStyle={styles.container}
      dotStyle={styles.dot}
      inactiveDotStyle={
        {
          // Define styles for inactive dots here
        }
      }
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
  );
};

export default ProductSlider;
