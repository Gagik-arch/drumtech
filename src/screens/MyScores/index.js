import React from "react";
import { Button, NavigationHeader, PageViewer, Screen, Text } from "../../core";
import s from "../History/style";
import { Image, View } from "react-native";
import logo from "../../../assets/images/header_logo.png";
import { Colors } from "../../resources";

export const MyScores = (props) => {

  return (
    <Screen style={s.container}
            header={<NavigationHeader buttons={<View style={s.circle} />} {...props} />}>
      <Text>MyScores</Text>
    </Screen>
  );
};
