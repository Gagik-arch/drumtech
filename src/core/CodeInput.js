import React, { useEffect, useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Animated,
  Easing,
  Platform,
} from "react-native";
import { Text } from "./index";
import { Colors, margin } from "../resources";

const CodeInput = ({
                     columns = 6,
                     onFinish,
                     cellStyles,
                     keyboardType = "numeric",
                     name,
                     containerStyle,
                   }) => {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(true);
  const opacity = useState(new Animated.Value(0))[0];

  useEffect(() => {
    if (focused) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(opacity, {
            toValue: 1,
            duration: 700,
            useNativeDriver: true,
            easing: Easing.ease,
          }),
        ]),
      ).start();
    } else {
      Animated.loop(
        Animated.sequence([
          Animated.timing(opacity, {
            toValue: 1,
            duration: 700,
            useNativeDriver: true,
            easing: Easing.ease,
          }),
        ]),
      ).stop();
    }
  });

  const onTextChange = text => {
    if (keyboardType === "numeric") {
      text = text.toLowerCase().replace(/[^0-9]/g, "");
    }
    setValue(text);
    if (text.length === columns && onFinish) {
      onFinish({ name, text });
    }
  };

  return (
    <View style={[s.container, containerStyle]}>
      <View style={s.block}>
        {Array.from({ length: columns }).map((_, index) => {
          return (
            <View style={[s.column, cellStyles]} key={index}>
              {value.length > index && (
                <Text
                  numberOfLines={1}
                  textBreakStrategy={"simple"}
                  style={s.text}>
                  {value[index]}
                </Text>
              )}
              {value.length === index && focused && (
                <Animated.View style={[s.cursor, { opacity }]} />
              )}
            </View>
          );
        })}
      </View>
      <TextInput
        value={value}
        onChangeText={onTextChange}
        keyboardType={keyboardType}
        placeholder={"asd"}
        style={[s.input]}
        maxLength={columns}
        placeholderTextColor={"transparent"}
        autoFocus={true}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        caretHidden
        selectTextOnFocus={false}
        autoCompleteType={"off"}
        autoComplete={Platform.OS === "web" ? "none" : "off"}
        selectionColor={"transparent"}
        underlineColorAndroid={"transparent"}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    position: "relative",
    width:'100%'
  },
  input: {
    color: "transparent",
    fontSize: 0,
  },
  block: {
    flexDirection: "row",
    flex: 1,
    position: "absolute",
  },
  column: {
    backgroundColor: "white",
    borderColor: Colors.darkGray,
    borderWidth: 1,
    flex: 1,
    borderRadius: 4,
    justifyContent: "center",
    width: 32,
    height: 42,
    ...margin(0, 10),
  },
  text: {
    fontSize: 20,
    backgroundColor: "transparent",
    width: "100%",
    textAlign: "center",
    color:'black',
  },
  cursor: {
    height: 3,
    backgroundColor: 'black',
    position: "absolute",
    bottom: 10,
    right: 15,
    left: 15,
  },
});

export default CodeInput;
