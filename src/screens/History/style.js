import { StyleSheet } from "react-native";
import { padding, margin, Colors } from "../../resources";

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
  row: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  row_card: {
    flexDirection: "column",
    backgroundColor: Colors.blue,
    ...padding(10),
    ...margin(3),
    borderRadius: 10,
    flex: 1,
  },
  card_text: {
    color: "white",
  },
  table: {
    width: "100%",
    height: "100%",
    paddingTop:30,
  },
  tr: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  td: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    ...padding(10),
  },
  td_text: {
    color: "#3F3F3F",
  },
});
export default s;
