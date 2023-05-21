import React from "react";
import { View, Text, Image } from "react-native";
import { Product } from "../../utils";
import styles from "./styles";
import ProductVote from "../ProductVote";

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const { title, price, thumbnail, rating } = product;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: thumbnail }} />
      <View style={styles.descriptionArea}>
      <Text style={styles.price}>{price} TL</Text>
      <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>{title}</Text>
      <ProductVote vote={rating} />
      </View>
    </View>
  );
};

export default ProductCard;
