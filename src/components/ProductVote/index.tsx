import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  vote: number;
  fullVote?: number;
};

const ProductVote: React.FC<Props> = ({ vote, fullVote = 5 }) => {
  const renderStars = () => {
    const stars = [];
    const ratio = fullVote / vote; 

    for (let i = 0; i < fullVote; i++) {
      stars.push(
        <Ionicons
          key={i}
          name={i < ratio ? "star" : "star-outline"}
          style={styles.starIcon}
        />
      );
    }
    return stars;
  };

  return <View style={styles.container}>{renderStars()}</View>;
};

export default ProductVote;
