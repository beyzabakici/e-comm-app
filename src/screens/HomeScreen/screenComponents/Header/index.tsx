import React, { useState } from "react";
import { View } from "react-native";
import styles from "./styles";
import { ProductFilterButton, ProductSearch } from "../../../../components";

type Props = {
  onSearch: (...args: any[]) => void;
  categoryFilter: string;
  handleCategoryModal: (...args: any[]) => void;
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
      <View style={styles.buttonArea}>
        <ProductFilterButton
          onPress={() => handleCategoryModal()}
          filterName={categoryFilter}
          style={styles.categoryButton}
        />
        <ProductFilterButton
          filterName={rateFilter}
        />
        <ProductFilterButton
          filterName={priceFilter}
        />
      </View>
    </View>
  );
};

export default Header;
