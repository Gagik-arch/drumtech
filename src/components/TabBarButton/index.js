import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon, Text } from "../../core";
import { Colors, padding } from "../../resources";
import s from "./style";

export const TabBarButton = ({
                               icon,
                               accessibilityRole,
                               accessibilityState,
                               accessibilityLabel,
                               onPress,
                               onLongPress,
                               selected,
                               label,
                             }) => {
  return (
    <TouchableOpacity
      style={[s.container, {
        ...padding(6, 0 ,26,0 ),
      }]}
      accessibilityRole={accessibilityRole}
      accessibilityState={accessibilityState}
      accessibilityLabel={accessibilityLabel}
      onPress={e => onPress(e)}
      onLongPress={onLongPress}>
      <Icon
        type={icon}
        size={28}
      />
      <Text style={[s.label]} size={'12_400'}>
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </Text>
    </TouchableOpacity>
  );
};
