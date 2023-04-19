import {StyleSheet} from "react-native";
import {Colors, padding, margin} from "../../resources";

const s = StyleSheet.create({
    top: {
        backgroundColor: Colors.yellow,
        width: '100%',
        ...padding(16),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.19,
        shadowRadius: 8.30,
        elevation: 13,
    },
    circle: {
        width: 40,
        height: 40,
        backgroundColor: Colors.blue,
        borderRadius: 50,
        ...margin(0, 0, 10, 0)
    },
    body: {
        width: '100%',
        flex: 1,
        ...padding(16),
    },
    list: {
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
    },
    title_block: {
        justifyContent: 'center',
        alignSelf: 'center',
        flex: 1
    },
    title: {
        textAlign: 'center',
        color: Colors.blue
    },
    image: {
        flex: 1,
        // ...padding(10)
    }
});

export default s;
