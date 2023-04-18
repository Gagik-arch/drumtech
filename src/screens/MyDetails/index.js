import React from "react";
import { Button,  Input, NavigationHeader, Screen } from "../../core";
import s from "./style";

export const MyDetails = (props) => {

  return (
    <Screen
      style={s.container}
      header={<NavigationHeader backHandler={true} {...props} />}
      footer={<Button variant={"primary"} label={"Save"} />}
    >
      <Input placeholder={"Name"} containerStyles={s.input} />
      <Input placeholder={"Surname"} />
    </Screen>
  );
};

