import {useState, useRef, useCallback} from "react";
import {Button, Screen, Icon, Text, Input} from "../../core";
import logo from "../../../assets/images/logo.png";
import {Image, View} from "react-native";
import s from "./style";
import {margin} from "../../resources";

export const Login = ({navigation}) => {

    return (
        <Screen contentContainerStyle={s.container}>
            <View style={s.top}>
                <Image source={logo}/>
                <Text size={"24_600"} style={{...margin(24, 0)}}>Welcome to drumtech</Text>
                <View style={s.divider}/>
                <Text size={"20_500"} style={{...margin(32, 0)}}>Sign in</Text>
            </View>

            <Input placeholder={"Email"} validationKey={"email"}/>
            <Input placeholder={"Password"} validationKey={"password"} secureTextEntry={true}
                   containerStyles={s.input}/>

            <Button label={"Forgot password ?"}
                    textSize={"14_400"}
                    onPress={() => {
                        navigation.navigate("ForgotPassword");
                    }}
            />
            <Button variant={"primary"} label={"Sign in"} style={s.submit_btn}
                    onPress={() => {
                        navigation.navigate("OTPverification");
                    }}/>

            <View style={s.footer_container}>
                <Text> Don’t have an account ?</Text>
                <Button label={" Sign up now"} textSize={"14_400"}/>
            </View>
        </Screen>
    );
};
