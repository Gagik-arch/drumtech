import React, { useEffect, useMemo } from "react";
import { Button, Icon, NavigationHeader, Screen, Text } from "../../core";
import s from "./style";
import { View } from "react-native";
import eights from "../../../assets/audio/eights.mp3";
// import accentTap from "../../../assets/audio/accent_tap.mp3";
// import doubleBeats from "../../../assets/audio/double_beat.mp3";
// import tripletDrag from "../../../assets/audio/triplet_drag.mp3";

export const Exercise = (props) => {

  const state = useMemo(() => {
    return props.route.params;
  }, []);


const play = ()=>{
  // whoosh.play()
}
const pause = ()=>{
  // whoosh.pause()
}

  return (
    <Screen
      style={s.container}
      header={<NavigationHeader backHandler={true} {...props} title={<Text size={"17_600"}>{state?.title}</Text>} />}
      footer={<View style={s.footer_container}>
        <Button style={s.footer_btn}><Icon type={"Record"} size={40} /></Button>
        <Button style={s.footer_btn}><Icon type={"Metronome"} size={40} /></Button>
        <Button onPress={play} style={[s.footer_btn, s.play_btn]}><Icon type={"Play"} size={50} /></Button>
        <Button style={s.footer_btn}><Icon type={"Rapid"} size={40} /></Button>
        <Button onPress={pause} style={s.footer_btn}><Icon type={"Stop"} size={40} /></Button>
      </View>}
    >

      <Text>Exercise</Text>

    </Screen>
  );
};

