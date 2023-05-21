import React from "react";
import { Text, TouchableOpacity, ViewStyle } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  filterName: string;
  onPress?: (...args: any[]) => void;
  style?: ViewStyle;
};

const ProductFilterButton: React.FC<Props> = ({
  filterName,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity
      style={{ ...style, ...styles.container }}
      onPress={onPress}
      disabled={!onPress}
    >
      <Text style={styles.title}>{filterName}</Text>
      <Ionicons name={"chevron-down"} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default ProductFilterButton;
