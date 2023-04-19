import {StyleSheet} from "react-native";
import {Colors, padding, margin} from "../../resources";

const s = StyleSheet.create({
    container: {

        flex: 1
    },
    top: {
        backgroundColor: Colors.yellow,
        ...padding(16),
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    block: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 6,
        backgroundColor: 'white',
        marginBottom: 16,
        borderRadius: 16,
        flex: 1,
        ...margin(32, 16),
        ...padding(32, 12),
    },
    line: {
        ...margin(8, 0),
        color: Colors.blue
    },
    flex: {
        flex: 1
    },
    img_container: {
        alignItems: "center",
        marginBottom:50
    }
});

export default s;
