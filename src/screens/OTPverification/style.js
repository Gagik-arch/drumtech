import { StyleSheet } from "react-native";
import { Colors, padding, margin } from "../../resources";

const s = StyleSheet.create({
  container: {
    ...padding(16),
  },
  top: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  logo: {
    ...margin(60, 0, 0, 0),
  },
  header: {
    color: Colors.blue,
  },
  input: {
    ...margin(0, 0, 12, 0),
  },
  title: {
    color: Colors.gray,
    textAlign: "center",
  },
  btn: {
    width: "100%",
    ...margin(12, 0, 0, 0),
  },
  divider: {
    width: 60,
    height: 1,
    backgroundColor: Colors.gray,
    ...margin(24, 0, 32, 0),
  },
});

export default s;
