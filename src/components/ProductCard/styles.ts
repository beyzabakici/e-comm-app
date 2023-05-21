import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../../utils";

const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.46,
    height: screenHeight * 0.38,
    backgroundColor: "white",
    margin: 5,
    borderRadius: 5,
  },
  image: {
    width: "94%",
    height: "80%",
    alignSelf: "center",
    marginTop: "3%",
    borderRadius: 2,
  },
  title: { width: "96%", marginHorizontal: 5 },
  price: { fontWeight: "bold", marginHorizontal: 5 },
  descriptionArea: { justifyContent: "space-between" },
});

export default styles;
