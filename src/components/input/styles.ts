import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    boxInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 5,
    },
    input: {
        height: '100%',
        width: '90%',
        borderRadius: 4,
    },
    titleInput: {
        paddingBottom: 10,
        marginLeft: 5,
        marginTop: 20,
        fontWeight: "bold",
        color: themes.colors.gray,
    },
    Icon: {
        width:"100%"
    },
    button: {
        padding: 5,
    },
});