import React, { useEffect, useState } from "react";
import { Image, StatusBar, View } from "react-native";
import { Button, Icon, Screen, Text } from "../../core";
import s from "./style";
import { Colors } from "../../resources";
import eights from "../../../assets/images/eights.png";
import accentTap from "../../../assets/images/accent_tap.png";
import doubleBeats from "../../../assets/images/double_beats.png";
import tripletDrag from "../../../assets/images/triplet_drag.png";
import { ExerciseModal } from "../../modals";


export const Music = (props) => {
  const [modalVisibility, setModalVisibility] = useState('');

  useEffect(()=>{
  },[])

  const onPressList = (type) => {
    setModalVisibility(type);
  };

  return (
    <Screen>
      <StatusBar backgroundColor={Colors.yellow} barStyle="light-content" />
      <View style={[s.top]}>
        <Button style={s.circle}><Icon type={"User"} /></Button>
        <Text size={"18_400"}>Hello, Name Surname</Text>
      </View>
      <View style={s.body}>
        <Text size={"24_600"}>Select Exercise</Text>
        {renderBlock({ onPress: onPressList, img: eights, title: "Eights" })}
        {renderBlock({ onPress: onPressList, img: accentTap, title: "Accent Tap" })}
        {renderBlock({ onPress: onPressList, img: doubleBeats, title: "Double Beat" })}
        {renderBlock({ onPress: onPressList, img: tripletDrag, title: "Triplet Drag" })}
      </View>
      <ExerciseModal modalVisibility={modalVisibility}
                     setModalVisibility={setModalVisibility}
                     navigation={props.navigation}
      />
    </Screen>
  );
};

const renderBlock = ({ onPress, img, title = "" }) => {
  return (
    <Button style={s.list} onPress={()=>onPress(title)}>
      <View style={s.image}>
        <Image source={img} style={{ width: "100%",height:100 }} />
      </View>
      <View style={s.title_block}>
        <Text size={"20_600"} style={s.title}>{title}</Text>
      </View>
    </Button>
  );
};
