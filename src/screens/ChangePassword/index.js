import React from "react";
import { Button, Icon, Input, NavigationHeader, Screen, Text } from "../../core";
import s from "./style";
import { Image, View } from "react-native";
import logo from "../../../assets/images/header_logo.png";
import { border, borderColor } from "../../resources";

export const ChangePassword = (props) => {

  return (
    <Screen
      style={s.container}
      header={<NavigationHeader backHandler={true} {...props} />}
      footer={<Button variant={"primary"} label={"Save"} />}

    >
      <Input placeholder={"Type your old password"}
             secureTextEntry={true}
             containerStyles={s.input}
      />
      <Input placeholder={"Type new passwod"}
             secureTextEntry={true}
      />
    </Screen>
  );
};

