import React from "react";
import {Button, Input, NavigationHeader, Screen} from "../../core";
import s from "./style";

export const ChangePassword = (props) => {

    return (
        <Screen
            style={s.container}
            header={<NavigationHeader backHandler={true} {...props} />}
            footer={<Button variant={"primary"} label={"Save"}/>}
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

