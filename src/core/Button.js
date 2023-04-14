import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "./index";
import { Colors, padding } from "../resources";
import LinearGradientBG from "./LinearGradientBG";

const Button = ({
                  label,
                  style,
                  textStyle = {},
                  textSize,
                  variant = "",
                  icon = null,
                  children,
                  disabled = false,
                  ...args
                }) => {
  variant = variant.toLowerCase();

  if (variant === "gradient") {
    return (
      <LinearGradientBG
        degree={80}
        from={{ offset: "0%", color: "rgba(71, 67, 255, 1)" }}
        to={{ offset: "100%", color: "rgba(215,39,72,0.75)" }}
        styles={{ borderRadius: 10 }}>
        <TouchableOpacity
          disabled={disabled}
          style={[
            {
              ...s.container,
            },
            s["container_" + variant],
            style,
          ]}
          // type={variant}
          {...args}>
          {children || (
            <Text
              size={
                !textSize ? (size === "large" ? "bold20" : "normal") : textSize
              }
              style={{
                ...s["label_" + variant],
                ...textStyle,
                marginLeft: icon ? 8 : 0,
              }}>
              {label}
            </Text>
          )}
        </TouchableOpacity>
      </LinearGradientBG>
    );
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        s.container,
        s["container_" + variant + (disabled ? "_disabled" : "")],
        s.container_disabled,
        style,
      ]}
      {...args}>
      {children || (
        <Text
          size={!textSize ? "14_400" : textSize}
          style={[
            s["label_" + variant],
            s["label_" + variant + (disabled ? "_disabled" : "")],
            textStyle,
            { marginLeft: icon ? 8 : 0 },
          ]}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  container: {
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
    borderWidth: 1,
    boxSizing: "border-box",
    ...padding(10, 26),
  },
  container_: {
    ...padding(0),
    borderWidth: 0,
    borderRadius: 0,
  },
  container_primary: {
    backgroundColor: Colors.blue,
    borderColor: Colors.blue,
    fontWeight: 600,
    borderRadius:4
  },
  container_primary_disabled: {
    backgroundColor: Colors.gray,
    borderColor: Colors.gray,
  },
  container_secondary: {
    backgroundColor: "white",
    borderColor: Colors.blue,
    borderRadius:4
  },
  container_secondary_disabled: {
    backgroundColor: "white",
    borderColor: Colors.gray,
  },
  container_link: {
    borderWidth: 0,
    fontSize: 14,
    borderRadius: 0,
    ...padding(0),
  },
  label_: {
    color: "black",
  },
  label_link: {
    color: Colors.blue,
  },
  label_primary: {
    color: "white",
  },
  label_primary_disabled: {
    color: "white",
  },
  label_secondary: {
    color: Colors.blue,
  },
  label_secondary_disabled: {
    color: "black",
  },
  label_gradient: {
    color: "white",
  },
});

export default Button;
