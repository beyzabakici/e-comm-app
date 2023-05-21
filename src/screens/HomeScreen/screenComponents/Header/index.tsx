import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { ProductSearch } from "../../../../components";

type Props = {
  onSearch: (...args: any[]) => void;
};

const Header: React.FC<Props> = ({onSearch}) => {
  return (
    <View style={styles.container}>
      <ProductSearch onSearch={onSearch} />
    </View>
  );
};

export default Header;
