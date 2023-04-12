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
  list: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    ...padding(14, 0),
    ...margin(10, 0, 0, 0),
  },
  text: {
    color: Colors.blue,
  },

});

export default s;
