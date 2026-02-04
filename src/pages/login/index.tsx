import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator  } from "react-native";
import { style } from "./styles";
import Logo from "../../assets/nike.png";
import { themes } from "../../global/themes";
import { Input } from "../../components/input";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { Button } from "../../components/button";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false);


    async function getLogin(){
        try{
            setLoading(true);


            if(!email || !password ){
                return Alert.alert("Atenção","Preencha todos os campos!");
            }

            setTimeout(()=>{
                if(email == 'mu@gmail.com' && password == '123456'){
                    Alert.alert("Logado com sucesso!"); 
                }else(
                    Alert.alert("Erro","Email ou senha incorretos!")
                )
                setLoading(false);
            },3000);

            

        }catch(error){
            console.log(error);
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image 
                source={Logo} 
                style={style.imagem} 
                resizeMode="contain"
                />
                <Text style={style.text}>Seja Bem-Vindo à Nike!</Text>
            </View>
            <View style={style.boxMiddle}>
                <Input
                    value={email}
                    onChangeText={setEmail}
                    title="ENDEREÇO DE E-MAIL"
                    IconRight={MaterialIcons}
                    IconRightName="email"
                />

                <Input
                    value={password}
                    onChangeText={setPassword}
                    title="SENHA"
                    IconRight={Octicons}
                    IconRightName={showPassword ?"eye-closed":"eye"}
                    secureTextEntry={showPassword}
                    onIconRightPress={() => setShowPassword(!showPassword)}
                />
                
            </View>
            <View style={style.boxBottom}>
                <Button text="ENTRAR" loading={loading} onPress={getLogin}/>
                <Text style={style.esqueceu}>Esqueceu sua senha?</Text>
            </View>
            <Text style={style.crie}>Não tem uma conta? <Text style={style.crieLink}>Crie agora!</Text></Text>
        </View>
    );
}