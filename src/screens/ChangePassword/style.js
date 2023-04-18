import { StyleSheet } from "react-native";
import { Colors, padding, margin } from "../../resources";

const s = StyleSheet.create({
  container: {
    ...padding(32, 16),
  },
  block: {
    width:'100%',
    borderRadius:13,
    overflow:'hidden'
  },
  btn:{
    justifyContent:'flex-start',
    backgroundColor:'rgba(245, 245, 245, 0.6)',
    ...padding(16)
  },
  input:{
    ...margin(50,0,24,0)
  }
});

export default s;
