import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    boxTop: {
        height:Dimensions.get('window').height / 3,
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
    },
    boxMiddle: {
        height:Dimensions.get('window').height / 4,
        width: '100%',
        paddingHorizontal: 37,  
    },
    boxBottom: {
        height:Dimensions.get('window').height / 3,
        width: '100%',
        paddingHorizontal: 37,  
    },
    imagem: {
        width: 400,
        height: 160,
    },
    text:{
        fontWeight: "bold",
        fontSize: 25,
    },
    esqueceu:{
        fontSize: 16,
        marginTop: 15,
        fontWeight: "bold",
        color: themes.colors.azulBebe,
        textAlign: "center",
    },
    crie:{
        fontSize: 16,
        marginBottom: 25,
        fontWeight: "bold",
        color: themes.colors.azulBebe,
        textAlign: "center",
    },
    crieLink:{
        textDecorationLine: "underline",
    }
})