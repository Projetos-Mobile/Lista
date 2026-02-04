import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({ 
    button:{
        width: '100%',
        height: 40,
        borderRadius: 4,
        backgroundColor: themes.colors.azulBebe,
        alignItems: "center",
        justifyContent: "center",
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    textButton:{
        color: themes.colors.secondary,
        fontWeight: "bold",
        fontSize: 18,
    },
})