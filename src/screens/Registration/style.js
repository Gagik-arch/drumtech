import { StyleSheet } from "react-native";
import { Colors, padding, margin } from "../../resources";

const s = StyleSheet.create({
  container: {},
  bg: {
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  logo: {
    width: 146,
    height: 52,
    marginBottom: 20,
  },
  top: {
    justifyContent: "center",
    alignItems: "center",
    ...padding(40, 0, 5, 0),
  },
  header: {
    color: Colors.yellow,
  },
  scroll: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    zIndex: 1,
    ...padding(16),
  },
  hint: {
    color: "white",
  },
  modal: {
    zIndex: 9999,
  },
  modal_btn: {
    backgroundColor: "rgba(0,0,0,0.05)",
    ...padding(6, 12),
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.04)",
  },
  show_upload_modal: {
    width: 75,
    height: 75,
    backgroundColor: "white",
    borderRadius: 50,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 26,
    height: 26,
    backgroundColor: Colors.yellow,
    position: "absolute",
    bottom: 0,
    right: 0,
    borderRadius: 50,
    padding: 6,
  },
  row: {
    display: "flex",
    flexDirection: "row",

  },
  input_container: {
    flex: 1,
    ...margin(6, 0 ,0,0)
  },
  spacer: {
    width: 40,
  },
  btn_container: {
    alignItems: "center",
  },
});

export default s;
