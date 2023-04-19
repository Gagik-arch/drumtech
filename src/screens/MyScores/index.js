import React from "react";
import { Text } from "../../core";
import {  ScrollView } from "react-native";
import { Colors } from "../../resources";
import AnimatedHeader from "react-native-animated-header";

export const MyScores = (props) => {
  return (
    <AnimatedHeader
      style={{ flex: 1 }}
      title="Scores"
      backStyle={{ marginLeft: 10 }}
      backTextStyle={{ fontSize: 14, color: "#000" }}
      titleStyle={{ textAlign: "center", fontSize: 22, left: 20, bottom: 20, color: "#000" }}
      headerMaxHeight={200}
      toolbarColor={Colors.yellow}
      disabled={false}
    >
      <ScrollView>
        {Array.from({ length: 100 }, (_, k) => "List " + (k + 1))
          ?.map((item, index) => {
            return (
              <Text key={item}>{item}</Text>
            );
          })}
      </ScrollView>
    </AnimatedHeader>
  );
};
