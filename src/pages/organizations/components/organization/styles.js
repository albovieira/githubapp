import { StyleSheet } from "react-native";
import { colors, fonts } from "styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignSelf: "flex-start",
    alignItems: "center",
    padding: 20,
    borderRadius: 3,
    shadowColor: colors.inactive,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    margin: 5,
    width: 150
  },
  avatar: {
    width: 64,
    height: 64,
    resizeMode: "contain"
  },
  title: {
    fontSize: fonts.small,
    color: colors.primary,
    fontWeight: "bold",
    marginTop: 5
  }
});

export default styles;
