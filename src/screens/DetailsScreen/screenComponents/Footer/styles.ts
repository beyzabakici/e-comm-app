import { StyleSheet } from "react-native";
import { colors, screenHeight, screenWidth } from "../../../../utils";

const styles = StyleSheet.create({
  container: {
    paddingBottom: '2%',
    height: screenHeight * 0.10,
    width: screenWidth,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 4,
    flexDirection: "row",
    paddingHorizontal: "2%",
    paddingVertical: "5%",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.darkGary,
  },
  priceArea: {
    flexDirection: "row",
  },
  price: {
    fontSize: 16,
    color: colors.blue,
    fontWeight: "bold",
  },
  discount: {
    marginLeft: "2%",
    fontSize: 16,
    color: colors.green,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: colors.black,
    padding: "3%",
    width: "50%",
    borderRadius: 50,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "500",
  },
});

export default styles;
