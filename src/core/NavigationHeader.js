import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { Icon, Text} from './index';
import {padding, Colors} from '../resources';

const NavigationHeader = ({
  backHandler = true,
  backAction = null,
  buttons = null,
  style = {},
  title,
  ...props
}) => {
  return (
    <View style={[s.container, style]}>
      {backHandler ? (
        <TouchableOpacity
          style={s.back_btn}
          onPress={e =>
            backAction ? backAction(e) : props.navigation.goBack()
          }>
          <Icon type={'ArrowLeft'} />
        </TouchableOpacity>
      ) : null}

      <View style={s.title_container}>
        {title || (
          <Text style={s.title} size={'20_600'} numberOfLines={1}>
            {props.route.name}
          </Text>
        )}
      </View>

      <View style={s.buttons}>
        {buttons }
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.blue,
    justifyContent: 'space-between',
    position: 'relative',
    ...padding(16),
  },
  title_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    zIndex: -1,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: 'black',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
export default NavigationHeader;