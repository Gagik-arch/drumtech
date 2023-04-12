import React, {useContext} from 'react';
import * as RN from 'react-native';
import {Colors, fonts} from '../resources';

const Text = ({children = '', style = {}, size = 'normal12', ...props}) => {
  size = size.toLowerCase();

  return (
    <RN.Text style={[fonts[size], {color: 'black'}, style]} {...props}>
      {children}
    </RN.Text>
  );
};

export default Text;
