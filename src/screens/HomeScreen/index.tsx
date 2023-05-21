import React, { useContext } from "react";
import { FlatList, SafeAreaView, StatusBar, Text } from "react-native";
import { ProductContext } from "../../context";
import { ProductCard } from "../../components";
import styles from "./styles";
import { Header } from "./screenComponents";

type Props = {
  navigation: any;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { products } = useContext(ProductContext);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <FlatList
        data={products}
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
