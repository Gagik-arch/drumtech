import React, { useState } from "react";
import { Image, StatusBar, View } from "react-native";
import { Button, Icon, NavigationHeader, Screen, Text } from "../../core";
import logo from "../../../assets/images/header_logo.png";
import s from "./style";
import { Colors, margin } from "../../resources";

export const Music = (props) => {

  return (
    <Screen >
      <StatusBar backgroundColor={Colors.yellow} barStyle="light-content" />
      <View style={[s.top]}>
        <Button style={s.circle}><Icon type={"User"} /></Button>
        <Text size={"18_400"}>Hello, Name Surname</Text>
      </View>
      <View style={s.body}>
        <Text size={"24_600"} >Select Exercise</Text>
      </View>
    </Screen>
  );
};
