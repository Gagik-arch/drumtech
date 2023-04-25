import { useState } from "react";
import { Button, Screen,  Text, Input } from "../../core";
import s from "./style";
import {Image, View} from "react-native";
import logo from "../../../assets/images/logo.png";
import {margin} from "../../resources";


export const Registration = ({ route, navigation }) => {
  const [body, setBody] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  return (
      <Screen style={s.container}>
        <View style={s.top}>
          <Image source={logo}/>
          <Text size={"24_600"} style={{...margin(24, 0)}}>Welcome to drumtech</Text>
          <View style={s.divider}/>
          <Text size={"20_500"} style={{...margin(32, 0)}}>Sign up</Text>
        </View>
        <Input placeholder={"Name"} containerStyles={s.input}/>
        <Input placeholder={"Email"} validationKey={"email"}containerStyles={s.input}/>
        <Input placeholder={"Password"} validationKey={"password"} secureTextEntry={true}containerStyles={s.input}/>
        <Input placeholder={"Repeat password"} validationKey={"password"} secureTextEntry={true}containerStyles={s.input}/>
        <Button variant={"primary"} label={"Sign Up"} style={s.submit_btn}
                onPress={() => {
                  navigation.navigate("OTPverification");
                }}/>

        <View style={s.footer_container}>
          <Text>Already have account?</Text>
          <Button label={"Sign in"} textSize={"14_400"}
                  onPress={() => {
                    navigation.navigate('Registration')
                  }}
          />
        </View>
      </Screen>
  );
};
