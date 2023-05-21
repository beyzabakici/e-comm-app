import { StyleSheet } from "react-native";
import { colors, screenHeight, screenWidth } from "../../utils";

const styles = StyleSheet.create({
  image: {
    width: screenWidth,
    height: screenHeight * 0.7,
    alignSelf: "center",
    marginTop: "3%",
    borderRadius: 2,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: "rgba(255, 255, 255, 0.92)",
  },
  container: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
});

export default styles;
