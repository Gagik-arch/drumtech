import React, { useState } from "react";
import { Image, View } from "react-native";
import { Button, Input, NavigationHeader, Screen, Text } from "../../core";
import logo from "../../../assets/images/header_logo.png";
import s from "./style";
import { Colors, margin } from "../../resources";


export const Payment = (props) => {

  return (
    <Screen
      style={s.container}
      header={<NavigationHeader {...props}
                                title={
        <View>
          <Image source={logo} style={s.logo} width={220} />
          <Text size={'14_600'} style={s.header_title}>Pay FlylincAd</Text>
          <Text size={'32_700'} style={s.header_price}>$ -36.9</Text>
        </View>
                                }
                                buttons={<View style={s.circle} />}
      />
      }
    >
      <Input placeholder={"Email"} />
      <Input placeholder={"Name On Card"} />
      <Input placeholder={"Card Number"} />
      <View style={s.row}>
        <Input placeholder={"Expiration Date"} containerStyles={s.input} />
        <Input placeholder={"CVV"} containerStyles={[s.input, { marginLeft: 40 }]} />
      </View>
      <Input placeholder={"Country"} />

      <View style={s.btn_container}>
        <Button label={"Pay"} variant={"primary"}  />
      </View>
    </Screen>
  );
};
