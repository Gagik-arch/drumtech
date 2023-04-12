import { StyleSheet } from 'react-native';
import { padding, Colors, margin } from '../resources';

export const global = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: Colors.lightGray,
    width: '100%',
    ...margin(16, 0),
  },
});


