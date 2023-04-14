import React from "react";
import { Button, Icon, NavigationHeader, Screen, Text } from "../../core";
import s from "./style";
import { Image, View } from "react-native";
import logo from "../../../assets/images/header_logo.png";

export const Settings = (props) => {

  return (
    <Screen
      style={s.container}
      header={<NavigationHeader {...props} title={<Text></Text>}

      />}
    >
     <Text>Settings</Text>
    </Screen>
  );
};

