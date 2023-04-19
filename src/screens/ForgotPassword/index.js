import { useState, useRef, useCallback } from "react";
import { Button, Screen, Icon, Text, Input } from "../../core";
import logo from "../../../assets/images/logo.png";
import { Image, View } from "react-native";
import s from "./style";
import { margin } from "../../resources";

export const ForgotPassword = ({ navigation }) => {

  return (
    <Screen contentContainerStyle={s.container}>
      <View style={s.top}>
        <Image source={logo} />
        <Text size={"24_600"} style={{ ...margin(24, 0) }}>Forgot your password?</Text>
        <View style={s.divider} />
        <Text size={"16_400"} style={{ ...margin(32, 0), textAlign: "center" }}>
          Enter your email address and we will send you a code to reset your password.
        </Text>
      </View>
      <Input placeholder={"Email"} validationKey={"email"} />
      <Button variant={"primary"}
              label={"Next"}
              style={s.submit_btn}
              onPress={() => {
                  navigation.navigate("ResetPassword");
              }}
      />
    </Screen>
  );
};
