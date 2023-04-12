import React from "react";
import { Button, NavigationHeader, PageViewer, Screen, Text } from "../../core";
import s from "../History/style";
import { Image, View } from "react-native";
import logo from "../../../assets/images/header_logo.png";
import { Colors } from "../../resources";

export const Statistics = (props) => {
r
  return (
    <Screen style={s.container}
            header={<NavigationHeader {...props} title={<Image source={logo} style={s.logo} width={220} />}
                                      buttons={<View style={s.circle} />}/>
            }>
      <View style={{ height: "100%", width: "100%" }}>
      </View>
    </Screen>
  );
};
