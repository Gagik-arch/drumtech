import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import {Colors, padding} from '../resources';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const Switch = ({onChange, defaultValue = false}) => {
  const [active, setActive] = useState(defaultValue);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        setActive(!active);
        LayoutAnimation.configureNext({
          ...LayoutAnimation.Presets.easeInEaseOut,
          duration: 120,
          springDamping: 0,
        });
        onChange && onChange(!active);
      }}
      style={[
        s.container,
        {justifyContent: active ? 'flex-end' : 'flex-start'},
        active ? s.container_active : null,
      ]}>
      <View style={[s.switch, active && s.switch_active]} />
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  container: {
    width: 56,
    height: 30,
    borderWidth: 2,
    borderColor: Colors.blue,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    overflow: 'hidden',
    ...padding(2),
  },
  switch: {
    width: 24,
    height: 24,
    borderRadius: 30,
    backgroundColor: Colors.blue,
  },
  container_active: {
    backgroundColor: Colors.blue,
    borderColor: Colors.blue,
  },

  switch_active: {
    backgroundColor: 'white',
  },
});
export default Switch;
