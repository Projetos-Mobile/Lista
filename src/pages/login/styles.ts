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
    titleInput:{
        paddingBottom: 10,
        marginLeft: 5,
        marginTop: 20,
        fontWeight: "bold",
        color:themes.colors.gray,
    },
    boxInput:{
        width: '100%',
        height: 40,
        borderWidth: 1, 
        borderRadius: 4,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 5,
    },
    input:{
        height: '100%',
        width: '90%',
        borderRadius: 4,
        paddingLeft: 10,
    },
    button:{
        width: '100%',
        height: 40,
        borderRadius: 4,
        backgroundColor: themes.colors.azulBebe,
        alignItems: "center",
        justifyContent: "center",
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    buttonText:{
        color: themes.colors.secondary,
        fontWeight: "bold",
        fontSize: 18,
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