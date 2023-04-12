import { StyleSheet } from "react-native";
import { Colors, padding, margin } from "../../resources";

const s = StyleSheet.create({
  container: {
    ...padding(32, 16),
  },
  logo: {
    ...margin(40, 0),
  },
  circle: {
    width: 40,
    height: 40,
    backgroundColor: "#A7B6D6",
    borderRadius: 50,
  },
  title: {
    color: Colors.yellow,
    textAlign: "center",
    width: "100%",
  },
  subtitle: {
    color: Colors.darkGray,
    textAlign: "center",
  },
  card_container: {
    flexDirection: "row",
    justifyContent: "center",
    ...margin(32, 0, 0, 0),
    width: "100%",
  },
  card: {
    flexDirection: "column",
    ...padding(8, 4),
    ...margin(6),
    borderWidth: 2,
  },
  text: {
    color: "white",
  },
  submit_btn: {
    ...margin(30, 0),
  },
  no_thanks_btn: {
    color: Colors.gray,
  },
  btn_container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

export default s;
