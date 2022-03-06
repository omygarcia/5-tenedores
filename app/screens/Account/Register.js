import React from "react";
import { StyleSheet,ScrollView, View ,Text, Image } from "react-native";
import RegisterForm from "../../components/Account/RegisterForm";

export default function Register()
{
    return (
        <ScrollView>
            <Image
                source={require("../../../assets/img/5-tenedores-letras-icono-logo.png")}
                resizeMode="contain"
                style={styles.logo}
            />
            <View style={styles.formContainer}>
                <RegisterForm />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    logo:{
        width:"100%",
        height:150,
        marginTop:20
    },
    formContainer:{
        marginLeft:40,
        marginRight:40
    }
});