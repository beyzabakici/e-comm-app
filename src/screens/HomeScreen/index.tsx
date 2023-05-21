import React, { useContext, useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, Text } from "react-native";
import { ProductContext } from "../../context";
import { ProductCard } from "../../components";
import styles from "./styles";
import { Header } from "./screenComponents";
import { Product } from "../../utils";
import { searchProducts as searchProductsService } from "../../services";

type Props = {
  navigation: any;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { products } = useContext(ProductContext);
  const [data, setData] = useState<Product[]>([]);

  const searchProducts = (query) =>
    searchProductsService(query).then((resp) => setData(resp.data.products));

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header onSearch={searchProducts} />
      <FlatList
        data={data.length ? data : products}
        keyExtractor={(item) => `product-${item.id}`}
        renderItem={({ item }) => (
          <ProductCard navigation={navigation} product={item} />
        )}
        numColumns={2}
        horizontal={false}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
