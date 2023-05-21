import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { ProductSearch } from "../../../../components";

type Props = {};

const Header: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <ProductSearch onSearch={(searchText) => console.log(searchText)} />
    </View>
  );
};

export default Header;
