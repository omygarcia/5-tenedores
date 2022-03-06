import React from "react";
import { StyleSheet, ScrollView ,View, Text } from "react-native";
import { Input, Image, Button } from "react-native-elements";

export default function RegisterForm()
{
    return (
        <ScrollView style={styles.formRegister}>
            <Input
                placeholder="Correo Electronico"
                containerStyle={styles.inputForm}
            />
            <Input
                placeholder="Contraseña"
                containerStyle={styles.inputForm}
                secureTextEntry={true}
            />
            <Input
                placeholder="Repetir contraseña"
                containerStyle={styles.inputForm}
                secureTextEntry={true}
            />
            <Button
               title={"Unirse"}
               buttonStyle={styles.btnRegistro}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    formRegister:{
        /*flex:1,
        alignItems:"center",
        justifyContent:"center",*/
        marginTop:30
    },
    inputForm:{
        width:"100%",
        marginTop:20
    },
    btnRegistro:{
        marginTop:20,
        width:"95%",
        backgroundColor:"#00a680"
    }
});