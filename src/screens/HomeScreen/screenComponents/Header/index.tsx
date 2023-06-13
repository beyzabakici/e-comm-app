import React from "react";
import { ScrollView, View } from "react-native";
import styles from "./styles";
import { ProductFilterButton, ProductSearch } from "../../../../components";

type Props = {
  onSearch: (string) => void;
  categoryFilter: string;
  handleCategoryModal: () => void;
  rateFilter: string;
  priceFilter: string;
};

const Header: React.FC<Props> = ({
  onSearch,
  categoryFilter,
  handleCategoryModal,
  rateFilter,
  priceFilter,
}) => {
  return (
    <View style={styles.container}>
      <ProductSearch onSearch={onSearch} />
      <ScrollView horizontal>
        <ProductFilterButton
          onPress={() => handleCategoryModal()}
          filterName={categoryFilter ?? "Kategori"}
        />
        <ProductFilterButton filterName={priceFilter} />
        <ProductFilterButton filterName={rateFilter} />
      </ScrollView>
    </View>
  );
};

export default Header;
