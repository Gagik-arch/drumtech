import React, {useState} from "react";
import {Button, NavigationHeader, Screen} from "../../core";
import s from "./style";
import {View} from "react-native";
import {border} from "../../resources";
import {DeleteMyAccount} from "../../modals";

export const Settings = (props) => {
    const [modalVisibility, setModalVisibility] = useState(false);
    const navigateTo = (path) => props.navigation.navigate(path);

    return (
        <Screen
            style={s.container}
            header={<NavigationHeader {...props} />}
            footer={<Button variant={"secondary"} label={"Log Out"}/>}
        >
            <View style={s.block}>
                <Button label={"My Details"} style={s.btn} onPress={() => navigateTo("My Details")}/>
                <Button label={"Change Password"}
                        onPress={() => navigateTo("Change Password")}
                        style={[s.btn, {...border(1, 0, 1, 0), borderColor: "rgba(17, 17, 17, 0.5)"}]}
                />
                <Button label={"Delete Account"}
                        style={s.btn}
                        onPress={() => setModalVisibility(true)}
                />
            </View>
            <DeleteMyAccount modalVisibility={modalVisibility} setModalVisibility={setModalVisibility}/>
        </Screen>
    );
};

