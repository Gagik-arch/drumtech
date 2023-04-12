import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Icon, Text} from '../../core';
import { Colors, padding } from "../../resources";
import s from './style';

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
      style={[s.container,{
        borderTopWidth:selected ? 2 : 0,
        borderTopColor:Colors.yellow,
        ...padding(6, 0)
      }]}
      accessibilityRole={accessibilityRole}
      accessibilityState={accessibilityState}
      accessibilityLabel={accessibilityLabel}
      onPress={e => onPress(e)}
      onLongPress={onLongPress}>
      <Icon
        type={selected ? icon + 'Active':icon}
        size={28}
      />
      <Text style={[s.label,
        { color:selected ? Colors.blue : Colors.gray },
      ]}>
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </Text>
    </TouchableOpacity>
  );
};
