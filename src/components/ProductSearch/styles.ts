import { StyleSheet } from "react-native";
import { colors } from "../../utils";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.grayShadow,
    marginHorizontal: '3%',
    marginVertical: '2%',
    padding: '2%',
    borderRadius: 25,
  },
  icon: {color: colors.blue, fontSize: 16, marginRight: '2%'},
  input: { fontSize: 14, fontWeight: '600'},
});

export default styles;
