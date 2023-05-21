import { StyleSheet } from "react-native";
import { colors } from "../../utils";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: "1%",
    margin: "1%",
    borderRadius: 25,
    borderColor: colors.primaryGray,
    borderWidth: 1.4,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: "2%",
  },
  icon: { fontSize: 20, color: colors.darkGary },
  title: { fontWeight: "500", color: colors.darkGary },
});

export default styles;
