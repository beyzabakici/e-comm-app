import React from "react";
import { View, Text, ViewStyle, Button, TouchableOpacity } from "react-native";
import styles from "./styles";

type Props = {
  style: ViewStyle;
  price: number;
  discountPercentage: number;
};

const Footer: React.FC<Props> = ({ style, price, discountPercentage }) => {
  return (
    <View style={{ ...style, ...styles.container }}>
      <View>
        <Text style={styles.title}>Ürünün Fiyatı</Text>
        <View style={styles.priceArea}>
          <Text style={styles.price}>{price} TL</Text>
          <Text style={styles.discount}>-%{discountPercentage}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sepete Ekle</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
