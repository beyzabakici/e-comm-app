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
    const ratio = fullVote / vote;

    return Array(fullVote)
      .fill(null)
      .map((_, i) => (
        <Ionicons
          key={i}
          name={i < ratio ? "star" : "star-outline"}
          style={styles.starIcon}
        />
      ));
  };

  return <View style={styles.container}>{renderStars()}</View>;
};

export default ProductVote;
