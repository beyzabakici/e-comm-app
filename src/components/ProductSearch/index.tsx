import React, { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  onSearch: (searchText: string) => void;
};

const ProductSearch: React.FC<Props> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchText);
    }, 2000);

    return () => clearTimeout(timer);
  }, [searchText]);

  return (
    <View style={styles.container}>
      <Ionicons name="search" style={styles.icon} />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
        placeholder="Dilediğini ara"
      />
    </View>
  );
};

export default ProductSearch;
