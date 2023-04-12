import { StyleSheet } from "react-native";
import { Colors, padding, margin } from "../../resources";

const s = StyleSheet.create({
  container: {
    ...padding(16),
  },
  bg: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent:'space-evenly'
  },
  logo: {
    width: 245,
    height: 86,
    ...margin(60, 0),
  },
  header: {
    color: "white",
  },
  resend_btn: {
    color: Colors.yellow,
  },
  title: {
    color: Colors.gray,
    textAlign: "center",
    maxWidth: 190,
    lineHeight: 17
  },
});

export default s;
