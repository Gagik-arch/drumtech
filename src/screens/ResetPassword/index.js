import { useState, useRef, useCallback } from "react";
import { Button, Screen, Icon, Text, Input } from "../../core";
import logo from "../../../assets/images/logo.png";
import { Image, View } from "react-native";
import s from "./style";
import { margin } from "../../resources";

export const ResetPassword = ({ navigation }) => {

  return (
    <Screen contentContainerStyle={s.container}>
      <View style={s.top}>
        <Image source={logo} />
        <Text size={"24_600"} style={{ ...margin(24, 0) }}>Type New Password</Text>
        <View style={s.divider} />
      </View>
      <Input placeholder={"Password"}
             validationKey={"password"}
             containerStyles={s.input}
             secureTextEntry={true}
      />
      <Input placeholder={"Repeat Password"}
             validationKey={"password"}
             secureTextEntry={true}
      />
      <Button variant={"primary"}
              label={"Sign in"}
              style={s.submit_btn}
              onPress={() => {
                  navigation.navigate("Login");
              }}
      />
    </Screen>
  );
};
