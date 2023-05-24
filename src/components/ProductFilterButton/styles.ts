import { StyleSheet } from "react-native";
import { colors, screenWidth } from "../../utils";

const styles = StyleSheet.create({
  container: {
    flex:1,
    minWidth: screenWidth * 0.2, 
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
    borderRadius: 25,
    borderColor: colors.primaryGray,
    borderWidth: 1.4,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  icon: { fontSize: 20, color: colors.darkGary },
  title: { fontWeight: "500", color: colors.darkGary },
});

export default styles;
