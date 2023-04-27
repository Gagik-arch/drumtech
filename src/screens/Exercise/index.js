import React, { useEffect, useMemo, useState } from "react";
import { Button, Icon, NavigationHeader, Screen, Text } from "../../core";
import s from "./style";
import { View } from "react-native";
import eights from "../../../assets/audio/eights.mp3";
// import accentTap from "../../../assets/audio/accent_tap.mp3";
// import doubleBeats from "../../../assets/audio/double_beat.mp3";
// import tripletDrag from "../../../assets/audio/triplet_drag.mp3";
import { Player, Recorder, MediaStates } from 'react-native-audio-toolkit';


export const Exercise = (props) => {
  const [start, setStart] = useState(false);

  const state = useMemo(() => props.route.params, []);

  const play = () => {
    const player = new Player(eights);
    player.prepare((error) => {
      if (error) {
        console.log(error);
      } else {
        player.play();
      }
    });
    setStart(!start)
    // whoosh.play()
  };
  const pause = () => {
    setStart(false)
    // whoosh.pause()
  };

  return (
    <Screen
      style={s.container}
      header={<NavigationHeader backHandler={true} {...props} title={<Text size={"17_600"}>{state?.title}</Text>} />}
      footer={<View style={s.footer_container}>
        <Button style={s.footer_btn}><Icon type={"Record"} size={40} /></Button>
        <Button style={s.footer_btn}><Icon type={"Metronome"} size={40} /></Button>
        <Button onPress={play} style={[s.footer_btn, s.play_btn]}><Icon type={start ? "Play" : 'Pause'} size={50} /></Button>
        <Button style={s.footer_btn}><Icon type={"Rapid"} size={40} /></Button>
        <Button onPress={pause} style={s.footer_btn}>{<Icon type={"Stop"} size={40} />}</Button>
      </View>}
    >
      <Text>Exercise</Text>
    </Screen>
  );
};

