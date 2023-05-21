import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Product } from "../../utils";
import styles from "./styles";
import ProductVote from "../ProductVote";

type Props = {
  product: Product;
  navigation: any;
};

const ProductCard: React.FC<Props> = ({ product, navigation }) => {
  const { title, price, thumbnail, rating } = product;

  const goToDetails = () => {
    navigation.navigate("Details", { product: product });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={goToDetails}>
      <Image style={styles.image} source={{ uri: thumbnail }} />
      <View style={styles.descriptionArea}>
        <Text style={styles.price}>{price} TL</Text>
        <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
          {title}
        </Text>
        <ProductVote vote={rating} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
