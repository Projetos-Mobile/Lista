import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator  } from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import { style } from "./styles";
import Logo from "../../assets/nike.png";
import { themes } from "../../global/themes";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
                <Text style={style.titleInput}>ENDEREÇO DE E-MAIL</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Digite seu e-mail"

                    />
                    <MaterialIcons 
                    name="email" 
                    size={30}
                    color={themes.colors.gray}
                    />
                </View>
            
                <Text style={style.titleInput}>SENHA</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Digite sua senha"
                    />
                    <MaterialIcons 
                    name="lock" 
                    size={30} 
                    color={themes.colors.gray}
                    />
                </View>
            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={()=>getLogin()}>
                    {
                    loading ? 
                    <ActivityIndicator color={"white"} size={"small"}/>
                    :
                    <Text style={style.buttonText}>Entrar</Text> 
                    }
                            
                </TouchableOpacity>
                <Text style={style.esqueceu}>Esqueceu sua senha?</Text>
            </View>
            <Text style={style.crie}>Não tem uma conta? <Text style={style.crieLink}>Crie agora!</Text></Text>
        </View>
    );
}