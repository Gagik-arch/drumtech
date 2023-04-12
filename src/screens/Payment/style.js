import { StyleSheet } from "react-native";
import { padding, margin } from "../../resources";

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
  },
  input: {
    flex: 1,
  },
  btn_container: {
    marginTop: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  header_title: {
    textAlign:'center',
    color: "#D4D1D1",
  },
  header_price: {
    textAlign:'center',
    color: "white",
  },
});

export default s;
