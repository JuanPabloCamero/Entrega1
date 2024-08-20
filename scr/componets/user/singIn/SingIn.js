import React from "react";
import {View, Text, Image, Button, TextInput} from "react-native";
import loginStyles from "../../../styles/singInStyles";


const Login = ({navigation}) =>{
    return(
        <View style={loginStyles.container}>
            <Text style={loginStyles.title} >Iniciar Sesión</Text>
            <TextInput placeholder="Correo electrónico" style={loginStyles.input}/>
            <TextInput placeholder="Contraseña" secureTextEntry style={loginStyles.input}/>
            <Button title="Ingresar" onPress={() => navigation.navigate('Profile')}/>
        </View>
    );
};

export default Login;
