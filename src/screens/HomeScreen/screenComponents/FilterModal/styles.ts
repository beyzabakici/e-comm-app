import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors, screenHeight, screenWidth } from "../../../../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  innerContainer: {
    backgroundColor: Colors.white,
    width: screenWidth,
    height: screenHeight * 0.8,
    alignItems: 'flex-start',
    paddingHorizontal: '1%'
  },
  backIcon: {
    color: colors.darkGary,
    fontSize: 20,
  },
  iconArea: {
    marginTop: "2%",
    flex: 1,
    zIndex: 1000,
  },
  selectItem: {
    fontSize: 16,
    color:  colors.darkGary,
  },
  selectItemText: {
    fontSize: 16,
    fontWeight: '600',
    color:  colors.darkGary,
  },
  selectItemArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '1%',
    paddingHorizontal: '3%'
  }
});

export default styles;
