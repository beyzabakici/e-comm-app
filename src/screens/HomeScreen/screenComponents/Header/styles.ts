import { StyleSheet } from "react-native";
import { colors, screenWidth } from "../../../../utils";

const styles = StyleSheet.create({
  container: {
    paddingBottom: "1%",
    width: screenWidth,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 4,
  },
  buttonArea: {
    marginHorizontal: "2%",
  },
});

export default styles;
