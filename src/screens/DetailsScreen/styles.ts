import { StyleSheet } from "react-native";
import { colors, screenHeight, screenWidth } from "../../utils";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", position: "relative" },
  image: {
    width: screenWidth,
    height: screenHeight * 0.7,
    alignSelf: "center",
    marginTop: "3%",
    borderRadius: 2,
  },
  title: { marginHorizontal: 5, fontSize: 16 },
  bold: { fontWeight: "bold" },
  price: { fontWeight: "bold", marginHorizontal: 5 },
  backIcon: {
    color: colors.primaryGray,
    fontSize: 30,
  },
  iconArea: {
    position: "absolute",
    marginTop: "20%",
    flex: 1,
    zIndex: 1000,
  },
  rateArea: {
    flexDirection: "row",
    alignItems: "center",
    borderRightColor: colors.primaryGray,
    borderRightWidth: 2,
  },
  rate: {
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  basketIcon: {
    color: colors.darkGary,
    fontSize: 18,
  },
  rateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "2%",
  },
  basketArea: {
    marginLeft: "2%",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  footer: { position: "absolute", bottom: 0 },
});

export default styles;
