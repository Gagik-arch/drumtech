import { StyleSheet } from "react-native";
import { Colors, padding, margin, border } from "../../resources";

const s = StyleSheet.create({
  container: {
    ...padding(32, 16),
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  block: {
    backgroundColor: "rgba(242, 242, 242, 0.8)",
    borderRadius: 14,
    ...padding(16, 16, 0, 16),
  },
  subtitle: {
    textAlign: "center",
    ...margin(2, 0, 16, 0),
  },
  input: {
    ...padding(4, 8),
    ...margin(16, 0, 0, 0),
  },
  i: {
    ...padding(0),
  },
  btn_container: {
    flexDirection: "row",
    ...margin(16, 0, 0, 0),
    ...border(1, 0, 0, 0),
    borderColor: "rgba(0, 0, 0, 0.15)",
  },
  btn: {
    flex: 1,
    ...padding(10),
  },
  delete_btn: {
    borderColor: "rgba(0, 0, 0, 0.15)",
    ...border(0, 0, 0, 1),
    color: Colors.red,
  },
});

export default s;
