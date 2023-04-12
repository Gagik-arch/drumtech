import React from "react";
import { Button, Icon, NavigationHeader, Screen, Text } from "../../core";
import s from "./style";
import { Image, View } from "react-native";
import logo from "../../../assets/images/header_logo.png";

export const Settings = (props) => {

  return (
    <Screen
      style={s.container}
      header={<NavigationHeader {...props} title={<Image source={logo} style={s.logo} width={220} />}
                                buttons={<View style={s.circle} />}
      />}
    >
      <Button style={s.list}
      onPress={()=>{
        props.navigation.navigate('Profile')
      }}>
        <Text style={s.text} size={'16_400'}>Profile Details</Text><Icon type={"ChevronRight"}  />
      </Button>
      <Button style={s.list}
              onPress={()=>{
                props.navigation.navigate('Payment')
              }}>
        <Text style={s.text} size={'16_400'}>Payment Method</Text><Icon type={"ChevronRight"}  />
      </Button>
      <Button style={s.list}
              onPress={()=>{
                props.navigation.navigate('CurrentPackage')
              }}>
        <Text style={s.text} size={'16_400'}>Current Package</Text><Icon type={"ChevronRight"}  />
      </Button>
    </Screen>
  );
};

