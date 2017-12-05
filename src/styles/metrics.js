import { Platform } from "react-native";
export default  {
  statusBarHeight: Platform.OS === "ios" ? 20 : 0,
  tabHeight: Platform.OS === "android" ? 54 : 0
};
