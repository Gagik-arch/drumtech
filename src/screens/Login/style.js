import {StyleSheet} from "react-native";
import {Colors, padding, margin} from "../../resources";

const s = StyleSheet.create({
    container: {
        ...padding(16),
    },
    logo: {
        width: 245,
        height: 86,
        ...margin(60, 0),
    },
    top: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        ...padding(40, 0, 0, 0)
    },
    submit_btn: {
        width: "100%",
        ...margin(32, 0, 24, 0),
    },
    footer_container: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
    },

    input: {
        ...margin(12, 0),
    },
    divider: {
        width: 60,
        height: 1,
        backgroundColor: Colors.blue,
    },
});

export default s;
