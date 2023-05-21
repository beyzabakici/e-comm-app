import React, { useContext, useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, Text } from "react-native";
import { ProductContext } from "../../context";
import { ProductCard } from "../../components";
import styles from "./styles";
import { FilterModal, Header } from "./screenComponents";
import { Product } from "../../utils";
import {
  searchProducts as searchProductsService,
  searchProductsWithCategory as searchProductsWithCategoryService,
} from "../../services";

type Props = {
  navigation: any;
  x;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { products, categories } = useContext(ProductContext);
  const [data, setData] = useState<Product[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string>("Kategori");
  const [rateFilter, setRateFilter] = useState<string>("Değerlendirme");
  const [priceFilter, setPriceFilter] = useState<string>("Fiyat");
  const [isVisibleCategoryModal, setVisibleCategoryModal] =
    useState<boolean>(false);

  const searchProducts = (query) =>
    searchProductsService(query).then((resp) => setData(resp.data.products));

  const handleCategoryModal = () => {
    setVisibleCategoryModal(!isVisibleCategoryModal);
  };

  const searchProductsWithCategory = (category: string) => {
    setVisibleCategoryModal(false);
    setCategoryFilter(category);
    searchProductsWithCategoryService(category).then((resp) =>
      setData(resp.data.products)
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header
        onSearch={searchProducts}
        categoryFilter={categoryFilter}
        handleCategoryModal={handleCategoryModal}
        rateFilter={rateFilter}
        priceFilter={priceFilter}
      />
      <FlatList
        data={data.length ? data : products}
        keyExtractor={(item) => `product-${item.id}`}
        renderItem={({ item }) => (
          <ProductCard navigation={navigation} product={item} />
        )}
        numColumns={2}
        horizontal={false}
      />
      <FilterModal
        isVisible={isVisibleCategoryModal}
        setVisible={setVisibleCategoryModal}
        options={categories}
        selectedOption={categoryFilter}
        setSelectedOption={(selectedCategory) =>
          searchProductsWithCategory(selectedCategory)
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
