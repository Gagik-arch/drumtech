import React, {useState} from "react";
import {Button, Icon, NavigationHeader, Screen, Text} from "../../core";
import s from "./style";
import {View} from "react-native";
import {border} from "../../resources";
import {DeleteMyAccount} from "../../modals";

export const Exercise = (props) => {

    return (
        <Screen
            style={s.container}
            header={<NavigationHeader backHandler={true} {...props} title={<Text size={'17_600'}>Eight</Text>}/>}
            footer={<View style={s.footer_container}>
                <Button style={s.footer_btn}><Icon type={'Record'} size={40}/></Button>
                <Button style={s.footer_btn}><Icon type={'Metronome'} size={40}/></Button>
                <Button style={[s.footer_btn,s.play_btn]} ><Icon type={'Play'} size={50}/></Button>
                <Button style={s.footer_btn}><Icon type={'Rapid'} size={40}/></Button>
                <Button style={s.footer_btn}><Icon type={'Stop'} size={40}/></Button>
            </View>}
        >
            <Text>Exercise</Text>
        </Screen>
    );
};

