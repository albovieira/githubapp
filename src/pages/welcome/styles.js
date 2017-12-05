import { StyleSheet } from "react-native";
import { colors, fonts } from "styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40
  },
  welcomeTitle: {
      fontSize: fonts.big,
      color: colors.white,
      fontWeight: 'bold'
  },
  welcomeDescription: {
      fontSize: fonts.regular,
      marginTop: 10,
      color: colors.white,
      textAlign: 'center',
      lineHeight: 21
  },
  input: {
      backgroundColor: colors.white,
      alignSelf: 'stretch',
      borderRadius: 3,
      marginTop: 10,
      fontSize: fonts.small,
      paddingHorizontal: 20,
  },
  button: {
      backgroundColor: colors.secondary,
      alignSelf: 'stretch',
      borderRadius: 3,
      marginTop:10,
      alignItems: 'center',
      justifyContent: 'center',
      height: 44
  },
  buttonText: {
      fontSize: fonts.small,
      color: colors.white,
      fontWeight: 'bold',
  },
  error: {
      color: colors.error,
      fontSize: fonts.small,
      marginTop:10
  }
});

export default styles;
