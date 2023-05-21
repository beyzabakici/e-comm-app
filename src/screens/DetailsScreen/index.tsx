import React, { useContext } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import { ProductSlider, ProductVote } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { Footer } from "./screenComponents";
import { screenWidth } from "../../utils";

type Props = {
  route: any;
  navigation: any;
};

const DetailsScreen: React.FC<Props> = ({ route, navigation }) => {
  const {
    title,
    price,
    thumbnail,
    rating,
    stock,
    images,
    discountPercentage,
    description,
  } = route.params.product;
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <TouchableOpacity onPress={goBack} style={styles.iconArea}>
        <Ionicons name={"chevron-back"} style={styles.backIcon} />
      </TouchableOpacity>
      <ScrollView>
        {images ? (
         <ProductSlider images={images} />
        ) : (
          <Image style={styles.image} source={{ uri: thumbnail }} />
        )}
        <Text style={styles.title} ellipsizeMode="tail" numberOfLines={2}>
          <Text style={{ ...styles.title, ...styles.bold }}>{title}</Text>
          {description}
        </Text>
        <View style={styles.rateContainer}>
          <View style={styles.rateArea}>
            <ProductVote vote={rating} />
            <Text style={styles.rate}>{rating}</Text>
          </View>
          <View style={styles.basketArea}>
            <Ionicons name={"basket-outline"} style={styles.basketIcon} />
            <Text style={styles.rate}>{stock}</Text>
          </View>
        </View>
      </ScrollView>
      <Footer
        price={price}
        discountPercentage={discountPercentage}
        style={styles.footer}
      />
    </SafeAreaView>
  );
};

export default DetailsScreen;
