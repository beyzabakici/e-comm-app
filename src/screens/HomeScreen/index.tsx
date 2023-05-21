import React, { useContext } from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import { ProductContext } from "../../context";
import { ProductCard } from "../../components";
import styles from "./styles";
import { Header } from "./screenComponents";

const HomeScreen: React.FC = () => {
  const { products } = useContext(ProductContext);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={products}
        keyExtractor={(item ) => `product-${item.id}`}
        renderItem={({ item }) => <ProductCard product={item} />}
        numColumns={2}
        horizontal={false}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
