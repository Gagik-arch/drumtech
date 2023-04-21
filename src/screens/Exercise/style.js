import { StyleSheet } from "react-native";
import { Colors, padding, margin, border } from "../../resources";

const s = StyleSheet.create({
    container: {
        ...padding( 16),
    },
    footer_container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    footer_btn:{
        borderRadius:100,
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 6,
        marginBottom: 16,
        justifyContent:"center",
        alignItems:'center',
        width:50,
        height:50,
    },
    play_btn:{
        width:70,
        height:70,
    }
});

export default s;
