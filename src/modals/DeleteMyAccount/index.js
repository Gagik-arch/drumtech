import React, { useState } from "react";
import { Button, Icon, Input, NavigationHeader, Screen, Text } from "../../core";
import s from "./style";
import { Image, Modal, View } from "react-native";
import logo from "../../../assets/images/header_logo.png";
import { border, borderColor } from "../../resources";

export const DeleteMyAccount = ({ modalVisibility,setModalVisibility }) => {

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisibility}>
      <View style={s.container}>
        <View style={s.block}>
          <Text size={"17_600"} style={{ textAlign: "center" }}>Delete my account</Text>
          <Text size={"13_400"} style={s.subtitle}>For deleting your account please type your password</Text>
          <Input placeholder={"Password"} containerStyles={s.input} inputStyles={s.i} />
          <View style={s.btn_container}>
            <Button label={"Cancel"}
                    textSize={"17_400"}
                    style={[s.btn]}
                    onPress={()=>setModalVisibility(false)}
            />
            <Button label={"Delete"}
                    textSize={"17_600"}
                    style={[s.btn]}
                    textStyle={s.delete_btn}
            />
          </View>
        </View>

      </View>
    </Modal>
  );
};

