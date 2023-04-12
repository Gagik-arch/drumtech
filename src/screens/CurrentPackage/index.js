import React, { useState } from "react";
import { Image, View } from "react-native";
import { Input, NavigationHeader, Screen ,Text} from "../../core";
import logo from "../../../assets/images/header_logo.png";
import s from "./style";
import { Colors, margin } from "../../resources";

export const CurrentPackage = (props) => {

  return (
    <Screen
      style={s.container}
      header={<NavigationHeader {...props} title={<Image source={logo} style={s.logo} width={220} />}
                                buttons={<View style={s.circle} />}
      />
      }
    >
      <Text>CurrentPackage</Text>
    </Screen>
  );
};
